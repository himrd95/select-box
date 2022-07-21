import React from 'react';
import Select from '../Select/Select';

const colors = ['red', 'yellow', 'green', 'blue'];
const components = [
	{ title: 'React', id: 'react' },
	{ title: 'Angular', id: 'angular' },
	{ title: 'Vue', id: 'vue' },
	{ title: 'Ember', id: 'ember' },
];

const Home = () => {
	return (
		<div>
			<h3>Home page</h3>
			<Select
				label='Select the color'
				data={colors}
				multiselect={true}
			/>
			<Select
				label='Select the course'
				data={components}
				searchable={true}
				multiselect={false}
			/>
		</div>
	);
};

export default Home;
