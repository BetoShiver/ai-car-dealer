import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSiteComponent } from './admin-site.component'
import { TableComponent } from './table/table.component'
import { MatImportsModule } from '../mat-imports/mat-imports.module'
import { NgCircleProgressModule } from 'ng-circle-progress'
import { FormsCompletedComponent } from './forms-completed/forms-completed.component'
import { ClientsByCountryComponent } from './clients-by-country/clients-by-country.component'

const components = [
  AdminSiteComponent,
  TableComponent,
  FormsCompletedComponent,
  ClientsByCountryComponent,
]

@NgModule({
  imports: [
    CommonModule,
    MatImportsModule,
    NgCircleProgressModule.forRoot({
      radius: 70,
      space: -25,
      outerStrokeWidth: 25,
      innerStrokeWidth: 25,
      outerStrokeGradient: false,
      outerStrokeColor: '#42BAFC',
      innerStrokeColor: '#C7EBFF',
      animationDuration: 1000,
      showUnits: true,
      showTitle: true,
      showSubtitle: true,
      showBackground: false,
      startFromZero: false,
      lazy: true,
    }),
  ],
  declarations: [...components],
  exports: [...components],
})
export class AdminSiteModule {}
