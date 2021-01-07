import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() posterImgUrl: String;
  @Input() title: String;
  @Input() description: String;
  @Input() releaseDate: String;
  @Input() popularity: String;

  constructor() { }

  ngOnInit(): void {

  }

}
