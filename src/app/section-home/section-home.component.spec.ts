import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomeComponent } from './section-home.component';

describe('SectionHomeComponent', () => {
  let component: SectionHomeComponent;
  let fixture: ComponentFixture<SectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
