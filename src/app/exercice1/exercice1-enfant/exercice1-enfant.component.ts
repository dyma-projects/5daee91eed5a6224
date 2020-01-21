import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
@Input() public compteur: number;
@Output() Compteurparent= new EventEmitter();
add(compteur :number): void{
this.compteur++;
this.Compteurparent.emit({
	value:this.compteur
});
}
soustraire(compteur :number): void{
this.compteur--;
this.Compteurparent.emit({
	value:this.compteur
});
}
  constructor() { }

  ngOnInit() {
  }

}
