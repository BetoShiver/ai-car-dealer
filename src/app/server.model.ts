export interface Database {
  totalVisits: number
  formsSubmitted: Form[]
  isAdmin: boolean
}

export interface Form {
  fullName: string
  gender: string
  email: string
  location: location
  hobbies: string[]
  color: string
  seats: number
  motorType: string
}

export interface location {
  address: string
  city: string
  country: string
}
