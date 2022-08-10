import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent as FeatureOneCmp } from './feature.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FeatureOneCmp],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [FeatureOneCmp],
})
export class FeatureModule {}
