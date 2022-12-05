import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
lname!:string;
name!:string;
mail!:string;
message!:string;
  constructor() { }

  ngOnInit(): void {
  }
submitForm(){
  const message=`thank you ${this.lname}${this.name} for choosing us`
alert(message);
}
}
