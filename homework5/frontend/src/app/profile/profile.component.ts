import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {OathService} from '../services/oath.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name: string;
  public favmovie: string;
  public usernames: string[];
  public result: string;

  constructor(private oathService: OathService, private profileService: ProfileService) { }

  ngOnInit() {
    this.getOath();
  }

  private addUser(): void {
    this.profileService.addUser(this.name, this.favmovie);
    this.name = '';
    this.favmovie = '';

  }

  getOath() {
    console.log('HI');
    this.oathService.doGoogle().subscribe((data: string) => this.result = data['word']);
    return this.result;

  }




}
