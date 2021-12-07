import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegex = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;

  emailErr = '';
  passwordErr = '';
  passwordcheckErr = '';
  nameErr = '';
  lastnameErr = '';
  checkErr = '';
  phoneErr = '';

  checkData()
  {
    this.emailErr = '';
    this.passwordErr = '';
    this.passwordcheckErr = '';
    this.nameErr = '';
    this.lastnameErr = '';
    this.checkErr = '';
    this.phoneErr = '';
    let sw = true;

    if(this.userData.email==='')
    {

      this.emailErr = "Заполните";
      sw=false;

    }
    else if(!this.emailRegex.test(this.userData.email))
    {

      this.emailErr = "Ошибка";
      sw=false;

    }
    
    if(this.userData.password==='')
    {

      this.passwordErr = "Заполните";
      sw=false;

    }
    if(this.userData.passwordcheck==='')
    {
      this.passwordcheckErr = "Заполните";
      sw=false;
    }

    if(this.userData.passwordcheck!=this.userData.password)
    {
      this.passwordcheckErr = "Пароли не совпадают";
      sw=false;
    }

    if(this.userData.name==='')
    {

      this.nameErr = "Заполните";
      sw=false;

    }

    if(this.userData.lastname==='')
    {

      this.lastnameErr = "Заполните";
      sw=false;

    }

    if(this.userData.check===false)
    {
      this.checkErr = "Поставьте галочку";
      sw=false;
    }

    if(this.userData.phone==='')
    {

      this.phoneErr = "Заполните";
      sw=false;

    }
    else if(!this.phoneRegex.test(this.userData.phone))
    {

      this.phoneErr = "Ошибка";
      sw=false;

    }
    
    if(sw)
    {
      this.userData = new UserRequest();
      alert("Молодец все правильно сыдай 5!");
    }

  }

  open_conditions()
  {
    alert("Ваші дані буде вкрадено і продано.\nВсі виручені гроші підуть в фонд спідвагона");
  }

}
