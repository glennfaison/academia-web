import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentExamination, Student, Examination } from 'src/app/models';
import { StudentService } from 'src/app/services/student.service';
import { ExaminationService } from 'src/app/services/examination.service';
import { StudentExaminationService } from 'src/app/services/student-examination.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { TableSettings } from '../crud-page/crud-page.component';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SequenceService } from 'src/app/services/sequence.service';

@Component({
  selector: 'app-class-results-form',
  templateUrl: 'class-results-form.component.html'
})
export class ClassResultsFormComponent implements OnInit {
  thisExamId: number;
  thisExam: Examination;
  studentList: Student[] = [];
  studentExamList: StudentExamination[] = [];

  searchFilter: any = {};
  tblStx: TableSettings = new TableSettings();
  @ViewChild('datatable', { static: false }) datatable: DatatableComponent;

  constructor(
    private alerts: AlertService,
    private modalSvc: NgbModal,
    private route: ActivatedRoute,
    private studentSvc: StudentService,
    private examinationSvc: ExaminationService,
    private studentExamSvc: StudentExaminationService,
  ) {
    this.fetchData();
  }

  ngOnInit() { }

  refresh() {
    this.searchFilter = {};
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      this.tblStx.loadingIndicator = true;
      this.thisExamId = this.route.snapshot.params.id;
      if (!this.thisExamId) {
        this.alerts.error('Could not load any data for this route.');
        // this.router.navigate(['404']);
      }
      this.thisExam = await this.examinationSvc.fetchOne(this.thisExamId);
      this.studentList = await this.studentSvc.fetchMany({ classroom_id: this.thisExam.classroom_id });
      this.studentExamList = await this.studentExamSvc.fetchMany({ examination_id: this.thisExamId });
    } catch (err) {
      this.alerts.error(HttpService.findHttpError(err));
    } finally { this.tblStx.loadingIndicator = false; }
  }

  async saveOne(student: Student): Promise<void> {
    if (!Number.isNaN(student.score)) {
      try {
        // The `student_id`, `classroom_id` keys are unique in the `student_examinations` table.
        await this.studentExamSvc.updateMany(
          { student_id: student.id, classroom_id: this.thisExam.classroom_id },
          { score: student.score }
        );
      } catch (error) {
        this.alerts.error(HttpService.findHttpError(error));
      }
    }
  }

}
