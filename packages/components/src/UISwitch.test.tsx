import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UISwitch, { UISwitchProps } from './UISwitch';

function makeUISwitch({
  'data-testid': dataTestId = 'TestUISwitch',
  onClick = jest.fn(() => true),
  on = true,
}: Partial<UISwitchProps> = {}) {
  return render(
    <UISwitch on={on} onClick={onClick} data-testid={dataTestId} />
  );
}

it('mounts and unmounts properly', () => {
  makeUISwitch();
});

it('get element by data-testid works', () => {
  let clicked = false;
  const onClick = () => {
    clicked = true;
  };
  const testId = 'test id for UISwitch';
  const testSwitch = makeUISwitch({ 'data-testid': testId, onClick });
  const elements = testSwitch.getAllByTestId(testId);
  expect(elements.length).toBe(1);
  const button = elements[0];
  expect(button instanceof HTMLButtonElement).toBe(true);
  expect(clicked).toBe(false);
  userEvent.click(button);
  expect(clicked).toBe(true);
});
