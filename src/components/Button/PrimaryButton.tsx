import React from 'react';
import { Button } from 'react-bootstrap';
import ButtonProps from '../../interfaces/button.interfaces';

const PrimaryButton: React.FC<ButtonProps> = ({ label, type, onClick }) => {
  return (
    <Button 
      className="mt-4"
      variant="secondary" 
      type={type} 
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
export default PrimaryButton;