import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {
  
  emojis = ['😅', '😩', '🤐', '🤯'];
  randomEmoji: string = '';
  constructor() { }

  ngOnInit() {
    this.randomEmoji = this.emojis[Math.floor(Math.random() * Math.floor(3))];
  }

}
