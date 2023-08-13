import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import {HttpErrorResponse} from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.getPokemons();
  }

  public getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(
      (response: Pokemon[]) => {
        this.pokemons = response;
        console.log(this.pokemons);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPokemons(key: string): void {
    console.log(key);
    const results: Pokemon[] = [];
    for (const pokemon of this.pokemons) {
      if (pokemon.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(pokemon);
      }
    }
    this.pokemons = results;
    if (results.length === 0 || !key) {
      this.getPokemons();
    }
  }

  public onOpenModal(pokemon: Pokemon, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.click();
  }



}