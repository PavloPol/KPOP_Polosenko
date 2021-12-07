import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab7');
  });

  it(`check empty email`, () => {
    component.userData.email="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check nonviable email`, () => {
    component.userData.email="@top.com";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Ошибка');
  });

  it(`check empty password`, () => {
    component.userData.password="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty passwordcheck`, () => {
    component.userData.passwordcheck="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordcheckErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check equal passwordcheck`, () => {
    component.userData.passwordcheck="123";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#passwordcheckErr').textContent;
    expect(elementText).toBe('Пароли не совпадают');
  });

  it(`check empty name`, () => {
    component.userData.name="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#nameErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check empty lastname`, () => {
    component.userData.lastname="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#lastnameErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check check_box`, () => {
    component.userData.check=false;
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#checkErr').textContent;
    expect(elementText).toBe('Поставьте галочку');
  });
  
  it(`check empty phone`, () => {
    component.userData.phone="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneErr').textContent;
    expect(elementText).toBe('Заполните');
  });

  it(`check noviable phone`, () => {
    component.userData.phone="0998";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneErr').textContent;
    expect(elementText).toBe('Ошибка');
  });

});
