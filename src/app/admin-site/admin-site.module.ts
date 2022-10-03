import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSiteComponent } from './admin-site.component'

const components = [AdminSiteComponent]

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components],
})
export class AdminSiteModule {}
