import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-admin-site',
  templateUrl: './admin-site.component.html',
  styleUrls: ['./admin-site.component.scss'],
})
export class AdminSiteComponent implements OnInit {
  view = 'table'

  constructor() {}

  ngOnInit(): void {}
}
