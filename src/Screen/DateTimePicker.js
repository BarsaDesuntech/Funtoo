import 'date-fns';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import moment from 'moment';

const styles = {
  grid: {
    width: '60%',
  },
};

const DateTimePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState()
  // const [prevDate ,setprevDate] = useState({
  //   day:null,
  //   year:null,
  //   month:null
  // })

  console.log(selectedDate, "kpoijpjpjj");
  const handleDateChange = date => {
    setSelectedDate(date)

  };
  // useEffect(()=>{
  //     const date = new Date();
  //     setprevDate(
  //       prevDate.day = moment(date).format('MM/DD/YYYY')
  //     )
  // },[])
  // console.log(prevDate.day,"day")

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        margin="normal"
        value={selectedDate ? selectedDate : props.defaultDate}
        onChange={handleDateChange}
        format="do MMM yy"
        InputProps={{
          disableUnderline: true,
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
export default DateTimePicker