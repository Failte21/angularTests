import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero-service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  // heroes: Hero[],
  // templateUrl: './app.component.html',
  styleUrls: ['./app-component.css', './heroes-component.css'],
  templateUrl: './heroes-component.html',
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/details', this.selectedHero.id]);
  }
}
