import { getClosestByClassName, identityExtractHTMLElement } from './DOMUtils';
import TestUtils from './TestUtils';

const { createMockProxy } = TestUtils;

describe('getClosestByClassName', () => {
  let originalBodyHTML = document.body.innerHTML;
  beforeAll(() => {
    const sampleDOM = `
      <div class="level-0">
        <div class="level-1">
          <div class="level-2">
          </div>
        </div>
      </div>`;

    originalBodyHTML = document.body.innerHTML;

    document.body.innerHTML = sampleDOM;
  });

  afterAll(() => {
    document.body.innerHTML = originalBodyHTML;
  });

  it('returns null for null element argument', () => {
    expect(getClosestByClassName(null, '')).toBeNull();
  });

  it('returns null if matching element not found', () => {
    const element = document.body.querySelector('.level-2');
    expect(
      getClosestByClassName(element, 'class-name-with-no-matching-element')
    ).toBeNull();
  });

  it('returns element itself for element matching the class', () => {
    const element = document.body.querySelector('.level-2');
    expect(getClosestByClassName(element, 'level-2')).toEqual(element);
  });

  it('returns parent matching the class', () => {
    const element = document.body.querySelector('.level-2');
    const parent = document.body.querySelector('.level-1');
    expect(getClosestByClassName(element, 'level-1')).toEqual(parent);
  });

  it("returns parent's parent matching the class", () => {
    const element = document.body.querySelector('.level-2');
    const parent = document.body.querySelector('.level-0');
    expect(getClosestByClassName(element, 'level-0')).toEqual(parent);
  });
});

describe('identityExtractHTMLElement', () => {
  it.each([null, createMockProxy<Element>()])(
    'should return null if given object is not an HTMLElement',
    notHTMLElement => {
      expect(identityExtractHTMLElement(notHTMLElement)).toBeNull();
    }
  );

  it('should return given object if it is an HTMLElement', () => {
    const element = document.createElement('div');
    expect(identityExtractHTMLElement(element)).toBe(element);
  });
});
