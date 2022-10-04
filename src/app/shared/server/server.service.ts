import { Injectable } from '@angular/core'
import { IForm } from './server.model'

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public totalVisits: number = 0
  public forms: IForm[] = []

  constructor() {
    this.fetchVisits()
    this.fetchForms()
  }

  public getVisits(): number {
    return this.totalVisits
  }

  public saveForm(form: IForm): void {
    this.forms.push(form)
    localStorage.setItem('forms', JSON.stringify(this.forms))
  }

  public getForms(): IForm[] {
    return this.forms
  }

  public addVisit(): void {
    this.totalVisits++
    localStorage.setItem('totalVisits', this.totalVisits.toString())
  }

  private fetchVisits(): void {
    const totalVisits = localStorage.getItem('totalVisits')
    if (totalVisits) {
      this.totalVisits = parseInt(totalVisits)
    } else {
      this.totalVisits = 0
    }
  }

  private fetchForms(): void {
    const forms = localStorage.getItem('forms')
    if (forms) {
      this.forms = JSON.parse(forms)
    } else {
      this.forms = []
    }
  }
}
