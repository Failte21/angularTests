import {Component, OnInit} from '@angular/core';
import {HeroSearchService} from './app/hero-search.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from './app/hero';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  provider: [ HeroSearchService ]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchItems = new Subject<string>();

}
