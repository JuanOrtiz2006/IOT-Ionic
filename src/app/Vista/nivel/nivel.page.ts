import { Component, OnInit } from '@angular/core';
import { Firestore,doc,setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.page.html',
  styleUrls: ['./nivel.page.scss'],
})
export class NivelPage implements OnInit {
  videos: string[] = ["../../../assets/Videos/NotaDo.mp4","../../../assets/Videos/NotaRe.mp4", "../../../assets/Videos/NotaMi.mp4",
                      "../../../assets/Videos/NotaFa.mp4","../../../assets/Videos/NotaSol.mp4", "../../../assets/Videos/NotaLa.mp4", "../../../assets/Videos/NotaSi.mp4"];
  audios: string[] = ['../../../assets/Audios/NotaDo.mp3','../../../assets/Audios/NotaRe.mp3','../../../assets/Audios/NotaMi.mp3',
                      '../../../assets/Audios/NotaFa.mp3','../../../assets/Audios/NotaSol.mp3','../../../assets/Audios/NotaLa.mp3','../../../assets/Audios/NotaSi.mp3'];
  videoIndex: number = 0;
  audioIndex: number = 0;
  inicio:boolean=false; ledstate:any;
  encendido:boolean=false; encendido2:boolean=false; encendido3:boolean=false; encendido4:boolean=false;
  encendido5:boolean=false; encendido6:boolean=false; encendido7:boolean=false;
  
  constructor(private db:Firestore, private router:Router) {}
  ngOnInit() {}

  irPagina() {
    this.router.navigate(['../inicio']); 
    //const ledState = doc(this.db, 'ControlTeclado', 'led1'); setDoc(ledState, { encender: true});  
  }

  cambiarVideoYEnviarNumero() {
    this.videoIndex = (this.videoIndex + 1) % this.videos.length;// Cambiar el video actual
    this.audioIndex = (this.audioIndex + 1) % this.audios.length;
    
    if (this.videoIndex === 0) { //const ledState = doc(this.db, 'ControlTeclado', 'led1'); setDoc(ledState, { encender: true});
    }else{//const ledState = doc(this.db, 'ControlTeclado', 'led1'); setDoc(ledState, { encender: false});
        }
    if (this.videoIndex === 1) {
      this.audios.length=1;
    //const ledState = doc(this.db, 'ControlTeclado', 'led2'); setDoc(ledState, { encender: true}); 
    }else{//const ledState = doc(this.db, 'ControlTeclado', 'led2'); setDoc(ledState, { encender: false});
         }
    if (this.videoIndex === 2) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led3'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led3'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 3) {
      this.audioIndex = this.audioIndex % this.audios.length;
      //const ledState = doc(this.db, 'ControlTeclado', 'led4'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led4'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 4) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led5'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led5'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 5) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led6'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led6'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 6) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led7'); setDoc(ledState, { encender: true});
    } else{
      //const ledState = doc(this.db, 'ControlTeclado', 'led7'); setDoc(ledState, { encender: false});
          }
    // Reproducir el nuevo video
    const videoElement = document.getElementById("videoFondo") as HTMLVideoElement;
    videoElement.src = this.videos[this.videoIndex];
    videoElement.play();

    const audioElement = document.getElementById("audioFondo") as HTMLAudioElement;
    audioElement.src = this.audios[this.audioIndex];
    audioElement.play();
  }

  regresar() {
    // Cambiar el video actual
    this.videoIndex = (this.videoIndex - 1) % this.videos.length;
    const videoElement = document.getElementById("videoFondo") as HTMLVideoElement;
    videoElement.src = this.videos[this.videoIndex];
    videoElement.play();
    // Envía el número, en este caso el índice del video actual
    if (this.videoIndex === 0) { //const ledState = doc(this.db, 'ControlTeclado', 'led1'); setDoc(ledState, { encender: true});
    }else{//const ledState = doc(this.db, 'ControlTeclado', 'led1'); setDoc(ledState, { encender: false});
        }
    if (this.videoIndex === 1) {
      this.audios.length=1;
    //const ledState = doc(this.db, 'ControlTeclado', 'led2'); setDoc(ledState, { encender: true}); 
    }else{//const ledState = doc(this.db, 'ControlTeclado', 'led2'); setDoc(ledState, { encender: false});
         }
    if (this.videoIndex === 2) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led3'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led3'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 3) {
      this.audioIndex = this.audioIndex % this.audios.length;
      //const ledState = doc(this.db, 'ControlTeclado', 'led4'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led4'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 4) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led5'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led5'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 5) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led6'); setDoc(ledState, { encender: true});
    } else{//const ledState = doc(this.db, 'ControlTeclado', 'led6'); setDoc(ledState, { encender: false});
          }
    if (this.videoIndex === 6) {
      this.audioIndex = this.audioIndex % this.audios.length;
    //const ledState = doc(this.db, 'ControlTeclado', 'led7'); setDoc(ledState, { encender: true});
    } else{
      //const ledState = doc(this.db, 'ControlTeclado', 'led7'); setDoc(ledState, { encender: false});
          }
    
    
  }
    

}

