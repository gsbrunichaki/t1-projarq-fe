import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/shared/people.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private service: PeopleService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      matricula: 0,
      nome: '',
      sexo: '',
      idade: '',
      curso: '',
      semestre: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.matricula == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPeople().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Cadastro realizado com sucesso!", "Lista de Presença");
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putPeople().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Registro atualizado com sucesso!", "Lista de Presença");
      },
      err => {
        console.log(err);
      }
    );
  }

}
