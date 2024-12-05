import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainnee',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './trainnee.component.html',
  styleUrl: './trainnee.component.css'
})
export class TrainneeComponent {
  powers = ['Smart Coder', 'Super Flexible',  
    'Logical Thinker', 'Excellent Analyst'];  
    
    
    
     emp = new Employee(18, '', '', '');
  
  submitted = false;  
  onSubmit() { this.submitted = true; }  
  
}
