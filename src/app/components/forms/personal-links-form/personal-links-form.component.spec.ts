import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalLinksFormComponent } from 'app/components/forms/personal-links-form/personal-links-form.component';

describe('PersonalLinksFormComponent', () => {
  let component: PersonalLinksFormComponent;
  let fixture: ComponentFixture<PersonalLinksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLinksFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
