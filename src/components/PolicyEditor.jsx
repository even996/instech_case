import { useState, useEffect } from 'react';
import {
	CardsContainer,
	StyledTitle,
	StyledCloseText,
	StyledCloseIcon,
	StyledCloseWrapper,
  StyledBrandTitle,
  PolicyEditorContainer,
  StyledBrandModelsTitle,
} from './PolicyEditor.styles';
import BrandModel from './BrandModels/BrandModels';
import ChangeTextFields from './InputFields/InputFields';
import DateComponent from './DateFields/DateComponent';
import NextComponent from './NextComponent/NextComponent';
import Resulat from './Result/Result';
import BrandsOverview from './BrandsOverview/BrandsOverview';
import { apiCallGetBrandModels } from '../utils/api';

const PolicyEditor = ({ brands, setShowBrands }) => {

  const [models, setModels] = useState([{}]);

  const [showBrands2, setShowBrands2] = useState(true);
  const [showModels, setShowModels] = useState(true);
  const [showSettings, setShowSetting] = useState(true);

  const [brandId, setBrandId] = useState();

  useEffect(() => {
    if (brandId) {
      getBrandModels();
    }
  }, [brandId]);

  async function getBrandModels() {
    const result = await apiCallGetBrandModels(brandId);
    setModels(result);
  }

	return (
		<PolicyEditorContainer>
			<StyledCloseWrapper
				onClick={() => {
          setShowBrands(false);
				}}
			>
				<StyledCloseText>Close</StyledCloseText>
				<StyledCloseIcon />
			</StyledCloseWrapper>
      <StyledTitle>Policy Editor</StyledTitle>
      {showBrands2 && 
        <>
        <StyledBrandTitle>Choose a brand</StyledBrandTitle>
        <CardsContainer>
          {brands.map((p) =>
            <BrandsOverview idNumber={p.id} brandName={p.name} key={p.id} setShowBrands={() => setShowBrands2(false)} setBrandId={(brandId) => setBrandId(brandId)}
            />)}
        </CardsContainer>
        </>
      }
      {showModels && !showBrands2 && models[0].name &&
        <>
        <StyledBrandModelsTitle>Choose a model</StyledBrandModelsTitle>
        <CardsContainer>
          {models.map((p) =>
            <BrandModel idNumber={p.id} brandName={p.name} key={p.id} setShowModels={() => setShowModels(false)}
            />)}
        </CardsContainer>
        </>
      }
      {!showBrands2 && !showModels && showSettings &&
        <>
        <StyledBrandTitle>Set details</StyledBrandTitle>
        <ChangeTextFields />
        <DateComponent />
        <NextComponent setShowSetting={(value) => setShowSetting(value)}/>
        </>
      }
      {!showSettings && 
        <>
        <StyledBrandTitle>Policy Details</StyledBrandTitle>
        <Resulat setShowBrands={(value) => setShowBrands(value)} />
        </>
      }
		</PolicyEditorContainer>
	);
};

export default PolicyEditor;
