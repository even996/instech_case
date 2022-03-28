import {
  BrandCardContainer,
  StyledNumber,
  StyledText,
} from './BrandModels.styles';
import { useDispatch } from 'react-redux';
import { sendModelId, sendBrandModel } from '../../redux/slices/cardContent';



const BrandModel = ({
	idNumber,
  brandName,
  setShowModels,
  setModelId,
}) => {
  const dispatch = useDispatch();
	return (
    <>
			<BrandCardContainer
				onClick={() => {
          dispatch(sendModelId(idNumber));
          dispatch(sendBrandModel(brandName));
          setShowModels(false);
          setModelId(idNumber);
				}}
			>
				<StyledNumber>{idNumber}</StyledNumber>
					<StyledText>{brandName}</StyledText>
			</BrandCardContainer>
		</>
	);
};

export default BrandModel;