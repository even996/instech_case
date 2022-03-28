import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PremiumCostButton, ResultButton, StyledPremiusCostText, StyledResultText } from './Result.styles';
import moment from 'moment';
import { apiCallCreatePolicy, apiCallPremiumCalculation } from '../../utils/api';

const Resulat = ({setShowBrands}) => {

  const startDate = useSelector((state) => state.cardContent.startDate);
  const endDate = useSelector((state) => state.cardContent.endDate);
  const kilometers = useSelector((state) => state.cardContent.kilometers);
  const owners = useSelector((state) => state.cardContent.owners);
  const modelId = useSelector((state) => state.cardContent.modelId);
  const brandName = useSelector((state) => state.cardContent.brandName);
  const brandModel = useSelector((state) => state.cardContent.brandModel);

  const [premiumCost, setPremiumCost] = useState('');

  async function createPolicy () {
    await apiCallCreatePolicy(modelId, startDate, endDate, kilometers, owners);
    setShowBrands(false);
  }

  async function getPremiumCalculation () {
    const result = await apiCallPremiumCalculation(modelId, startDate, endDate, kilometers, owners);
    setPremiumCost(result)  
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