import styled from 'styled-components'
import { HiOutlinePlusSm } from 'react-icons/hi'




export const StyledContactContainer = styled.div`
  height: 350px;
  width: 300px;
  background-color: whitesmoke;
  border: black;
  margin-top: 20px;
  text-align: center;
  border-radius: 20px;
	border: 1px solid #334678;
`


export const StyledContactHeader = styled.h2`
  color: black;
  font-size: 20px;
  text-align: left;
  margin-left: 30px;
  margin-top: 50px;
`
export const StyledContactHeader2 = styled.h2`
  color: black;
  font-size: 20px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 0px;
`

export const StyledIcon = styled(HiOutlinePlusSm)`
  color: black;
  font-size: 75px;
  margin-top: 10px;
`;

// export const StyledIconNext = styled(FaRegAddressCard)`
//   color: black;
//   font-size: 50px;
//   margin-top: 0px;
//   margin-left: 150px;
// `;