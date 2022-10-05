export interface IDatabase {
  totalVisits: number
  formsSubmitted: Form[]
  isAdmin: boolean
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

export class Form {
  public fullName
  public email
  public gender
  public birthday
  public hobbies
  public location
  public color
  public seats
  public motorType
  public hobbiesString
  public locationString
  public processed

  constructor(data: IUserInput) {
    this.fullName = this.sanitize(data.fullName)
    this.email = this.sanitize(data.email)
    this.gender = this.sanitize(data.gender)
    this.birthday = this.sanitize(data.birthday.toISOString())
    this.hobbies = data.hobbies
    this.hobbiesString = this.hobbies.join(', ')
    this.location = {
      address: this.sanitize(data.address),
      city: this.sanitize(data.city),
      country: this.sanitize(data.country),
    }
    this.color = this.sanitize(data.color)
    this.seats = data.seats
    this.motorType = this.sanitize(data.motorType)
    this.locationString = `${this.location.address}, ${this.location.city}, ${this.location.country}`
    this.processed = this.randomBoolean()
  }

  private randomBoolean() {
    return Math.random() >= 0.5
  }

  private sanitize(string: string) {
    return string.replace(/<[^>]*>?/gm, '')
  }
}
