import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Form } from './server.model'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public totalVisits: number = 0
  public forms: Form[] = []

  private totalVisitsSource = new BehaviorSubject<number>(0)
  public totalVisits$ = this.totalVisitsSource.asObservable()

  private formsSource = new BehaviorSubject<Form[]>([])
  public forms$ = this.formsSource.asObservable()

  private roleSource = new BehaviorSubject<boolean>(false)
  public isAdmin$ = this.roleSource.asObservable()

  constructor(private router: Router) {
    this.fetchVisits()
    this.fetchForms()
    this.fetchRole()
  }

  private fetchRole(): void {
    const data = localStorage.getItem('isAdmin')
    if (data) {
      let isAdmin = JSON.parse(data)
      this.roleSource.next(isAdmin)
      if (isAdmin) {
        this.router.navigate(['/admin'])
      }
    } else {
      this.roleSource.next(false)
    }
  }

  public updateRole(isAdmin: boolean): void {
    localStorage.setItem('isAdmin', isAdmin.toString())
    this.roleSource.next(isAdmin)
    isAdmin ? this.router.navigate(['/admin']) : this.router.navigate(['/'])
  }

  public addVisit() {
    this.totalVisits++
    localStorage.setItem('totalVisits', this.totalVisits.toString())
    this.totalVisitsSource.next(this.totalVisits)
  }

  public getVisits(): number {
    return this.totalVisits
  }

  public saveForm(form: any): void {
    this.forms.push(form)
    localStorage.setItem('forms', JSON.stringify(this.forms))
    this.formsSource.next(this.forms)
  }

  public getForms(): Form[] {
    return this.forms
  }

  private fetchVisits(): void {
    const totalVisits = localStorage.getItem('totalVisits')
    if (totalVisits) {
      this.totalVisits = parseInt(totalVisits)
    } else {
      this.totalVisits = 0
    }
    this.totalVisitsSource.next(this.totalVisits)
  }

  private fetchForms(): void {
    const forms = localStorage.getItem('forms')
    if (forms) {
      this.forms = JSON.parse(forms)
    } else {
      this.forms = []
    }
    this.formsSource.next(this.forms)
  }
}
