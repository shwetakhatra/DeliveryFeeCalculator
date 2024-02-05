import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import { formField } from '../../interfaces/form.interfaces';

const formFieldsMock: formField[] = [
  { id: 'cartValue', label: 'Cart Value (€)', type: 'number' },
	{ id: 'deliveryDist', label: 'Delivery Distance (m)', type: 'number' },
	{ id: 'numOfitem', label: 'Number of items', type: 'number' },
	{ id: 'time', label: 'Order Time', type: 'datetime' },
	{ id: 'submitBtn', label: 'Calculate delivery charge', type: 'button' },
];
describe('Form Component', () => {
  test('renders form fields and submits form', () => {
    const onFormSubmitMock = jest.fn();
    render(<Form formFields={formFieldsMock} onFormSubmit={onFormSubmitMock} />);
    const label = "Order Time";
    fireEvent.change(screen.getByLabelText('Cart Value (€)'), { target: { value: '8' } });
    fireEvent.change(screen.getByLabelText('Delivery Distance (m)'), { target: { value: '1000' } });
    fireEvent.input(screen.getByLabelText('Number of items'), { target: { value: '5' } });
    fireEvent.input(screen.getByTestId(label.replace(/\s/g, '')) as HTMLInputElement, { target: { value: '2022-01-31 12:34' } });
    fireEvent.click(screen.getByText('Calculate delivery charge'));
    expect(onFormSubmitMock).toHaveBeenCalledWith({
      cartValue: '8',
      deliveryDist: '1000',
      numOfitem: '5',
      time: '2022-01-31 12:34',
    });
  });
});
