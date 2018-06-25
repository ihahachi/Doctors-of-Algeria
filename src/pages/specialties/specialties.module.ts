import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialtiesPage } from './specialties';

@NgModule({
  declarations: [
    SpecialtiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialtiesPage),
  ],
})
export class SpecialtiesPageModule {}
