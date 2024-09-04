import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carros } from '../../utils/carros';
import * as carrosData from '../../../../public/json/carrosData.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  carros: Carros [] = (carrosData as any).default;

  constructor() { }

  ngOnInit(): void { 
    console.log(carrosData);
   }
}
