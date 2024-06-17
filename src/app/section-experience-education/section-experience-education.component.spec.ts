import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExperienceEducationComponent } from './section-experience-education.component';

describe('SectionExperienceEducationComponent', () => {
  let component: SectionExperienceEducationComponent;
  let fixture: ComponentFixture<SectionExperienceEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionExperienceEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionExperienceEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
