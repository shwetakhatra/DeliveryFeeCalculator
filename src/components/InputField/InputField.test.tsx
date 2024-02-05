import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './InputField';

const inputFieldPropsMock = {
  label: 'Test Label',
  type: 'text',
  placeholder: 'Enter value',
  value: 'initialValue',
  onChange: jest.fn(),
};
describe('InputField Component', () => {
  test('renders with correct props and handles change', () => {
    render(<InputField {...inputFieldPropsMock} />);
    const inputElement = screen.getByTestId('TestLabel');
    fireEvent.change(inputElement, { target: { value: 'newValue' } });
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter value');
    expect(inputFieldPropsMock.onChange).toHaveBeenCalledWith('newValue');
  });
});
