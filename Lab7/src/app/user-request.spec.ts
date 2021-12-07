import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='email';
    expect(userData.email).toEqual('email');
  });

  it('password is accessible', () => {
    expect(userData.password).toEqual('');
    userData.password='password';
    expect(userData.password).toEqual('password');
  });

  it('passwordcheck is accessible', () => {
    expect(userData.passwordcheck).toEqual('');
    userData.passwordcheck='passwordcheck';
    expect(userData.passwordcheck).toEqual('passwordcheck');
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='name';
    expect(userData.name).toEqual('name');
  });

  it('lastname is accessible', () => {
    expect(userData.lastname).toEqual('');
    userData.lastname='lastname';
    expect(userData.lastname).toEqual('lastname');
  });

  it('check_box is accessible', () => {
    expect(userData.check).toEqual(false);
    userData.check=true;
    expect(userData.check).toEqual(true);
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='Jora';
    expect(userData.phone).toEqual('Jora');
  });

});
