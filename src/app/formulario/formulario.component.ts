import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ReactiveFormsModule, CommonModule, IonicModule, FormsModule]
})

export class FormularioComponent  implements OnInit {
  peliculas: { nombre: string | null; fecha: string | null; nombreP: string | null; casaP: string |null, protagonista: string | null }[] = [];

  pelicula = new FormGroup({
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    nombreP: new FormControl('', Validators.required),
    casaP: new FormControl('', Validators.required),
    protagonista: new FormControl('', Validators.required)
  });

  nPelicula(){
    if (this.pelicula.valid && this.pelicula.value.fecha! <= '10000'){
      const nuevaPelicula = {
        nombre: this.pelicula.value.nombre!,
        fecha: this.pelicula.value.fecha!,
        nombreP: this.pelicula.value.nombreP!,
        casaP: this.pelicula.value.casaP!,
        protagonista: this.pelicula.value.protagonista!,
      };

      this.peliculas.push(nuevaPelicula);

      this.pelicula.reset();
    }
  }

  constructor() { }

  ngOnInit() {}

}
