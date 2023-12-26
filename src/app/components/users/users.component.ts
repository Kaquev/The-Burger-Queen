import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; // Asegúrate de importar tu servicio de usuario
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public dataSource: User[] = [];
  public displayedColumns = ['id', 'email', 'role'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        console.log('Datos de usuarios:', response);
        this.dataSource = response;
      },
      (error) => {
        // Manejar errores si es necesario
        console.error(error);
      }
    );
  }
}
