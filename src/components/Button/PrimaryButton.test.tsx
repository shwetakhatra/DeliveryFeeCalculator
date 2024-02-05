import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimaryButton from './PrimaryButton';

const mockOnClick = jest.fn();
const renderComponent = (props = {}) => {
  const defaultProps = {
    label: 'Test Button',
    type: 'button' as const,
    onClick: mockOnClick,
    ...props,
  };
  return render(<PrimaryButton {...defaultProps} />);
};
describe('PrimaryButton component', () => {
  it('renders button correctly', () => {
    renderComponent();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('fires onClick event when clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Test Button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
