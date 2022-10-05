import { Component, OnInit, OnDestroy } from '@angular/core'
import { ServerService } from 'src/app/shared/server/server.service'

export interface Hobby {
  name: string
  numberOfClients: number
  width?: number
}

@Component({
  selector: 'common-hobbies',
  templateUrl: './common-hobbies.component.html',
  styleUrls: ['./common-hobbies.component.scss'],
})
export class CommonHobbiesComponent implements OnInit, OnDestroy {
  public hobbies: Hobby[] = []
  private subscription: any

  constructor(private server: ServerService) {}

  ngOnInit() {
    this.subscription = this.server.forms$.subscribe((forms) => {
      forms.forEach((form) => {
        form.hobbies.forEach((hobby) => {
          let hobbyObject = this.hobbies.find((h) => h.name === hobby)
          if (hobbyObject) {
            hobbyObject.numberOfClients++
          } else {
            this.hobbies.push({ name: hobby, numberOfClients: 1 })
          }
        })
      })
      this.hobbies.forEach((hobby) => {
        hobby.width = (hobby.numberOfClients / forms.length) * 200
      })
      this.hobbies.sort((a, b) => b.numberOfClients - a.numberOfClients)
    })
  }

  ngOnDestroy() {}
}
