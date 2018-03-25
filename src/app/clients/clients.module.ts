import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PaymentComponent } from './payment/payment.component';
import { ClientDashboardComponent } from './dashboard/client-dashboard/client-dashboard.component';
import { BookConfirmComponent } from './book-confirm/book-confirm.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegistrationComponent,
    SchedulingComponent,
    ScheduleComponent,
    PaymentComponent,
    ClientDashboardComponent,
    BookConfirmComponent
  ]
})
export class ClientsModule { }
