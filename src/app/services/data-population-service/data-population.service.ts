import { Injectable } from '@angular/core';
import { Experience, Interest, SkillGroup } from '../../../typings';
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
      imagePath: 'assets/img/frontend.png',
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
      imagePath: 'assets/img/backend.png',
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
      imagePath: 'assets/img/technical.png',
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

  //Experience
  public getExperience(): Experience[] {
    return [
      {
        startYear: '2023',
        endYear: 'Present',
        title: 'Java Developer at DXC Technology',
        description: ['Backend developer working on REST API development']
      },
      {
        startYear: '2022',
        endYear: '2023',
        title: 'Synchronizing data across microservices',
        description: ['Worked in collaboration with EG Digital Welfare to find a solution for synchronizing data across microservices, using the Event Streaming Platform Apache Kafka and the Saga pattern']
      },
      {
        startYear: '2022',
        endYear: '2023',
        title: 'Student Developer at EG Digital Welfare',
        description: [
          'Responsible for managaing responsetime project',
          'Product maintenance',
          'Training and handover to new employee'
        ]
      },
      {
        startYear: '2022',
        endYear: '',
        title: 'Internship at EG Digital Welfare',
        description: [
          'Developed new features in Angular and Java',
          'Integrated part of a SCRUM team'
        ]
      },
    ];
  }

  //Education
  public getEducation(): Experience[] {
    return [
      {
        startYear: '2024',
        endYear: '',
        title: 'SAFe certificate',
        description: []
      },
      {
        startYear: '2019',
        endYear: '2023',
        title: 'University of Southern Denmark - Software technology',
        description: [
          'Continuous Delivery & DevOps',
          'Object Oriented Programming',
          'Software technology in Cyber-Physical Systems',
          'Component-based software systems',
          'Human Computer Interaction',
        ]
      },
      {
        startYear: '2016',
        endYear: '',
        title: "Hjælpetræneruddannelse 2 (badminton)",
        description: []
      },
      {
        startYear: '2015',
        endYear: '',
        title: "Hjælpetræneruddannelse 1 (badminton)",
        description: []
      },
    ];
  }
}
