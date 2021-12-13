import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReportService} from "../../services/report.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-m-create',
  templateUrl: './m-create.component.html',
  styleUrls: ['./m-create.component.css']
})
export class MCreateComponent implements OnInit {

  fname: string | null;
  lname: string | null;
  role: String | null;
  source: number | null;
  School: string | null;
  start_date: Date | null;


  @ViewChild('name',  { read: ElementRef }) reportNameTextbox: ElementRef;

  public report: MCreateComponent;
  public formSubmitted: boolean = false;
  public defaultReportStartDate: Date = this.getFirstDayOfPreviousMonth();

  // Inject the ReportService into this component
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.report.fname = null;
    this.report.fname = null;
    this.report.role = null;
    this.report.source = null;
    this.report.School = null;
    this.report.start_date = this.getFirstDayOfPreviousMonth();


    // Use the ReportService
    this.reportService.showMessage('Init called');
  }

  ngAfterViewInit(): void {
    // Set the focus to the report name textbox
    setTimeout(() => this.reportNameTextbox.nativeElement.focus(), 0);
  }

  public reset(aForm:  NgForm): void {
    this.formSubmitted = false;

    // Reset the form back to pristine/untouched condition
    aForm.resetForm();

    this.report.start_date = this.getFirstDayOfPreviousMonth();
  }

  public save(aForm: NgForm): void {
    this.formSubmitted = true;

    // Mark all form fields as touched -- so that error validation displays
    aForm.form.markAllAsTouched();

    if (aForm.valid) {
      // Invoke a service to save the record
      console.log("Save record.");

      // Reset the form
      aForm.resetForm();
      this.formSubmitted = false;
    }
  }

  private getFirstDayOfPreviousMonth(): Date {
    let now = new Date();
    let firstDayPrevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return firstDayPrevMonth;
  }


}
