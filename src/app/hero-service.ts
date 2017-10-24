import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HeroService {
  private heroesUrl = '/api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {};
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(`${this.heroesUrl}/${id}`)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<void> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    console.log('id: ', id);
    console.log(`url, ${this.heroesUrl}/${id}`);
    return this.http
      .delete(`${this.heroesUrl}/${id}`,{headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }
}
