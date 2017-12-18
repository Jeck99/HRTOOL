import { Component, OnInit } from '@angular/core';
import { DbService } from ".././DbService/DbService";
import { Applicant } from "../ModelService/Applicant"
import { NotificationsService } from '../notifications/notifications.component';
import { AuthService } from "../AuthService/Auth.Service";

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
  providers: [DbService],
})
export class ApplicantsComponent implements OnInit {
  page: number = 1;

  ngOnInit() {
    this.GetApplicants();

  }

  constructor(private Service: DbService, private Notify: NotificationsService, public AuthService: AuthService) { }
  AllApplicants: any[];
  lock: boolean = false;
  AddApplicant = false;
  EditMode: boolean = false;
  ApplicantDetailsMode: boolean = false;
  ApplicantToView: Applicant = new Applicant("", "", 0, "", "");

  ViewUserDetails(Applicant: Applicant) {
    this.ApplicantToView = Applicant;
    this.ApplicantDetailsMode = true;
  }

  GetApplicants() {
    let req = this.Service.Get("Applicants")
    req.subscribe(rsp => {
      this.AllApplicants = rsp.json().sort((applicant1, applicant2) => {
        if (applicant1.MatchPrecentage < applicant2.MatchPrecentage) {
          return 1;
        }
        else if (applicant1.MatchPrecentage > applicant2.MatchPrecentage
        ) {
          return -1;
        }
        return 0;
      });

      this.AllApplicants = this.AllApplicants.filter(app=> app.Active);
    },
      (err: any) => {
      });
  }
  OnAppearance(CloseForm: string) {
    this.EditMode = false;
    if (CloseForm == 'success')
      this.Notify.showNotification('top', 'right', 'Aplicant Update Succesfully', 2);
  }

  onAddApplicant(CloseForm: string) {
    this.AddApplicant = false;
    if (CloseForm == 'success')
      this.Notify.showNotification('top', 'right', 'Applicant Added Succesfully', 2);
  }

  OnAppearanceDetails(CloseForm: boolean) {
    this.ApplicantDetailsMode = false;
    if (CloseForm)
      this.Notify.showNotification('top', 'right', 'Set Interview Succesfully. Go To Dashboard For View your Further Interviews', 2);
    this.ngOnInit();
  }

  Lock() {
    this.lock = !this.lock;
    if (this.lock) {
    }
  }
  ApplicantToEdit: Applicant = new Applicant("", "", 0, "", "");

  toArchive(ApplicantToUpdate : Applicant)
  {
    ApplicantToUpdate.Active = false;
    let req = this.Service.Edit("Applicants", ApplicantToUpdate);
    req.subscribe(res => {
      this.Notify.showNotification('bottom', 'right', 'Sent To Archive', 4);
      this.ngOnInit();
    }, (err) => {
    });
  }

  PrepareForEdit(Applicant: Applicant) {
    this.EditMode = true;
    this.ApplicantToEdit = Applicant;
  }

  AddApplicantForm() {
    this.AddApplicant = !this.AddApplicant;
  }

  PrecetageHandle(MatchePrecentage: number) {
    return Math.floor(MatchePrecentage * 100);
  }
}
