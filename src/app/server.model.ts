export interface Database {
  totalVisits: number
  formsSubmitted: Form[]
  isAdmin: boolean
}

export interface Form {
  fullName: string
  email: string
  gender: string
  birthday: string
  hobbies: string[]
  location: location
  color: string
  seats: number
  motorType: string
}

export interface location {
  address: string
  city: string
  country: string
}
