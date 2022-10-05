import { Component, OnInit, OnDestroy } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AboutUsDialogComponent } from '../about-us-dialog/about-us-dialog.component'
import { ServerService } from '../shared/server/server.service'

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit, OnDestroy {
  public isAdmin = false
  private adminSubs: any = null

  constructor(private dialog: MatDialog, private server: ServerService) {}

  ngOnInit(): void {
    this.adminSubs = this.server.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin
    })
  }

  ngOnDestroy(): void {
    this.adminSubs.unsubscribe()
  }

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
    this.server.updateRole(true)
  }

  private logout(): void {
    this.isAdmin = false
    this.server.updateRole(false)
  }
}
