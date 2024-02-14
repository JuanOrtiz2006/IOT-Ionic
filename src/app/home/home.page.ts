import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  led: boolean = false;
  led2: boolean = false;
  led3: boolean = false;
  led4: boolean = false;
  buttonColor: string = '';
  buttonColor2: string = '';
  buttonColor3: string = '';
  buttonColor4: string = '';

  constructor(private db: Firestore) {}

  async mixto(buttonNumber: number) {
    if (buttonNumber === 1) {
      this.led = !this.led;
      this.buttonColor = this.led ? 'success' : 'secondary';
      await setDoc(doc(this.db, 'controlLed/controlLed'), { encender: this.led });
    } else if (buttonNumber === 2) {
      this.led2 = !this.led2;
      this.buttonColor2 = this.led2 ? 'success' : 'secondary';
      await setDoc(doc(this.db, 'controlLed/controlLed2'), { encender: this.led2 });
    } else if (buttonNumber === 3) {
      this.led3 = !this.led3;
      this.buttonColor3 = this.led3 ? 'success' : 'secondary';
      await setDoc(doc(this.db, 'controlLed/controlLed3'), { encender: this.led3 });
    }
  }

  async todos() {
    this.led4 = !this.led4;
    this.buttonColor = this.led4 ? 'success' : 'secondary';
    this.buttonColor2 = this.led4 ? 'success' : 'secondary';
    this.buttonColor3 = this.led4 ? 'success' : 'secondary';
    await setDoc(doc(this.db, 'controlLed/controlLed'), { encender: this.led4 });
    await setDoc(doc(this.db, 'controlLed/controlLed2'), { encender: this.led4 });
    await setDoc(doc(this.db, 'controlLed/controlLed3'), { encender: this.led4 });
  }
}

