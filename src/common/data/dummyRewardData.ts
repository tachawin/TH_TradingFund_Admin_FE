import moment from 'moment';

const data = [
	{
		id: 1,
		name: 'React Admin Template',
		type: 'deposit',
		status: 'success',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 120.00,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 36,
		count: 982,
		date: moment(),
		note: ''
	},
	{
		id: 2,
		name: 'Omtanke Mobile UI Kit',
		type: 'deposit',
		status: 'not-found',
		payerBankAccountNumber: '2123',
		payerBankName: 'kbank',
		recipientBankAccountNumber: '7903',
		recipientBankName: 'kbank',
		amount: 500.00,
		product: 'Laptop',
		points: 10000,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 32,
		count: 423,
		date: moment().add(-1, 'day'),
		note: 'ยอดเงินไม่เข้า แต่ลูกค้ามีหลักฐานเป็นสลิปครบ กรุณาตรวจสอบวันเวลาและทำรายการแบบ manual'
	},
	{
		id: 3,
		name: 'Presentation Slides',
		type: 'withdraw',
		status: 'cancel',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '7903',
		recipientBankName: 'kbank',
		mobileNumber: '+66 99 999 1111',
		amount: 5000.24,
		product: 'Handbag',
		points: 232312321,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 24,
		count: 678,
		date: moment().add(-1, 'day'),
		note: 'ถอนไม่สำเร็จ'
	},
	{
		id: 4,
		name: '3D Animation',
		type: 'deposit',
		status: 'sending',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 676 9999',
		amount: 10999.99,
		product: 'Tote bag',
		points: 199,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 24,
		count: 532,
		date: moment().add(-2, 'day'),
		note: ''
	},
	{
		id: 5,
		name: 'Travel Shopping UI Kit',
		type: 'withdraw',
		status: 'request',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 19999999999.11,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 74,
		count: 235,
		date: moment().add(-3, 'day'),
		note: ''
	},
	{
		id: 6,
		name: 'Crypto 3D Icon Set',
		type: 'deposit',
		status: 'success',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 2000.00,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 58,
		count: 547,
		date: moment().add(-3, 'day'),
		note: ''
	},
	{
		id: 7,
		name: 'E-Learning App UI Kit',
		type: 'withdraw',
		status: 'success',
		payerBankAccountNumber: '2123',
		payerBankName: 'kbank',
		recipientBankAccountNumber: '7903',
		recipientBankName: 'kbank',
		mobileNumber: '+66 23 211 7878',
		amount: 43544.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 39,
		count: 149,
		date: moment().add(-4, 'day'),
		note: ''
	},
	{
		id: 8,
		name: 'Dashboard App UI Kit',
		type: 'deposit',
		status: 'success',
		payerBankAccountNumber: '2123',
		payerBankName: 'kbank',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 5465555555555.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 36,
		count: 132,
		date: moment().add(-4, 'day'),
		note: ''
	},
	{
		id: 9,
		name: 'Angular Dashboard Template',
		type: 'withdraw',
		status: 'success',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 213230.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 78,
		count: 120,
		date: moment().add(-5, 'day'),
		note: ''
	},
	{
		id: 10,
		name: 'React Bootstrap Template',
		type: 'deposit',
		status: 'success',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 5000.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 89,
		count: 112,
		date: moment().add(-7, 'day'),
		note: ''
	},
	{
		id: 11,
		name: 'Dashboard UI Kit',
		type: 'deposit',
		status: 'success',
		payerBankAccountNumber: '2123',
		payerBankName: 'kbank',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 5000.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 24,
		count: 90,
		date: moment().add(-7, 'day'),
		note: ''
	},
	{
		id: 12,
		name: 'Bank App UI Kit',
		type: 'withdraw',
		status: 'request',
		payerBankAccountNumber: '2123',
		payerBankName: 'kbank',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 5000.24,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 12,
		count: 63,
		date: moment().add(-9, 'day'),
		note: ''
	},
	{
		id: 13,
		name: 'Travel Shopping UI Kit',
		type: 'withdraw',
		status: 'request',
		payerBankAccountNumber: '1124',
		payerBankName: 'scb',
		recipientBankAccountNumber: '8923',
		recipientBankName: 'scb',
		mobileNumber: '+66 81 221 6834',
		amount: 19999999999.11,
		product: 'Tote bag',
		points: 500,
		address: 'ABC Building Cross Rd. XYZ States United States 20002',
		price: 74,
		count: 235,
		date: moment().add(-3, 'day'),
		note: ''
	},
];
export default data;
