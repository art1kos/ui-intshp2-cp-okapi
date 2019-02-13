import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SizesFilterComponent } from './sizes-filter.component';

describe('SizesFilterComponent', () => {
  let component: SizesFilterComponent;
  let fixture: ComponentFixture<SizesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizesFilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isChecked depending on event target', () => {
    component.isChecked = false;
    let event = {target: {checked: true}};
    component.toggleCheck(event);
    expect(component.isChecked).toBe(true);

    component.isChecked = false;
    event = {target: {checked: false}};
    component.toggleCheck(event);
    expect(component.isChecked).toBe(false);
  });
});
