import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { UpdateApplicantsComponent } from './update-applicants/update-applicants.component';
import { ApplicantsComponent } from "./applicants/applicants.component";
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { AuthGuard } from './_guards/auth.guard';
import { ArchivesComponent } from './archives/archives.component';
import { RecruiterComponent } from "./recruiter/recruiter.component";
import { LoginAuthGuard } from "./_guards/login.guard";
import { InterviewSummeryComponent } from "./interview-summery/interview-summery.component";


const routes: Routes =[
    { path: 'register',        component: RegisterComponent },
    { path: 'app-recruiter',component: RecruiterComponent },
    { path: 'applicants',    component: ApplicantsComponent },
    { path: 'home',           component: HomeComponent  },
    { path: 'jobs',           component: JobsComponent  },
    { path: 'update-job',     component: UpdateJobComponent   },
    { path: 'update-applicants',component: UpdateApplicantsComponent  },
    { path: 'app-update-applicants',        component: UpdateApplicantsComponent },    
    { path: 'login',        component: LoginComponent    },
    { path: 'add-applicant',        component: AddApplicantComponent  },
    { path: 'app-archives',        component: ArchivesComponent  },
    { path: 'app-interview-summery', component: InterviewSummeryComponent  },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }