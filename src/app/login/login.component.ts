import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public password: string = ''

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(this.password)
  }
}
