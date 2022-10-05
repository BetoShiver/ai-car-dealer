import { Component, OnInit, OnDestroy } from '@angular/core'
import { ServerService } from 'src/app/shared/server/server.service'
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'forms-completed',
  templateUrl: './forms-completed.component.html',
  styleUrls: ['./forms-completed.component.scss'],
})
export class FormsCompletedComponent implements OnInit, OnDestroy {
  forms$ = this.server.forms$
  totalVisits$ = this.server.totalVisits$

  percentageOfVisits$ = combineLatest([this.forms$, this.totalVisits$]).pipe(
    map(([forms, totalVisits]) => {
      return forms.length / totalVisits
    }),
  )

  public percentage: number = 0
  private percentageSubscription: any

  constructor(private server: ServerService) {}

  ngOnInit() {
    this.percentageSubscription = this.percentageOfVisits$.subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage * 100)
      },
    )
  }

  ngOnDestroy() {
    this.percentageSubscription.unsubscribe()
  }
}
