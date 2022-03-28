import { StyledContactContainer, StyledContactHeader, StyledContactHeader2 } from './Contact.styled'
import moment from 'moment';

const Contact = (car) => {

  if (!car) {
    return null;
  }

  const startDateFromDb = car?.car?.period.start;
  const startDate = moment(new Date(startDateFromDb)).format('YYYY-MM-DD');
  const endDateFromDb = car?.car?.period.end;
  const endDate = moment(new Date(endDateFromDb)).format('YYYY-MM-DD');

  return (
    <StyledContactContainer>
      <StyledContactHeader>
        Brand: {car?.car.car?.brand}
      </StyledContactHeader>
      <StyledContactHeader2>
        Model: {car?.car.car?.model}
      </StyledContactHeader2>
      <StyledContactHeader2>
        Kilometers: {car?.car?.insuranceDetails.kilometers}
      </StyledContactHeader2>
      <StyledContactHeader2>
        Owners: {car?.car?.insuranceDetails.owners}
      </StyledContactHeader2>
      <StyledContactHeader2>
        Start Period: {endDate}
      </StyledContactHeader2>
      <StyledContactHeader2>
        End Period: {startDate}
      </StyledContactHeader2>
      <StyledContactHeader2>
        Premium: {car?.car?.premium}
      </StyledContactHeader2>
    </StyledContactContainer>
  )
}

export default Contact