import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog.component';

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
        this.loginOn.controls['email'].value,
        this.loginOn.controls['password'].value
      )
      .subscribe(
        (response) => {
          sessionStorage.setItem('dataUser', JSON.stringify(response)); //todo el objeto del service se guardara como string
          this.router.navigate(['/order-summary']);
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
