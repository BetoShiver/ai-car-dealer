import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {
  FormToSubmit,
  IForm,
  ILocation,
  IUserInput,
} from '../shared/server/server.model'
import { ServerService } from '../shared/server/server.service'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  public hobbies = [
    'Camping',
    'Hiking',
    'Fishing',
    'Swimming',
    'Cycling',
    'Gaming',
    'Hunting',
    'Skiing',
    'Snowboarding',
    'Snowmobiling',
    'Snowshoeing',
    'Surfing',
    'Wakeboarding',
    'Windsurfing',
    'Yoga',
    'Playing music',
  ]

  public motortypes = ['Electric', 'Fuel', 'Hybrid']

  public profileForm!: FormGroup
  public formCompleted = false

  constructor(
    private formBuilder: FormBuilder,
    private server: ServerService,
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      hobbies: ['', [Validators.required]],
      color: ['', [Validators.required]],
      seats: [4, [Validators.required, Validators.max(7), Validators.min(2)]],
      motorType: ['', [Validators.required]],
    })
  }

  public onSubmit() {
    let inputs: IUserInput = this.profileForm.value
    const formToSubmit = new FormToSubmit(inputs)
    this.formCompleted = true
    console.log('formToSubmit: ', formToSubmit)
    setTimeout(() => {
      window.alert(
        'Yor details were received successfully.you will receive an email with your Perfect Car Match Shortly.',
      )
    }, 100)
  }
}
