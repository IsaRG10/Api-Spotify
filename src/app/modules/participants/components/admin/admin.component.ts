import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/shared/models/participantes';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
participantes: Array<Participante>;

  constructor(private userService: UserService, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res =>{
      this.participantes = res;
      })
  }

  getAllUser = () =>{
    this.userService.getUser().subscribe(res =>{
      this.participantes = res;
    })
  }

  deleteUser = (userId: number) =>{
    this.userService.deleteUser(userId).subscribe(res =>{
      this.getAllUser();
      this.notifications.userDeleted();
    });
  }

  addUser = (user: Participante) => {
    this.userService.createUser(user).subscribe(res =>{
      this.getAllUser();
      this.notifications.userCreated();
    });
  }

  editUser = (user: Participante) => {
    console.log(user.id);
    this.userService.editUser(user.id, user).subscribe(res =>{
      this.getAllUser;
    })
  }

  userEventHandler = (event) =>{
    if(event.action === "add"){
      this.addUser(event.participante);
    }
    if(event.action === "edit"){
      this.editUser(event.participante);
    }
  }

}
