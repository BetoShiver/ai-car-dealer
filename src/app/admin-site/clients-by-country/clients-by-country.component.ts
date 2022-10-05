import { Component, OnInit, OnDestroy } from '@angular/core'
import { Form } from 'src/app/shared/server/server.model'
import { ServerService } from 'src/app/shared/server/server.service'

export interface Country {
  name: string
  numberOfClients: number
  height?: number
}

@Component({
  selector: 'clients-by-country',
  templateUrl: './clients-by-country.component.html',
  styleUrls: ['./clients-by-country.component.scss'],
})
export class ClientsByCountryComponent implements OnInit, OnDestroy {
  public forms: Form[] = []
  public countries: Country[] = []
  public totalNumberOfClients = 0
  private subscription: any

  constructor(private server: ServerService) {}

  ngOnInit() {
    this.subscription = this.server.forms$.subscribe((forms) => {
      forms.forEach((form) => {
        this.totalNumberOfClients++
        let country = form.location.country
        let countryObject = this.countries.find((c) => c.name === country)
        if (countryObject) {
          countryObject.numberOfClients++
        } else {
          this.countries.push({ name: country, numberOfClients: 1 })
        }
      })
      this.countries.forEach((country) => {
        country.height =
          (country.numberOfClients / this.totalNumberOfClients) * 200
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
