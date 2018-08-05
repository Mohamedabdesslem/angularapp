import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
infos:{nom:string,email:string,tel:number};
comments=[];
commentaire={data: null, message:""};

  constructor(private aboutservice:AboutService) { 
    this.infos=this.aboutservice.getInfo();
    this.comments=this.aboutservice.getAllComments();

  }

  ngOnInit() {
  }
  onAddCommentaire(c)
{
this.aboutservice.addComment(c);
this.commentaire.message="";
this.comments=this.aboutservice.getAllComments();
}

}
