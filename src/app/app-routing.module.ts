import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminSiteComponent } from './admin-site/admin-site.component'
import { ClientFormComponent } from './client-form/client-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/client-form',
    pathMatch: 'full',
  },
  {
    path: 'client-form',
    component: ClientFormComponent,
  },
  {
    path: 'admin',
    component: AdminSiteComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
