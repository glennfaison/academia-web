import { OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { CrudService } from 'src/app/services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';

export class TableSettings {
  headerHeight: any = 42;
  footerHeight: any = 42;
  rowHeight: any = 46;
  scrollbarH = true;
  scrollbarV = false;
  loadingIndicator = true;
  offset = 1;
  columnMode: any = ColumnMode.flex;
  className = 'material';
  limit = 5;
  limitOptions: number[] = [5, 10, 15, 20, 25, 30];
}


export class CrudPageComponent implements OnInit, AfterViewInit {
  itemList: any[];
  searchFilter: any = {};
  tblStx: TableSettings = new TableSettings();
  @ViewChild('datatable', { static: false }) datatable: DatatableComponent;

  constructor(
    protected alerts: AlertService,
    protected modalSvc: NgbModal,
    protected crudSvc: CrudService,
    protected modal: typeof GenericModalComponent = GenericModalComponent,
  ) {
    this.refresh();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

  refresh() {
    this.fetchItemList();
    this.searchFilter = {};
  }

  async openAddModal() {
    try {
      const modalRef = this.modalSvc.open(this.modal, {
        size: 'lg',
        centered: false,
        backdrop: true,
      });
      modalRef.componentInstance.title = 'Create Item';
      try {
        const result = await modalRef.result;
        const item = await this.crudSvc.createOne(result);
        this.itemList = [...this.itemList, item];
      } catch (e) { }
    } catch (error) {
      this.alerts.error(HttpService.findHttpError(error));
    }
  }

  async fetchItemList(): Promise<void> {
    try {
      const res: any[] = await this.crudSvc.fetchMany();
      if (!Array.isArray(res)) {
        this.itemList = [];
        throw res;
      }
      this.itemList = res;
    } catch (error) {
      this.alerts.error(HttpService.findHttpError(error));
    }
  }

  async fetchOne(id: any): Promise<void> {
    try {
      return await this.crudSvc.fetchOne(id);
    } catch (error) {
      this.alerts.error(HttpService.findHttpError(error));
    }
  }

  async openEditModal(item: any): Promise<void> {
    try {
      const modalRef = this.modalSvc.open(this.modal, {
        size: 'lg',
        centered: false,
        backdrop: true,
      });
      modalRef.componentInstance.title = 'Edit Item';
      modalRef.componentInstance.item = item;
      try {
        const result = await modalRef.result;
        await this.crudSvc.updateOne(result);
        const idx = this.itemList.findIndex(i => i.id === item.id);
        this.itemList[idx] = result;
        this.itemList = [...this.itemList];
      } catch (e) { }
    } catch (error) {
      this.alerts.error(HttpService.findHttpError(error));
    }
  }

  async openDeleteModal(item: any): Promise<void> {
    try {
      const modalRef = this.modalSvc.open(GenericModalComponent, {
        // size: 'lg',
        centered: false,
        backdrop: true,
      });
      modalRef.componentInstance.title = 'Delete Item?';
      modalRef.componentInstance.message = 'Are you sure you want to delete this Item? This action cannot be undone';
      try {
        await modalRef.result;
        await this.crudSvc.deleteOne(item.id);
        const idx = this.itemList.findIndex(i => i.id === item.id);
        this.itemList.splice(idx, 1);
        this.itemList = [...this.itemList];
      } catch (e) { }
    } catch (error) {
      this.alerts.error(HttpService.findHttpError(error));
    }
  }

}
