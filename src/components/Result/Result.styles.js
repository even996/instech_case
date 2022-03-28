import styled from 'styled-components';


export const StyledResultText = styled.p`
	color: #334678;
	font-weight: 550;
	font-size: 16px;
  text-align: center;
  margin-bottom: 0;
  margin-top: 10px;
`;

export const StyledPremiusCostText = styled.p`
	color: black;
	font-weight: 550;
	font-size: 22px;
  text-align: center;
  text-decoration: underline;
`;


export const ResultButton = styled.button`
	width: 210px;
	height: 48px;
	background-color: darkgreen;
	color: white;
	border-radius: 20px;
	font-size: 18px;
	margin-top: 50px;
	margin-left: 300px;
	box-shadow: 0px 4px 10px '#a1c3fc';
	border: none;
	top: 35%;
	left: 10%;
	margin-bottom: 30px;
	:hover {
		cursor: pointer;
	}
`;


export const PremiumCostButton = styled.button`
	width: 210px;
	height: 48px;
	background-color: red;
	color: white;
	border-radius: 20px;
	font-size: 18px;
	margin-top: 50px;
	margin-left: 100px;
	box-shadow: 0px 4px 10px '#a1c3fc';
	border: none;
	top: 35%;
	left: 10%;
	margin-bottom: 30px;
	:hover {
		cursor: pointer;
	}
`;

