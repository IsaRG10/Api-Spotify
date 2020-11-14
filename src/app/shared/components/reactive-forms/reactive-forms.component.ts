import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Participante } from '../../models/participantes';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
@Output() editedUser: EventEmitter<FormGroup> = new EventEmitter();
reactiveForm: FormGroup;
formSubmitted = false;

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<ReactiveFormsComponent>,
    @Inject(MAT_DIALOG_DATA) public participante:Participante) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () =>{
    this.reactiveForm = this.fb.group({
      nombre: new FormControl({ value: this.participante ? this.participante.nombre: '', disabled: false }, Validators.required),
      mail: new FormControl({ value: this.participante ? this.participante.mail: '', disabled: false }, Validators.required),
      username: new FormControl({ value: this.participante ? this.participante.username: '', disabled: false }, Validators.required),
      centro: new FormControl({ value: this.participante ? this.participante.centro: '', disabled: false }, Validators.required),
      edad: new FormControl({ value: this.participante ? this.participante.edad: '', disabled: false }, Validators.required),
      telefono: new FormControl({ value: this.participante ? this.participante.telefono: '', disabled: false }, Validators.required),
      calle: new FormControl({ value: this.participante ? this.participante.calle: '' , disabled: false }, Validators.required),
      cp: new FormControl({ value: this.participante ? this.participante.cp: '', disabled: false }, Validators.required),
      ciudad: new FormControl({ value: this.participante ? this.participante.ciudad:  '', disabled: false }, Validators.required),
      provincia: new FormControl({ value: this.participante ? this.participante.provincia: '', disabled: false }, Validators.required),
    });
  }

  emitEditForm = () => {
    this.formSubmitted = true;
    if (this.reactiveForm.status === 'VALID'){
      this.dialogRef.close({data: this.reactiveForm});
    }
  }

  cancelar(){
    this.dialogRef.close();
  }
}
