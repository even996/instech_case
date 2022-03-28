import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NextButton, StyledErrorText } from './NextComponent.styles';
import moment from 'moment';


const 
NextComponent = ({setShowSetting}) => {

  const [error, setError] = useState('');
  const kilometers = useSelector((state) => state.cardContent.kilometers);
  const owners = useSelector((state) => state.cardContent.owners);
  const startDate = useSelector((state) => state.cardContent.startDate);
  const endDate = useSelector((state) => state.cardContent.endDate);

  const startDateFormatted = new Date(startDate);
  const endDateFormatted = new Date(endDate);

  const diff = endDateFormatted.getTime() - startDateFormatted.getTime();

  var Difference_In_Days = diff / (1000 * 3600 * 24);





  
  console.log('days', Difference_In_Days);


  const checkError = () => {
    let noError = true;
    if (kilometers < 1000) {
      setError('Må være over 1000 km')
      noError = false;
    } else if (kilometers > 50000) {
      setError('Må være under 50000 km')
      noError = false;
    } else if (owners < 1) {
      setError('Owners higher then 1')
      noError = false;
    } else if (owners > 10) {
      setError('Owners less then 10')
      noError = false;
    }
    else if (Difference_In_Days < 120 || Difference_In_Days > 720 || !Difference_In_Days) {
      setError('Number of days must be between 120 and 720')
      noError = false;
      }
    else {
      setError('')
      noError = true;
    }
    if (noError) {
      setShowSetting(false);
      console.log('hurray')
    }
  }

  return (
    <>
      <StyledErrorText>{error}</StyledErrorText>
      <NextButton onClick={() => {checkError()}}
			>
				Next
			</NextButton>
    </>
  )
}

export default NextComponent