import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ReferralForm from '../components/ReferralForm';

test('Displays the form', () => {
  render(<ReferralForm isMobile={false} />);
  const headerElement = screen.getByText('Referral Builder');
  const givenNameLabelElement = screen.getByText('Given Name');
  const submitReferralCTAElement = screen.getByText('Create Referral');
  expect(headerElement).toBeDefined();
  expect(givenNameLabelElement).toBeDefined();

  expect(submitReferralCTAElement).toBeDefined();
});

test('Should be able to render values on input', () => {
  render(<ReferralForm isMobile={false} />);

  const givenNameInputElement = screen.getByTestId(
    'referralForm-input-givenName'
  ) as HTMLInputElement;

  fireEvent.change(givenNameInputElement, {
    target: { value: 'abcdefg' },
  });
  expect(givenNameInputElement.value).toBe('abcdefg');
  //other input fields.....
});
