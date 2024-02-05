import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment, { Moment } from 'moment';
import DateTimePickerProps from '../../interfaces/datetime.interfaces';

const DateTimePicker: React.FC<DateTimePickerProps> = ({ label, onDateChange  }) => {
  const dataTestId = label.replace(/\s/g, '');
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD HH:mm'));
  const handleDateChange = (momentObj: Moment | string) => {
    if (moment(momentObj).isValid()) {
      setSelectedDate(moment(momentObj).format('YYYY-MM-DD HH:mm'));
      onDateChange(moment(momentObj).format('YYYY-MM-DD HH:mm'));
    } else {
      setSelectedDate(momentObj as string);
      onDateChange(momentObj as string);
    }
  };
  return (
    <div className="row mb-3">
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className="col-sm-10">
        <Datetime
          value={selectedDate}
          onChange={(momentObj) => handleDateChange(momentObj)}
          dateFormat="YYYY-MM-DD"
          timeFormat="HH:mm"
          renderInput={(props) => {
            return <input {...props} data-testid={dataTestId} />;
          }}
        />
      </div>
    </div>
  );
};
export default DateTimePicker;
