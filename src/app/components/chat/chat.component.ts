import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../../app/providers/chat.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) {
    this._cs.load().subscribe(() => {

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById("app-mensajes");
  }

  send() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }
    this._cs
      .addMensajes(this.mensaje)
      .then(() => {
        this.mensaje = "";
      })
      .catch(err => {
        console.error("Error al enviar", err);
      });
  }
}
