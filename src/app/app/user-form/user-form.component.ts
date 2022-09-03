import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/app/data/user-settings';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  originalUserSettings = {

    username: null,
    password: null
    
  }

  userSettings = {...this.originalUserSettings}

  constructor() { }

  ngOnInit(): void {
  }

}
