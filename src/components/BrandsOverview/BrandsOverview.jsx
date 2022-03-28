import {
	CardContainer,
	StyledNumber,
  StyledText,
} from '../PolicyEditor.styles';
import { useDispatch } from 'react-redux';
import { sendBrandName } from '../../redux/slices/cardContent';


const BrandsOverview = ({
	idNumber,
  brandName,
  setShowBrands,
  setBrandId,
}) => {
  const dispatch = useDispatch();
	return (
		<>
			<CardContainer
        onClick={() => {
          dispatch(sendBrandName(brandName));
          setShowBrands(false);
          setBrandId(idNumber);
				}}
			>
				<StyledNumber>{idNumber}</StyledNumber>
					<StyledText>{brandName}</StyledText>
			</CardContainer>
		</>
	);
};

export default BrandsOverview;
