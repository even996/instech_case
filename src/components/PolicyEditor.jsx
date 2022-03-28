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
import axios from 'axios';
import BrandModel from './BrandModels/BrandModels';
import ChangeTextFields from './InputFields/InputFields';
import DateComponent from './DateFields/DateComponent';
import NextComponent from './NextComponent/NextComponent';
import Resulat from './Result/Result';
import BrandsOverview from './BrandsOverview/BrandsOverview';



const ScenarioPicker = ({ brands, setShowBrands }) => {

  const [models, setModels] = useState([{}]);

  const [showBrands2, setShowBrands2] = useState(true);
  const [showModels, setShowModels] = useState(true);
  const [showSettings, setShowSetting] = useState(true);

  const [brandId, setBrandId] = useState();

const api = axios.create({
  baseURL: 'https://test-case.azurewebsites.net/'
})


  // const doSomething = (id) => {
  //   api.get(`https://test-case.azurewebsites.net/api/car/brands/${id}`, {
  //   headers: {
  //     'X-Api-Key' : 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
  //   }
  // }).then(res => {
  //   //setPolices(res.data);
  //   setModels(res.data);
  // })
  //   //setModels(true);
  // }

  useEffect(() => {
    if (brandId) {
      api.get(`https://test-case.azurewebsites.net/api/car/models/${brandId}`, {
        headers: {
          'X-Api-Key': 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
        }
      }).then(res => {
        setModels(res.data);
      })
    }
  }, [brandId]);



  // useEffect(() => {

  //   api.post(`https://test-case.azurewebsites.net/api/policy`, {
  //     "modelId": "1",
  //     "period": {
  //       "start": "2021-06-06T",
  //       "end": "2022-01-01T"
  //     },
  //     "owners": "10",
  //     "kilometers": "100000"
  //   }, {
  //     headers: {
  //       'X-Api-Key': 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
  //     }
  //   });
  // }, []);




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
        <StyledBrandTitle>Choose brand</StyledBrandTitle>
        <CardsContainer>
          {brands.map((p) =>
            <BrandsOverview idNumber={p.id} brandName={p.name} key={p.id} setShowBrands={() => setShowBrands2(false)} setBrandId={(brandId) => setBrandId(brandId)}
            />)}
        </CardsContainer>
        </>
      }
      {showModels && !showBrands2 && models[0].name &&
        <>
        <StyledBrandModelsTitle>Choose model</StyledBrandModelsTitle>
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

export default ScenarioPicker;
