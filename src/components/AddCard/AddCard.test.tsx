import React from 'react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import AddCard from './index';

describe('AddCard component', () => {
  test('should render empty card list', () => {
    render(<AddCard />);

    const noCards = screen.getByText('There is no any card yet');
    expect(noCards).toBeInTheDocument();
  });

  test('render validation errors if form is empty', async () => {
    const user = userEvent.setup();
    render(<AddCard />);

    const submitButton = screen.getByText('SUBMIT');
    await user.click(submitButton);

    const brandError = screen.getByText('Fill in Brand');
    expect(brandError).toBeInTheDocument();

    const modelError = screen.getByText('Fill in Model');
    expect(modelError).toBeInTheDocument();
  });

  // TODO: there is an issue on form submit: when uploads a file, file object is an empty object
  // that leads to failure file upload input validation
  // if you will remove .skip from the test and uncomment console.log you will see the result of fileUploadInput after uploading a file
  // FileList {
  //   '0': File {},  should have file detailed info which is needed to validate the uploaded fileType
  //   length: 1,
  //       item: [Function: item],
  //   constructor: [class FileList],
  //       [Symbol(Symbol.iterator)]: [GeneratorFunction: nextFile]
  // }
  // before I got incorrect implementation because upload input was not mandatory
  test.skip('should submit form and create a card', async () => {
    global.URL.createObjectURL = vi.fn();
    const user = userEvent.setup();
    render(<AddCard />);

    const brandInput = screen.getByTestId('brand-input');
    await user.type(brandInput, 'brand');

    const modelInput = screen.getByTestId('model-input');
    await user.type(modelInput, 'model');

    const productionDateInput = screen.getByTestId('production-date-input');
    await user.type(productionDateInput, '2023-01-01');

    const paymentTypeInput = screen.getByTestId('payment-type-input');
    await user.type(paymentTypeInput, 'cash');

    const image = new File(['image'], 'image.jpg', { type: 'image/png' });
    const fileUploadInput = screen.getByTestId('file-upload-input');
    await user.upload(fileUploadInput, image);

    // console.log(fileUploadInput.files);

    const submitButton = screen.getByText('SUBMIT');
    await user.click(submitButton);

    const card = screen.getByTestId('car-card');

    expect(brandInput).toHaveValue('');
    expect(modelInput).toHaveValue('');
    expect(card).toBeInTheDocument();
  });
});
