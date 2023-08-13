import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { Pokemon } from './pokemon';
import { environment } from 'src/environmwnt/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiServerUrl = environment.apiBaseUrl; 

  constructor(private http: HttpClient) { }
  
  public getPokemons(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/pokemon/all`);
  }

  public getPokemon(pokemonId:number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/pokemon/find/${pokemonId}`);
  }
}
