import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { sendStartDate, sendEndDate } from '../../redux/slices/cardContent';

import {
	DateRect,
	DateText,
	StyledDiv,
	DirectionsText,
	StyledCalendarButton,
} from './DateComponet.styles';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
	sliderRoot: {
		'& .MuiInputBase-input': {
			fontSize: '14px',
			fontFamily: 'Roboto',
			color: '#334678',
			fontWeight: 600,
		},
	},
}));

const DateComponent = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const twoDaysBeforeCurrentDate = new Date(
		new Date(new Date()).getTime()
	);
  const formattedDate = moment(twoDaysBeforeCurrentDate).format('YYYY-MM-DD');
  

  useEffect(() => {
    const formatData = moment(new Date(new Date())).format('YYYY-MM-DD');
    dispatch(sendStartDate(formatData));
    dispatch(sendEndDate(formatData));
  }, []);

	const [fromDateCalendar, setFromDateCalendar] = useState(formattedDate);
	const [toDateCalendar, setToDateCalendar] = useState(formattedDate);

	const fromDateChanged = (date) => {
		const formatData = moment(new Date(date)).format('YYYY-MM-DD');
    setFromDateCalendar(formatData);
    const fromDate = new Date(formatData);
    dispatch(sendStartDate(fromDate.toISOString()));

	};

	const toDateChanged = (date) => {
		const formatData = moment(new Date(date)).format('YYYY-MM-DD');
    setToDateCalendar(formatData);
    const toDate = new Date(formatData);
    dispatch(sendEndDate(toDate.toISOString()));
	};

	return (
    <StyledDiv>
			<DirectionsText>Start date:</DirectionsText>
			<DateRect>
				<DateText>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							className={classes.sliderRoot}
							disableToolbar
							id="datepicker 1"
							format="dd MMMM yyyy"
							autoOk={true}
							variant="inline"
							InputProps={{ readOnly: true, disableUnderline: true }}
							value={fromDateCalendar}
							onChange={fromDateChanged}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
							keyboardIcon={<StyledCalendarButton />}
						/>
					</MuiPickersUtilsProvider>
				</DateText>
        </DateRect>
			<DirectionsText>End date:</DirectionsText>
			<DateRect>
				<DateText>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							className={classes.sliderRoot}
							disableToolbar
							id="datepicker 1"
							format="dd MMMM yyyy"
							autoOk={true}
							variant="inline"
							InputProps={{ readOnly: true, disableUnderline: true }}
							value={toDateCalendar}
							onChange={toDateChanged}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
							keyboardIcon={<StyledCalendarButton />}
						/>
					</MuiPickersUtilsProvider>
				</DateText>
			</DateRect>
		</StyledDiv>
	);
};

export default DateComponent;
