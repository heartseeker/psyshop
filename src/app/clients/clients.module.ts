import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PaymentComponent } from './payment/payment.component';


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
    PaymentComponent
  ]
})
export class ClientsModule { }
