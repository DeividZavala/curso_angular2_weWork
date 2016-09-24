import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private alumnosService:AlumnosService) { }

  alumnos: Alumno[];

  ngOnInit() {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.alumnos = alumnos)
  }

}
