import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string="Lista de Alumnos en un curso"
 

  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'Hector',
    edad: 25,
    correo:'hector.nino@unach.mx',
    activo:true
    },
    {
      nombre: 'Arturo',
    edad: 27,
    correo:'arturo@unach.mx',
    activo:false
    },
    {
      nombre: 'Georgina',
    edad: 20,
    correo:'georgina@unach.mx',
    activo:true
    }
  ]
}
