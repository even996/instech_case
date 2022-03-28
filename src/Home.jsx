import React, { useState, useEffect } from 'react'
import Contact from './components/ChooseBrand/Contact'
import { AddButton, ContactContainer, HomeHeader, StyledBackground } from './Home.styled'
import { getPolicy } from './utils/api'
import axios from 'axios';
import ScenarioPicker from './components/PolicyEditor';
import { StyledIcon } from './components/ChooseBrand/Contact.styled';






const Home = () => {


  const [ploices, setPolices] = useState([{}]);
  const [brands, setBrands] = useState([{}]);

  const [showBrand, setShowBrands] = useState(false)



  

const api = axios.create({
  baseURL: 'https://test-case.azurewebsites.net/'
})
  
  useEffect(() => {
  api.get('https://test-case.azurewebsites.net/api/policy?page=0&size=25', {
    headers: {
      'X-Api-Key' : process.env.REACT_APP_INSTECH_API_KEY
    }
  }).then(res => {
    setPolices(res.data);
  })
}, [showBrand]);

  const createPolicy = () => {
    api.get('https://test-case.azurewebsites.net/api/car/brands', {
    headers: {
      'X-Api-Key' : 'e993baf3-4e2e-4dbe-a944-f6c41fb1a243'
    }
  }).then(res => {
    //setPolices(res.data);
    setBrands(res.data);
  })
    setShowBrands(true);
  }


  return (
    <StyledBackground>
      <HomeHeader>Car Insurance</HomeHeader>
      {ploices[0].car &&
        <ContactContainer>
          {ploices.map((p) => <Contact car={p} key={p.id}/>)}
        </ContactContainer>
      }
      <AddButton onClick={createPolicy}>{ <StyledIcon />}</AddButton>
      {showBrand && brands[0].name &&
        <ScenarioPicker brands={ brands } setShowBrands={(value) => setShowBrands(value)} />
      }
    </StyledBackground>
  )
}

export default Home
