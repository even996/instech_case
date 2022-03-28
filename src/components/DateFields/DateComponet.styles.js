import styled from 'styled-components';
import { FaCalendar } from 'react-icons/fa'


export const StyledDiv = styled.div`
	border: 1px solid #334678;
	border-radius: 2%;
  display: inline;
`;

export const StyledCalendarButton = styled(FaCalendar)`
	margin-left: 0px;
	display: inline;
	margin-right: 13px;
	vertical-align: text-bottom;
	margin-top: 0px;
`;

export const DirectionsText = styled.h1`
	font-family: Roboto;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	color: #334678;
  text-align: center;
`;

export const StyledHeader = styled.h1`
	display: block;
	margin-bottom: 5px;
	margin-top: 0px;
	display: inline;
	margin-right: '20px';
	font-size: 26px;
`;

export const DateRect = styled.div`
	border-radius: 2%;
	width: 210px;
	height: 50px;
	border: 1px solid #dedede;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: inset 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-left: 400px;
`;

export const DateText = styled.p`
	margin-top: 14px;
	margin-left: 20px;
`;

export const StyledDateCalendar = styled(FaCalendar)`
	margin-left: 30px;
	vertical-align: text-top;
`;

