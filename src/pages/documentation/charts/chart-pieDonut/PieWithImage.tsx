import { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const PieWithImage = () => {
	const [state] = useState({
		series: [44, 33, 54, 45],
		options: {
			chart: {
				width: 500,
				type: 'pie',
			},
			labels: ['Avocado', 'Banana', 'Pineapple', 'Strawberry'],
			fill: {
				type: 'image',
				opacity: 0.85,
				image: {
					src: ['../../../../assets/img/fruit/avocado.jpg', '../../../../assets/img/fruit/banana.jpg', '../../../../assets/img/fruit/pineapple.jpg', '../../../../assets/img/fruit/strawberry.jpg'],
					width: 180,
					height: 320,
				},
			},
			stroke: {
				width: 4,
			},
			dataLabels: {
				enabled: true,
				style: {
					colors: ['#111'],
				},
				background: {
					enabled: true,
					foreColor: '#fff',
					borderWidth: 0,
				},
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='PieChart'>
						<CardTitle>
							type <small>pie</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						width={state.options.chart.width}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default PieWithImage;
