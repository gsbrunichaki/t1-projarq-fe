import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/shared/people.service';
import { People } from 'src/app/shared/people.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor(
    private service: PeopleService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(people: People) {
    this.service.formData = Object.assign({}, people);
  }

  onDelete(matricula) {
    if (confirm("Tem certeza de que deseja excluir esse registro?")) {
      this.service.deletePeople(matricula).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning("Registro excluído!", "Lista de Presença");
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
