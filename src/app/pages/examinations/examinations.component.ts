import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/services/examination.service';
import { Examination } from 'src/app/models/examination.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-examinations',
  templateUrl: 'examinations.component.html'
})
export class ExaminationsComponent implements OnInit {
  itemList: Examination[];

  constructor(
    private examSvc: ExaminationService,
    private alerts: AlertService,
  ) {
    this.fetchExaminations();
  }

  ngOnInit() {}

  async createExamination(item: Examination): Promise<void> {
    try {
      const newItem = await this.examSvc.createExamination(item);
      this.itemList = [...this.itemList, newItem];
      this.fetchExaminations();
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async fetchExaminations(): Promise<void> {
    try {
      const res: Examination[] = await this.examSvc.fetchExaminations();
      console.log(res);
      if (!Array.isArray(res)) { throw res; }
      this.itemList = res || [];
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async updateExamination(item: Examination): Promise<void> {
    try {
      const newItem = await this.examSvc.updateExamination(item);
      this.fetchExaminations();
    } catch (error) {
      this.alerts.error(error);
    }
  }

  async deleteExamination(id): Promise<void> {
    try {
      await this.examSvc.deleteExamination(id);
      this.fetchExaminations();
    } catch (error) {
      this.alerts.error(error);
    }
  }
}
