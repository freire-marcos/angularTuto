import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

/*  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
*/

@Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
