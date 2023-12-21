import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog.component';
import { LoginInterface } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginOn!: FormGroup;
  errorMessage: string = '';
  // email: string = '';
  // password: string = '';
  showPassword: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginOn = this.initForm(); // Inicializa el formulario
  }

  onSubmit(): void {
    this.loginService
      .login(
        this.loginOn.get('email')?.value,
        this.loginOn.get('password')?.value
      )
      .subscribe(
        (response: LoginInterface) => {
          //se utiliza sessionStorage
          sessionStorage.setItem('dataUser', JSON.stringify(response)); //todo el objeto del service se guardara como string
          if (response.user.role === 'admin') {
            this.router.navigate(['/admin-menu']);
          } else {
            this.router.navigate(['/order-summary']);
          }
        },
        (error) => {
          console.log(error);
          this.openErrorDialog(
            'Los datos no corresponden, vuelve a intentarlo'
          );
        }
      );
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: { errorMessage },
    });
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
