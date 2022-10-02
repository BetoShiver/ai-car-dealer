import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public isAdmin = false

  constructor() {}

  ngOnInit(): void {}

  public aboutUsClicked(): void {}

  public adminAreaClicked(): void {
    this.isAdmin ? this.logout() : this.openAdminSite()
  }

  private openAdminSite(): void {}
  private logout(): void {
    this.isAdmin = false
  }
}
