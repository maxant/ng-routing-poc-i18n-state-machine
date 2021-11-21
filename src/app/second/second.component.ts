import { Component, OnInit } from '@angular/core';
import { I18Nable } from '../i18nable';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent extends I18Nable implements OnInit {

  ngOnInit(): void {
  }

}
