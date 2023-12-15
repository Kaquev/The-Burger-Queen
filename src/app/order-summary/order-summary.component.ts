import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  orderForm: FormGroup = this.fb.group({
    clientName: '',
    selectedMenu: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      clientName: '',
      selectedMenu: this.fb.array([]),
    });
  }

  get selectedMenu(): FormArray {
    return this.orderForm.get('selectedMenu') as FormArray;
  }

  addMenuItem(): void {
    this.selectedMenu.push(
      this.fb.group({
        itemName: '',
        // Add other properties as needed
      })
    );
  }

  removeMenuItem(index: number): void {
    this.selectedMenu.removeAt(index);
  }

  onSubmit(): void {
    // Handle form submission
    console.log(this.orderForm.value);
  }
}
