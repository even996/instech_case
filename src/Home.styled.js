import styled from 'styled-components'

export const StyledBackground = styled.div`
  height: 100%;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
  background-color: whitesmoke;
`

export const HomeHeader = styled.h1`
  color: black;
  text-align: center;
`

export const ContactContainer = styled.div`
display: flex;
justify-content: space-around;
height: auto;
height: 500px;
z-index: 5;
border-color: white;
flex-wrap: wrap;
`


export const AddButton = styled.button`
  border-radius: 100px;
  position: fixed; /* or absolute */
  top: 80%;
  left: 80%;
  cursor: pointer;
  background-color: green;
 `