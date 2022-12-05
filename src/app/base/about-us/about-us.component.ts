import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }

}
