import { Injectable } from '@angular/core';
import {User} from '../users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public userList: any[] = [];

  constructor() {}

  public addUser(name: string, favmovie: string): void{
    // let user = new User(name, favmovie);
    let userList = this.getUsers();
    const user = {user: {name, favmovie}};
    console.log(user);
    this.userList.push(user);
    // this.setLocalStorageUsers(users);
    console.log(this.userList);
    console.log('herher');
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  public getUsers(): string[] {
    // const localStorageItem = JSON.parse(localStorage.getItem('users'));
    // return localStorageItem == null ? [] : localStorageItem.users;
    const myItem = JSON.parse(localStorage.getItem('users'));
    return myItem[0].user.name;
  }



}
