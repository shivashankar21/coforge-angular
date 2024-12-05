import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  users:any;
  msg:string='';

  constructor(private myteamservice:TeamService){

  }

  ngOnInit(){
    this.msg=this.myteamservice.helloService();
    this.myteamservice.getUsers().subscribe(response => {
      this.users=response;
    });
  }
}
