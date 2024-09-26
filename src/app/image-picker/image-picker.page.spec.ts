import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePickerPage } from './image-picker.page';

describe('ImagePickerPage', () => {
  let component: ImagePickerPage;
  let fixture: ComponentFixture<ImagePickerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
