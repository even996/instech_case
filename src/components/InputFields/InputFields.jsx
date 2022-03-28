import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import {
	TextFieldBottom,
} from './InputFields.styles';
import { useDispatch } from 'react-redux';
import { sendKilometers, sendOwners } from '../../redux/slices/cardContent';



const ChangeTextFields = () => {
  const dispatch = useDispatch();
  const [selectedOwners, setSelectedOwners] = useState();
	const [selectedKm, setSelectedKm] = useState();
  const handleChange = (event) => {
    console.log(event.target.name);

    switch (event.target.name) {
			case 'kilometers':
          setSelectedKm(event.target.value);
          dispatch(
            sendKilometers(event.target.value)
          );
				break;
      case 'owners':
        setSelectedOwners(event.target.value);
        dispatch(
          sendOwners(event.target.value)
        );
				break;
			default:
				break;
		}
	};

	return (
		<>
				<TextFieldBottom>
						<TextField
							name="kilometers"
							value={selectedKm}
							onChange={handleChange}
							label="Kilometers:"
              variant="outlined"
              type="number"
						/>
          <TextField
						style={{ marginLeft: '20px' }}
						name="owners"
				    value={selectedOwners}
						onChange={handleChange}
						label="Owners: "
            variant="outlined"
            type="number"
					/>
				</TextFieldBottom>
		</>
	);
};

export default ChangeTextFields;
