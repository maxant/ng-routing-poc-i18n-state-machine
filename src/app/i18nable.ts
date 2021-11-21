import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class I18Nable {

  private static active: string = 'de';

  isActive(lang: string) {
    return lang == I18Nable.active;
  }

  activate(lang: string) {
    I18Nable.active = lang;
  }

  static activateFr() {
    I18Nable.active = 'fr';
  }

  static activateDe() {
    I18Nable.active = 'de';
  }

  getLang(): string {
    return I18Nable.active;
  }

}
