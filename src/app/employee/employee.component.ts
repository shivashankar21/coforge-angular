import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeId:number=101;
  employeeName:String="Shiva";
  employeeAge:number=30;

  title="Employee Details - Data Binding using variours Directives"

  isManager:boolean=true;

  //Array
  skills:String[]=['JavaScript','Angular','typeScript'];

  //enum
  Position: PositionType =PositionType.SeniorDeveloper;

 //Object
 address:{Street:String, city: String, postalCode: number}={
  Street:'123 Main St',
  city:'Hyderabad',
  postalCode:500092
 };

 //Any(can be any type)
extraInfo: any='Additional Employee Info';

//event Binding-Handling Method
 message: string= '';

 //Two Way Data Binding
 EmployeePosition: string='Software Engineer';

 //Event Binding Method
 hello():void{
  this.message="Hello From Event Binding in Angular  by- "+this.employeeName;

 }
 clear():void{
  this.message='';
 }
 toggleManagerStatus():void{
  this.isManager=!this.isManager;
 }

 //Property Binding -One Way Bindling

 username: string='JAmes Gosling ';
 info: string="Property Binding - One Way";

 UpdateUserName(){
  this.username='John Doe';


 }
convertoDate(){
  const date=new Date();
  return date.toLocaleDateString();
}

add(){
  return 10+200;
}

}

//Enum For Position Type

enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}
