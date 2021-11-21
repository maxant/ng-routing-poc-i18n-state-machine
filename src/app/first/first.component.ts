import { Component, OnInit } from '@angular/core';
import { I18Nable } from '../i18nable';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends I18Nable implements OnInit {

  ngOnInit(): void {
  }

}
