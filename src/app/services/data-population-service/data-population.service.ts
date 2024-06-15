import { Injectable } from '@angular/core';
import { Interest } from '../../../typings';
import { faCode, faCoffee, faGamepad, faMicrochip, faMountainSun, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class DataPopulationService {

  constructor() { }

  public getInterest(): Interest[] {
    return [
      {
        title: 'Coding',
        icon: faCode
      },
      {
        title: 'Games',
        icon: faGamepad
      },
      {
        title: 'Coffee',
        icon: faCoffee
        // Alternative: faMugSaucer
      },
      {
        title: 'Tech',
        icon: faMicrochip
      },
      {
        title: 'Climbing',
        icon: faMountainSun
      },
      {
        title: 'Travel',
        icon: faPaperPlane
      }
    ];
  }
}
