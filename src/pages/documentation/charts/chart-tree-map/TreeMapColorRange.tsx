import { useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Chart from '../../../../components/extras/Chart';

const TreeMapColorRange = () => {
	const [state] = useState({
		series: [
			{
				data: [
					{
						x: 'INTC',
						y: 1.2,
					},
					{
						x: 'GS',
						y: 0.4,
					},
					{
						x: 'CVX',
						y: -1.4,
					},
					{
						x: 'GE',
						y: 2.7,
					},
					{
						x: 'CAT',
						y: -0.3,
					},
					{
						x: 'RTX',
						y: 5.1,
					},
					{
						x: 'CSCO',
						y: -2.3,
					},
					{
						x: 'JNJ',
						y: 2.1,
					},
					{
						x: 'PG',
						y: 0.3,
					},
					{
						x: 'TRV',
						y: 0.12,
					},
					{
						x: 'MMM',
						y: -2.31,
					},
					{
						x: 'NKE',
						y: 3.98,
					},
					{
						x: 'IYT',
						y: 1.67,
					},
				],
			},
		],
		options: {
			legend: {
				show: false,
			},
			chart: {
				height: 350,
				type: 'treemap',
			},
			title: {
				text: 'Treemap with Color scale',
			},
			dataLabels: {
				enabled: true,
				style: {
					fontSize: '12px',
				},
				formatter(text: any, op: any) {
					return [text, op.value];
				},
				offsetY: -4,
			},
			plotOptions: {
				treemap: {
					enableShades: true,
					shadeIntensity: 0.5,
					reverseNegativeShade: true,
					colorScale: {
						ranges: [
							{
								from: -6,
								to: 0,
								color: '#CD363A',
							},
							{
								from: 0.001,
								to: 6,
								color: '#52B12C',
							},
						],
					},
				},
			},
		},
	});
	return (
		<div className='col-lg-6'>
			<Card stretch>
				<CardHeader>
					<CardLabel icon='AccountTree'>
						<CardTitle>
							type <small>treemap</small>
						</CardTitle>
						<CardSubTitle>Chart</CardSubTitle>
					</CardLabel>
				</CardHeader>
				<CardBody>
					<Chart
						series={state.series}
						options={state.options}
						type={state.options.chart.type}
						height={state.options.chart.height}
					/>
				</CardBody>
			</Card>
		</div>
	);
};

export default TreeMapColorRange;
