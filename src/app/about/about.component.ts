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

commentaire={data: null, message:""};
  constructor() { }

  ngOnInit() {
  }
  onAddCommentaire(c)
{
c.data=new Date()
this.comments.push(c);
this.commentaire.message="";
}

}
