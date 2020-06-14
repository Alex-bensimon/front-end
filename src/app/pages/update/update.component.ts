import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Ressource } from '../consult/Ressource';
import { FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {
  ressource: Ressource ;
  submitted = false;
  ressourceForm;

  constructor() {    }

  ngOnInit(): void {
  }

}
