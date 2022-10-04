import {
  Component,
  OnInit,
  ɵisDefaultChangeDetectionStrategy,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FormToSubmit, IForm, ILocation, IUserInput } from '../server.model'

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
    console.log('formToSubmit: ', formToSubmit)
  }
}
