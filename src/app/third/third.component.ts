import { Component, OnInit } from '@angular/core';
import { I18Nable } from '../i18nable';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent extends I18Nable implements OnInit {

  ngOnInit(): void {
  }

}
