import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Kayla',
    contact: '248-248-2480',
    bio:
      'When I was a young boy, my father took me into the city to see a marching band',
  };

  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (userProfile: UserProfile) => {
    this.userProfile = userProfile;
  };
}
