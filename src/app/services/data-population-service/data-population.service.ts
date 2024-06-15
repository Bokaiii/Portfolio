import { Injectable } from '@angular/core';
import { Interest, SkillGroup } from '../../../typings';
import { faCode, faCoffee, faGamepad, faMicrochip, faMountainSun, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class DataPopulationService {

  constructor() { }

  //Interests
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

  //Skills
  public getFrontendSkills(): SkillGroup {
    return {
      title: 'Frontend',
      image: undefined,
      skills: [
        {
          title: 'TypeScript',
          level: 85
        },
        {
          title: 'HTML',
          level: 80
        },
        {
          title: 'CSS',
          level: 75
        },
        {
          title: 'Angular',
          level: 75
        },
        {
          title: 'Figma',
          level: 70
        },
        {
          title: 'React',
          level: 50
        },
        {
          title: 'JavaScript',
          level: 50
        },
        {
          title: 'JSP',
          level: 50
        },
      ]
    }
  }

  public getBackendSkills(): SkillGroup {
    return {
      title: 'Backend',
      image: undefined,
      skills: [
        {
          title: 'Java',
          level: 85
        },
        {
          title: 'C#',
          level: 70
        },
        {
          title: 'Python',
          level: 65
        },
        {
          title: '.NET',
          level: 60
        },
        {
          title: 'SQL',
          level: 40
        },
        {
          title: 'Scala',
          level: 40
        },
      ]
    }
  }

  public getTechnicalSkills(): SkillGroup {
    return {
      title: 'Technical',
      image: undefined,
      skills: [
        {
          title: 'Git',
          level: 85
        },
        {
          title: 'SCRUM',
          level: 75
        },
        {
          title: 'SAFE',
          level: 70
        },
        {
          title: 'Docker',
          level: 60
        },
        {
          title: 'DevOps',
          level: 50
        },
        {
          title: 'Cyber-Physical systems',
          level: 30
        },
      ]
    }
  }

}
