import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {
  playIconChecked: boolean = true; // Inicialmente establecido como verdadero
  folderIconChecked: boolean = true; // Inicialmente establecido como verdadero

  irAPagina(ruta: string) {
    this.router.navigate([ruta]); 
  }
  irPagina() {
    this.router.navigate(['../biblioteca-acordes']); 
  }

  irPagina2() {
    this.router.navigate(['../biblioteca-acordes']); 
  }
  irPagina3() {
    this.router.navigate(['../nivel']); 
  }

  irInicio() {
    this.router.navigate(['../inicio']); 
  }

 

  constructor(private router: Router) {
    
   }ngOnInit() {
  }

}
