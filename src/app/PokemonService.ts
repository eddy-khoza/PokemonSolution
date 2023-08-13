import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';
import { Pokemon } from './pokemon';
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn: 'root'
})

export class PokemonService{
    private apiServerUrl = '';

    constructor(private http: HttpClient) {}

    public getPokemons(): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(`${this.apiServerUrl}/pokemon/all`);
    }

    public getPokemon(pokemonId: number): Observable<Pokemon>{
        return this.http.get<Pokemon>(`${this.apiServerUrl}/pokemon/${pokemonId}}`);
    }
}