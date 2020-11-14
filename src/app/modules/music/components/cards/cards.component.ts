import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() items:Array<any>;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrarArtista(item){

  }

}
