import { Component } from "@angular/core";
import { ChatService } from "../../providers/chat.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent {
  constructor(public _cs: ChatService) {}

  onClick() {
    this._cs.login();
  }
}
