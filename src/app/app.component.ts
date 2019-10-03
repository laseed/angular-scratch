import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "";
  state = false;
  flag = true;
  studentRoster = ['Ed', 'Edd', 'Eddie']
  current='';
  toggle = true;
  counter = [];
  toggleDisplay(){
    this.toggle = !this.toggle;
    this.counter.push(this.counter.length +1);
  }
  getLength(){
    if (this.counter.length > 4){
      return 'blue';
    }else {
      return 'black';
    }
  }
  submitName(){
    this.studentRoster.push(this.current);

  }
  restName() {
    this.name = "";
  }
  checkName() {
    if (this.name === "") {
      this.state = true;
      return this.state;
    }
  }
  toggleFlag(){
    this.flag = !this.flag;
    return this.flag;
  }
  getColor(){
    if(this.flag === true){
      return 'green';

    }else{
      return 'red';
    }
  }
}
