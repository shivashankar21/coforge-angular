import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainneeComponent } from './trainnee.component';

describe('TrainneeComponent', () => {
  let component: TrainneeComponent;
  let fixture: ComponentFixture<TrainneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainneeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
