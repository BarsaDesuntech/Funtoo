import 'date-fns';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '60%',
  },
};

const CustomTimePicker = (props) => {

  const [selectedDate, setSelectedDate] = useState()
  console.log(selectedDate);

  const handleDateChange = date => {
    setSelectedDate(date)

  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        format="h:mm a"
        margin="normal"
        value={selectedDate ? selectedDate : props.Defaultdate}
        onChange={handleDateChange}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
export default CustomTimePicker