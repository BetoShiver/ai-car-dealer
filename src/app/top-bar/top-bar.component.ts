import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AboutUsDialogComponent } from '../about-us-dialog/about-us-dialog.component'
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public isAdmin = false

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public aboutUsClicked(): void {
    this.dialog.open(AboutUsDialogComponent, {
      maxWidth: '400px',
    })
  }

  public adminAreaClicked(): void {
    this.isAdmin ? this.logout() : this.openAdminSite()
  }

  private openAdminSite(): void {
    this.isAdmin = true
    localStorage.setItem('isAdmin', 'true')
    // const dialogRef =this.dialog.open(LoginComponent, {
    //   maxWidth: '400px',
    // })
  }

  private logout(): void {
    this.isAdmin = false
    localStorage.removeItem('isAdmin')
  }
}
