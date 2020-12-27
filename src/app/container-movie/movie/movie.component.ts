import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() username: String;
  @Output() usernameEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  handleClick() {
    this.usernameEmitter.emit("Ned");
  }

}
