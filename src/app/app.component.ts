import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ai-car-dealer'

  ngOnInit(): void {
    // this.updateVisits()
  }

  private updateVisits(): void {
    let totalVisits = localStorage.getItem('totalVisits')
    if (totalVisits) {
      totalVisits = (parseInt(totalVisits) + 1).toString()
    } else {
      totalVisits = '1'
    }
    localStorage.setItem('totalVisits', totalVisits)
  }
}
