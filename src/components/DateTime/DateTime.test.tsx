import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateTimePicker from './DateTime';

describe('DateTimePicker Component', () => {
  it('selects value using data-testid', () => {
    const mockOnDateChange = jest.fn();
    const label = 'Select Date and Time';
    render(<DateTimePicker label={label} onDateChange={mockOnDateChange} />);
    const input = screen.getByTestId(label.replace(/\s/g, '')) as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '2022-01-31 12:34' } });
    expect(input.value).toBe('2022-01-31 12:34');
    expect(mockOnDateChange).toHaveBeenCalledWith('2022-01-31 12:34');
  });

  it('calls onDateChange when date is selected', () => {
    const label = 'Select Date and Time';
    const mockOnDateChange = jest.fn();
    render(<DateTimePicker label={label} onDateChange={mockOnDateChange} />);
    const input = screen.getByTestId(label.replace(/\s/g, '')) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2022-01-31 15:30' } });
    expect(mockOnDateChange).toHaveBeenCalledWith('2022-01-31 15:30');
  });
});
