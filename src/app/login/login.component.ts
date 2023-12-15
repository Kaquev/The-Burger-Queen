import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginOn!: FormGroup;
  // email: string = '';
  // password: string = '';

  constructor(private readonly fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginOn = this.initForm(); // Inicializa el formulario
  }

  onSubmit(): void {
    console.log('Error de autenticación');
    this.router.navigate(['/order-summary']);
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
