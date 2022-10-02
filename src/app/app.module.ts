import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatImportsModule } from './mat-imports/mat-imports.module';
import { FooterComponent } from './footer/footer.component';
import { AdminSiteComponent } from './admin-site/admin-site.component';
import { ClientFormComponent } from './client-form/client-form.component'

@NgModule({
  declarations: [AppComponent, TopBarComponent, FooterComponent, AdminSiteComponent, ClientFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
