import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent as FeatureOneCmp } from './feature.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FeatureOneCmp, ReactiveFormComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [FeatureOneCmp, ReactiveFormComponent],
})
export class FeatureModule {}
