import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotsChefDepComponent } from './mots-chef-dep.component';

describe('MotsChefDepComponent', () => {
  let component: MotsChefDepComponent;
  let fixture: ComponentFixture<MotsChefDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotsChefDepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotsChefDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
