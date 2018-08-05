import { Injectable } from "@angular/core";



@Injectable ()
export class AboutService
{
    info= {
        nom:"abdesslem",
        email:"abdesslem@gmail.com",
        tel:667215376
      }
      comments=[{data:new Date(),message:"A"},
      {data:new Date(),message:"B"},
      {data:new Date(),message:"C"}
    ]

    addComment(c)
    {
        c.data=new Date()
        this.comments.push(c);

    }

    getAllComments()
    {
        return this.comments;
    }

getInfo()
    {
        return this.info;
    }
}

