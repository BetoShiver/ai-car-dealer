import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthday: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)dd$',
          ),
        ],
      ],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      hobbies: ['', [Validators.required]],
      color: ['', [Validators.required]],
      seats: [4, [Validators.required, Validators.max(7), Validators.min(2)]],
      motorType: ['', [Validators.required]],
    })
  }
}
