import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info= {
    nom:"abdesslem",
    email:"abdesslem@gmail.com",
    tel:667215376
  }
  comments=[{data:new Date(),message:"A"},
  {data:new Date(),message:"B"},
  {data:new Date(),message:"C"}


]
  constructor() { }

  ngOnInit() {
  }

}
