import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { Ressource } from '../consult/Ressource';
import { FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  ressource: Ressource ;
  submitted = false;
  ressourceForm;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder) {
                this.ressourceForm = this.formBuilder.group({
                  marque: 'Accer',
                  date_sortie: '12/12/2012',
                  category: 'Tablette'
                });
              }

  ngOnInit(): void {
  }

  onSubmit(ressource: Ressource) {
    this.apiService.createRessource(ressource)
          .subscribe(
            (res) => {
                    console.log(res);
                  });
    this.submitted = true;
    this.ressourceForm.reset();
    }

}
