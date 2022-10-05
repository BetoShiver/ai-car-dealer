import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSiteComponent } from './admin-site.component'
import { TableComponent } from './table/table.component'
import { MatImportsModule } from '../mat-imports/mat-imports.module'

const components = [AdminSiteComponent, TableComponent]

@NgModule({
  imports: [CommonModule, MatImportsModule],
  declarations: [...components],
  exports: [...components],
})
export class AdminSiteModule {}
