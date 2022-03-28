import React, { useState, useEffect } from 'react'
import Contact from './components/ChooseBrand/Contact'
import { AddButton, ContactContainer, HomeHeader, StyledBackground } from './Home.styled'
import { apiCallGetBrands, apiCallGetPolicies } from './utils/api'
import ScenarioPicker from './components/PolicyEditor';
import { StyledIcon } from './components/ChooseBrand/Contact.styled';

const Home = () => {

  const [policies, setPolicies] = useState([{}]);
  const [brands, setBrands] = useState([{}]);
  const [showBrand, setShowBrands] = useState(false)

  useEffect(() => {
    getPolicies();
}, [showBrand]);

  async function getBrands () {
    const result = await apiCallGetBrands();
    setBrands(result)  
    setShowBrands(true);
  }

  async function getPolicies() {
    const result = await apiCallGetPolicies();
    setPolicies(result);
  }

  return (
    <StyledBackground>
      <HomeHeader>Car Insurance</HomeHeader>
      {policies[0].car &&
        <ContactContainer>
          {policies.map((p) => <Contact car={p} key={p.id}/>)}
        </ContactContainer>
      }
      <AddButton onClick={getBrands}>{ <StyledIcon />}</AddButton>
      {showBrand && brands[0].name &&
        <ScenarioPicker brands={ brands } setShowBrands={(value) => setShowBrands(value)} />
      }
    </StyledBackground>
  )
}

export default Home
