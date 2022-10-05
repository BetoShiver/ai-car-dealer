import { Component, OnInit } from '@angular/core'
import { IForm } from 'src/app/shared/server/server.model'
import { ServerService } from 'src/app/shared/server/server.service'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSource!: MatTableDataSource<IForm>

  formsSubscription: any

  displayedColumns: string[] = [
    'fullName',
    'email',
    'gender',
    'birthday',
    'hobbies',
    'location',
    'color',
    'seats',
    'motorType',
  ]

  constructor(private server: ServerService) {}

  ngOnInit() {
    this.formsSubscription = this.server.forms$.subscribe((forms) => {
      console.log('forms: ', forms)
      this.dataSource = new MatTableDataSource(forms)
    })
  }
}
