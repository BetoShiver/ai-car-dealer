import { Component, OnInit } from '@angular/core'
import { ServerService } from './shared/server/server.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ai-car-dealer'

  constructor(private server: ServerService) {}

  ngOnInit(): void {
    this.server.addVisit()
  }
}
