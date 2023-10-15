import React from 'react';
import { toast } from 'sonner';

const DatePicker = ({ selectedDate, onDateSelect }) => {
  // Function to check if a given date is a weekend (Saturday or Sunday)
  const isWeekend = date => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  // Function to handle date input changes and disable weekends
  const handleDateChange = e => {
    const selectedDate = new Date(e.target.value);
    if (isWeekend(selectedDate)) {
      // If a weekend date is selected, reset the input value
      e.target.value = '';
      toast.error('Please select a weekday!', {
        position: 'bottom-center',
        duration: 5000,
        cancel: true
      });
    } else {
      // If a valid date is selected, update the state in the parent component
      onDateSelect(selectedDate);
    }
  };

  // Calculate the maximum date (today + 14 days)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);
  // Format the maximum date as 'YYYY-MM-DD' for the input element
  const formattedMaxDate = maxDate.toISOString().split('T')[0];

  return (
    <div>
      <label htmlFor="dateInput" className="sr-only">
        Select a Date
      </label>
      <input
        type="date"
        placeholder="Select a Date"
        className="px-3 py-2 leading-tight border border-gray-400 rounded-lg appearance-none focus:outline-none focus:bg-white focus:border-indigo-500"
        onChange={handleDateChange}
        max={formattedMaxDate}
      />
    </div>
  );
};

export default DatePicker;
