import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '13';
  data = 'Kavindu'

  getName(name:string | number){
    alert(name)
  }

  getData(val: string){
    console.log(val)
  }

  displayVal: string = ''
  count = 0

  getValue(val: string){
    this.displayVal = val
    console.log(this.displayVal)
  }
  
  increaseCounter(){
    this.count += 1
  }
  
  decreaseCounter(){
    this.count -= 1
  }

  name = "Peter"
  show = "yes"
  color = "green"
}
