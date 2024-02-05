import React, { useState } from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import InputField from '../InputField/InputField';
import DateTimePicker from '../DateTime/DateTime';
import { formField } from '../../interfaces/form.interfaces'

interface DynamicFormProps {
  formFields: formField[];
  onFormSubmit: (formValues: { [key: string]: string | number }) => void;
}
const Form: React.FC<DynamicFormProps> = ({ formFields, onFormSubmit }) => {
  const initialFormValues: { [key: string]: string | number } = {};
  formFields.forEach((field) => {
    initialFormValues[field.id] = field.type === 'text' ? '' : 0;
  });
  const [formValues, setFormValues] = useState(initialFormValues);
  const [dateTimeValue, setDateTimeValue] = useState('');
  const handleFieldChange = (fieldId: string, value: string | number) => {
    setFormValues((prevValues) => ({ ...prevValues, [fieldId]: value }));
  };
  const handleDateTimeChange = (value: string) => {
    setDateTimeValue(value);
  };
  const submitForm = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    delete formValues.submitBtn;
    formValues.time = dateTimeValue;
    onFormSubmit(formValues);
  };
  return (
    <form>
      {formFields.map((field) => (
        <div key={field.id}>
          {
            (field.type === 'text' || field.type === 'number') && (
            <InputField
              type={field.type}
              label={field.label}
              placeholder={field.label}
              value={formValues[field.id] as string | number}
              onChange={(value) => handleFieldChange(field.id, value)}
            />
          )}
          {
            field.type === 'datetime' && (
            <DateTimePicker 
              label={field.label} 
              onDateChange={(value) => handleDateTimeChange(value)}
            />)
          }
          {
            field.type === 'button' && 
            <PrimaryButton type="submit" label={field.label} onClick={submitForm} />
          }
        </div>
      ))}
    </form>
  );
};
export default Form;
