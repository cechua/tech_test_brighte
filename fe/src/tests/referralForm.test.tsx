import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ReferralForm from '../components/ReferralForm';
import userEvent from '@testing-library/user-event';

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

test('Should render error on submit on invalid input', async () => {
  render(<ReferralForm isMobile={false} />);

  const givenNameInputElement = screen.getByTestId(
    'referralForm-input-givenName'
  );

  fireEvent.change(givenNameInputElement, {
    target: { value: 'a' },
  });

  const submitReferralCTAElement = screen.getByText('Create Referral');
  await userEvent.click(submitReferralCTAElement);
  const errorElement = screen.getByTestId('referralForm-inputError-givenName');
  expect(errorElement).toBeDefined();
  expect(errorElement.textContent).toBe(
    'String must contain at least 2 character(s)'
  );
  //other input fields....
});

test('Should not render error field on valid input', async () => {
  render(<ReferralForm isMobile={false} />);

  const givenNameInputElement = screen.getByTestId(
    'referralForm-input-givenName'
  );

  fireEvent.change(givenNameInputElement, {
    target: { value: 'John' },
  });

  const submitReferralCTAElement = screen.getByText('Create Referral');
  await userEvent.click(submitReferralCTAElement);
  const errorElement = screen.queryByTestId(
    'referralForm-inputError-givenName'
  );
  expect(errorElement).toBeNull();
  //other input fields....
});
