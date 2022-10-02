import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }
  
  isInputSafeLevel1(input: string): boolean {
    const regex = /<script.*?>.*?<\/script>|<.*?>/g
    return !regex.test(input)
  }
  
  isInputSafeLevel2(input: string): boolean {
    const regex = /<html.*?>.*?<\/html>|<.*?>/g
    return !regex.test(input)
  }
  

}
