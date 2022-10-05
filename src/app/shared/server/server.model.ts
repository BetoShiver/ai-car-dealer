export interface IDatabase {
  totalVisits: number
  adminVisits: number
  formsSubmitted: IForm[]
  isAdmin: boolean
}

export interface IForm {
  fullName: string
  email: string
  gender: string
  birthday: string
  hobbies: string[]
  location: ILocation
  color: string
  seats: number
  motorType: string
}

export interface ILocation {
  address: string
  city: string
  country: string
}

export interface IUserInput {
  fullName: string
  email: string
  gender: string
  birthday: Date
  hobbies: string[]
  color: string
  seats: number
  motorType: string
  address: string
  city: string
  country: string
}

export class FormToSubmit {
  public fullName
  public email
  public gender
  public birthday
  public hobbies
  public location
  public color
  public seats
  public motorType

  constructor(data: IUserInput) {
    this.fullName = this.sanitize(data.fullName)
    this.email = this.sanitize(data.email)
    this.gender = this.sanitize(data.gender)
    this.birthday = this.sanitize(data.birthday.toISOString())
    this.hobbies = data.hobbies.map((hobby) => {
      this.sanitize(hobby)
    })
    this.location = {
      address: this.sanitize(data.address),
      city: this.sanitize(data.city),
      country: this.sanitize(data.country),
    }
    this.color = this.sanitize(data.color)
    this.seats = data.seats
    this.motorType = this.sanitize(data.motorType)
  }

  private sanitize(string: string) {
    return string.replace(/<[^>]*>?/gm, '')
  }
}
