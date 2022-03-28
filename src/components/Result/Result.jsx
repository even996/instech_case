import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { PremiumCostButton, ResultButton, StyledPremiusCostText, StyledResultText } from './Result.styles';
import moment from 'moment';




const Resulat = ({setShowBrands}) => {

  const startDate = useSelector((state) => state.cardContent.startDate);
  const endDate = useSelector((state) => state.cardContent.endDate);
  const kilometers = useSelector((state) => state.cardContent.kilometers);
  const owners = useSelector((state) => state.cardContent.owners);
  const modelId = useSelector((state) => state.cardContent.modelId);
  const brandName = useSelector((state) => state.cardContent.brandName);
  const brandModel = useSelector((state) => state.cardContent.brandModel);

  

  const [premiumCost, setPremiumCost] = useState('');
  
  console.log('startDate picker', startDate);
  console.log('endDate picker', endDate);
  console.log('kilometers picker', kilometers);
  console.log('owners picker', owners);
  console.log('modelId', modelId);


  
const api = axios.create({
  baseURL: 'https://test-case.azurewebsites.net/'
})


  const createPolicy = () => {

    api.post(`https://test-case.azurewebsites.net/api/policy`, {
      "modelId": modelId,
      "period": {
        "start": startDate,
        "end": endDate
      },
      "owners": owners,
      "kilometers": kilometers
    }, {
      headers: {
        'X-Api-Key': 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
      }
    });
    setShowBrands(false);
  }

  const getPremiumCalculation = () => {
    api.get(`https://test-case.azurewebsites.net/api/calculator/premium?modelId=${modelId}&period.start=${startDate}&period.end=${endDate}&kilometers=${kilometers}&owners=${owners}`, {
        headers: {
          'X-Api-Key': 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
        }
    }).then(res => {
        setPremiumCost(res.data)
      })
  }

  const startdate = new Date(startDate);
  const enddate = new Date(startDate);
  const startDateFormatted = moment(new Date(startdate)).format('YYYY-MM-DD');
  const endDateFormatted = moment(new Date(enddate)).format('YYYY-MM-DD');

  


  return (
    <>
      <StyledResultText>Brand: { brandName }</StyledResultText>
      <StyledResultText>Model: { brandModel }</StyledResultText>
      <StyledResultText>Owners: { owners }</StyledResultText>
      <StyledResultText>Kilometers: { kilometers } km</StyledResultText>
      <StyledResultText>Start date: { startDateFormatted }</StyledResultText>
      <StyledResultText>End date: { endDateFormatted }</StyledResultText>
      {premiumCost && 
        <StyledPremiusCostText>Premium cost: {premiumCost}</StyledPremiusCostText>
      }
    <PremiumCostButton onClick={() => {getPremiumCalculation()}}
			>
				See premium cost
      </PremiumCostButton>
      <ResultButton onClick={() => {createPolicy()}}
			>
				Create policy
			</ResultButton>
    </>
  )
}

export default Resulat