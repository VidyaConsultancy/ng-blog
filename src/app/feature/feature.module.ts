import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent as FeatureOneCmp } from './feature.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

@NgModule({
  declarations: [FeatureOneCmp, ReactiveFormComponent],
  imports: [CommonModule, FeatureRoutingModule],
  exports: [FeatureOneCmp, ReactiveFormComponent],
})
export class FeatureModule {}
