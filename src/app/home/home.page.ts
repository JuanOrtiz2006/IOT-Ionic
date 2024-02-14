import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  led: boolean = false;//Control de boton 1
  led2: boolean = false;//Control de boton 2
  led3: boolean = false;//Control de boton 3
  led4: boolean = false;//Control de boton 4
  buttonColor: string = '';//Cambiar color de boton 1
  buttonColor2: string = '';//Cambiar color de boton 2
  buttonColor3: string = '';//Cambiar color de boton 3
  buttonColor4: string = '';//Cambiar color de boton 4

  constructor(private db: Firestore) {}
  //Metodo para cambiar de color los botones y cambiar el valor del dato en firestore
  async mixto(buttonNumber: number)//El metodo tiene una variable tipo numero
  {
    if (buttonNumber == 1) {//Si la variable es igual a 1
      this.led = !this.led;//El valor del led cambia
      this.buttonColor = this.led ? 'success' : 'secondary';//Cambia el color del boton
      await setDoc(doc(this.db, 'controlLed/controlLed'), { encender: this.led });//Cambia el valor en el firestore
    } else if (buttonNumber == 2) {
      this.led2 = !this.led2;
      this.buttonColor2 = this.led2 ? 'success' : 'secondary';
      await setDoc(doc(this.db, 'controlLed/controlLed2'), { encender: this.led2 });
    } else if (buttonNumber == 3) {
      this.led3 = !this.led3;
      this.buttonColor3 = this.led3 ? 'success' : 'secondary';
      await setDoc(doc(this.db, 'controlLed/controlLed3'), { encender: this.led3 });
    }
  }

  async todos() {
    this.led4 = !this.led4;
    this.led = !this.led;
    this.led2 = !this.led2;
    this.led3 = !this.led3;
    this.buttonColor = this.led4 ? 'success' : 'secondary';
    this.buttonColor2 = this.led4 ? 'success' : 'secondary';
    this.buttonColor3 = this.led4 ? 'success' : 'secondary';
    this.buttonColor4 = this.led4 ? 'success' : 'secondary';
    }
}
