import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: string;
 
  @Input()
  numero!:number;

  pegarImagemPokemon(){
    const numeroformatdo = this.leadingZero(this.numero);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroformatdo}.png`
}

leadingZero(str: string | number, size =3): string{
  let s = String(str);
  while(s.length <(size||2)){
    s = '0' + s ;
  }
  return s;
}

}
