import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkRepositoriesComponent } from './bookmark-repositories.component';

describe('BookmarkRepositoriesComponent', () => {
  let component: BookmarkRepositoriesComponent;
  let fixture: ComponentFixture<BookmarkRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
