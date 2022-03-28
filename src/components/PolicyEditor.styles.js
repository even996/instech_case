import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai'


export const PolicyEditorContainer = styled.div`
	width: 1000px;
	background-color: #ffffff;
	position: absolute;
	top: 15%;
	left: 20%;
	z-index: 6;
	border-radius: 20px;
	border: 1px solid #334678;
`;

export const PolicyButton = styled.button`
	width: 210px;
	height: 48px;
	background-color: red;
	color: white;
	border-radius: 20px;
	font-size: 18px;
	margin-top: 100px;
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

export const CardContainer = styled.div`
	width: 150px;
	height: 150px;
	position: relative;
	border: 1px solid #334678;
	border-radius: 10px;
	margin-left: 5%;
	margin-top: 7%;
  margin-bottom: 10%;
	:hover {
		cursor: pointer;
	}
`;

export const BrandCardContainer = styled.div`
	width: 120px;
	height: 100px;
	position: relative;
	border: 1px solid #334678;
	border-radius: 10px;
	margin-left: 5%;
	margin-top: 7%;
  margin-bottom: 10%;
	:hover {
		cursor: pointer;
	}
`;


export const StyledNumber = styled.div`
	height: 35px;
	width: 35px;
	margin-top: 10px;
	margin-left: 10%;
	border: 1px solid #334678;
	color: #334678;
	border-radius: 50%;
	position: absolute;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 20px;
	font-weight: 500;
	vertical-align: middle;
	display: inline;
	line-height: 30px;
`;


export const StyledTitle = styled.p`
	color: #334678;
	font-weight: 550;
	font-size: 18px;
  text-align: center;
`;

export const StyledBrandTitle = styled.p`
	color: #334678;
	font-weight: 550;
	font-size: 24px;
  text-align: center;
  margin-bottom: 0;
`;

export const StyledBrandModelsTitle = styled.p`
	color: #334678;
	font-weight: 550;
	font-size: 24px;
  text-align: center;
  margin-bottom: 2%;
`;

export const StyledText = styled.p`
	margin-left: 10%;
	font-weight: 550;
	color: #334678;
	overflow-wrap: break-word;
  margin-top: 40%;
`;

export const CardsContainer = styled.div`
	display: flex;
	margin-left: 5%;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const StyledCloseText = styled.p`
	color: #334678;
	font-size: 16px;
	font-weight: bold;
	top: 5px;
	margin-left: 10px;
	position: absolute;
	right: 100px;
`;

export const StyledCloseIcon = styled(AiOutlineCloseCircle)`
	margin-top: 2%;
	position: absolute;
  font-size: 24px;
	right: 70px;
	color: #334678;
`;

export const StyledCloseWrapper = styled.div`
	display: inline;
	:hover {
		cursor: pointer;
	}
`;

