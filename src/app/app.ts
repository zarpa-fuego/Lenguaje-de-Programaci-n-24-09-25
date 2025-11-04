import {AfterViewInit, Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Persona} from './models/Persona';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  //Vamos a crear un objeto
  public persona : Persona = new Persona(); //Esta es una forma de instanciar un objeto
  public nombre: string = "";
  public personas: Persona[] = []; //Vamos a crear una lista. Se a instanciado de tipo lista
  protected readonly title = signal('lista_games');
  uniquekey: any;

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnInit(): void {
    this.nombre = "Hombre lobo de mar 2";
    console.log("ngOnInit()");
    console.log(this.nombre);
    this.persona.nombre = 'Rodrigito 1'
    this.persona.email = 'rodrigito@gmail.com'
    this.persona.phone = '999999999'
    this.persona.addres = 'Sin dirección'
    this.personas.push(this.persona);
    this.personas.push(this.persona);
    this.personas.push(this.persona);
    this.personas.push(this.persona);
    this.personas.push(this.persona);
    console.log(this.personas)
    console.log(this.persona);
    }
  constructor() {
    console.log(this.nombre);
    console.log("constructor")
    this.nombre = "Hombre lobo de mar";
    console.log(this.nombre);
  }

  clickMe(persona: Persona): void {
    alert(JSON.stringify(persona));
    // Cuando ejecuto ese metodo, va votar un alert y me va a mostrar esa información de ese objeto
  }

  agregar(persona: Persona) {
    this.personas.push(this.persona);
  }
}
