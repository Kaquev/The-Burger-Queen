// error-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  template: `
    <h1>Error</h1>
    <p>{{ data.errorMessage }}</p>
    <button mat-button (click)="onCloseClick()">Cerrar</button>
  `,
})
export class ErrorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { errorMessage: string }
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
