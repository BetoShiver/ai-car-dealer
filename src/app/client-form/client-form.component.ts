import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

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

  profileForm = this.formBuilder.group({
    fullName: [''],
    gender: [''],
    email: [''],
    location: [''],
    hobbies: [''],
    color: [''],
    seats: [''],
    motorType: [''],
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
