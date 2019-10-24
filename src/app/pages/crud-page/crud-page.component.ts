import { OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { AlertService } from 'src/app/services/alert.service';
import { CrudService } from 'src/app/services/crud.service';

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
    protected crudSvc: CrudService,
  ) {
    this.refresh();
  }

  async addOne(item: any): Promise<void> {
    try {
      const newItem = await this.crudSvc.createOne(item);
      this.itemList = [...this.itemList, newItem];
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async fetchItemList(): Promise<void> {
    try {
      const res: any[] = await this.crudSvc.fetchMany();
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async fetchOne(id: any): Promise<void> {
    try {
      return await this.crudSvc.fetchOne(id);
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async updateOne(item: any): Promise<void> {
    try {
      const newItem = await this.crudSvc.updateOne(item);
      const idx = this.itemList.findIndex(i => i.id === item.id);
      this.itemList[idx] = newItem;
      this.itemList = [...this.itemList];
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async removeOne(item: any): Promise<void> {
    try {
      await this.crudSvc.deleteOne(item.id);
      const idx = this.itemList.findIndex(i => i.id === item.id);
      this.itemList.splice(idx, 1);
      this.itemList = [...this.itemList];
    } catch (error) {
      this.alerts.error(error);
    }
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.datatable.columnMode = ColumnMode.force;
  }

  refresh() {
    this.fetchItemList();
    this.searchFilter = {};
  }
}
