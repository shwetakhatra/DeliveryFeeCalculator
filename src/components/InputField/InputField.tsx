import React from 'react';
import InputFieldProps from '../../interfaces/inputField.interfaces';

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange }) => {
  const dataTestId = label.replace(/\s/g, '');
  return (
    <div className="row mb-3">
      <label 
        htmlFor={label} 
        className="col-2 col-form-label"
      >
        {label}
      </label>
      <div className="col-10">
        <input 
          className="form-control" 
          type={type} 
          id={label} 
          placeholder={placeholder} 
          value={value} 
          data-testid={dataTestId}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
export default InputField;
