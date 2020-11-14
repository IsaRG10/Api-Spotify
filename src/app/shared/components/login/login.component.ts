import { Component, OnInit } from '@angular/core';
import { UserAuth } from '../../models/userAuth';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAuth:UserAuth = new UserAuth();
  reactiveForm:FormGroup;
  formSubmitted = false;
  incorrecto = false;
  listaUserAuth:Array<UserAuth> = [];

  constructor(private formBuilder:FormBuilder, private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () =>{
    this.reactiveForm = this.formBuilder.group(
      {
        username: new FormControl({value: '',disabled:false}, Validators.required),
        password: new FormControl({value: '', disabled:false}, Validators.required)
      }
    )
  }

  obtenerUsuarios(){
    this.authService.getUser().subscribe(res =>{
      this.listaUserAuth = res;
    })
  }

  get f() { return this.reactiveForm.controls; }

  login(){
    this.obtenerUsuarios();
    if(this.listaUserAuth[0].username == this.userAuth.username && this.listaUserAuth[0].password == this.userAuth.password){
      this.incorrecto = false;
      sessionStorage.setItem('session', JSON.stringify({ session:{user: "admin", token:'1234567t8t9'}}));
      this.router.navigate(['../principal']);
    }else{
      this.incorrecto = true;
    }
  }
}
