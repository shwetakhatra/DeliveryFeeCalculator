import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToastComp from './Toast/Toast';
import Form from './Form/Form';
import { formField } from '../interfaces/form.interfaces';
import { calculateDeliveryFee } from '../utils';

const formFields : formField[] = [
	{ id: 'cartValue', label: 'Cart Value (€)', type: 'number' },
	{ id: 'deliveryDist', label: 'Delivery Distance (m)', type: 'number' },
	{ id: 'numOfitem', label: 'Number of items', type: 'number' },
	{ id: 'time', label: 'Order Time', type: 'datetime' },
	{ id: 'submitBtn', label: 'Calculate delivery charge', type: 'button' },
];
const FeeCalculator: React.FC = () => {
	const [totalPrice, setTotalPrice] = useState<number | null>(null);
	const [errorToast, setErrorToast] = useState<{ show: boolean; message: string }>({
		show: false,
		message: '',
	});
	const calculateFee = (formValues: { [key: string]: string | number }) => {
		try {
			const hasZeroValue = formFields.some(
			  (field) => field.type === 'number' && formValues[field.id] === 0
			);
			if (hasZeroValue) {
			  setErrorToast({ show: true, message: 'Error: Please enter valid values !!' });
			  return;
			}
			const result = calculateDeliveryFee(formValues);
			setTotalPrice(result);
			setErrorToast({ show: false, message: '' });
		} catch (error: any) {
			setErrorToast({ show: true, message: `Error: ${error.message}` });
		}
	};
	const handleToastClose = () => {
		setTimeout(() => {
			setErrorToast({ show: false, message: '' });
		}, 200);
	};
	return (
		<div>
		<Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
			<div className="bg-light p-5 rounded shadow-lg" style={{ width: '50%' }}>
				<h3 className="mb-5">Delivery Fees Calculator</h3>
				<Row>
					<Col>
						<Form
						formFields={formFields}
						onFormSubmit={calculateFee}
						/>
						{totalPrice !== null && (
						<div className="text-center mt-4">
							<h5>Delivery Charges</h5>
							<p data-testid="fee">{totalPrice} €</p>
						</div>
						)}
					</Col>
				</Row>
			</div>
		</Container>
		<ToastComp show={errorToast.show} onClose={handleToastClose} message={errorToast.message} />
	</div>
	);
}
export default FeeCalculator;