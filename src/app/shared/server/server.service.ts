import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public totalVisits: number = 0

  constructor() {}
}
