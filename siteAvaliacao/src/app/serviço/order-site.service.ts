import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  constructor() { }

  varDetails = [
    {
      id:1,
      varName: "HTML",
      varImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
      },
    {
      id:2,
      varName: "CSS",
      varImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
    },
    {
      id:3,
      varName: "TypeScript",
      varImg: "https://camo.githubusercontent.com/1676659c07ae4e01eb6bedbcd22383751cf59747b61ea44d82658c9e4bf090f8/68747470733a2f2f6769746c61622e636f6d2f75706c6f6164732f2d2f73797374656d2f67726f75702f6176617461722f31303732303235332f747970657363726970742e706e67"
    },
    {
      id:4,
      varName: "Angular",
      varImg: "https://miro.medium.com/v2/resize:fit:1200/1*GmMtKznzJ1dS8sSzxzR3ow.png"
    }
  ]
}
