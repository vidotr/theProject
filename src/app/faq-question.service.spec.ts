import { TestBed } from '@angular/core/testing';

import { FaqQuestionService } from './faq-question.service';

describe('FaqQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqQuestionService = TestBed.get(FaqQuestionService);
    expect(service).toBeTruthy();
  });
});
