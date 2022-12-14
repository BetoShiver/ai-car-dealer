import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatImportsModule } from './mat-imports/mat-imports.module'
import { FooterComponent } from './footer/footer.component'
import { ClientFormComponent } from './client-form/client-form.component'
import { AboutUsDialogComponent } from './about-us-dialog/about-us-dialog.component'
import { LoginComponent } from './login/login.component'
import { AdminSiteModule } from './admin-site/admin-site.module'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    ClientFormComponent,
    AboutUsDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatImportsModule,
    AdminSiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
