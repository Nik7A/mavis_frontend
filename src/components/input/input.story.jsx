import React from 'react';
import { storiesOf } from '@storybook/react';

import css from './story.module.css';
import { Input } from './input.component';
import { SIZES } from '../../constants/ui-kit';

class InputsController extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {name: '', email: '', tel: ''};
	// };
	// 
	// handleChange = e => {
	//  this.setState({e.target.dataset.type: e.target.value});
	// };

	render () {
		return (
			<div>
				<Input
					placeholder="Имя"
					size={SIZES.S}
				/>
				<Input
					placeholder="email"
					size={SIZES.M}
				/>
				<Input
					placeholder="Телефон"
					size={SIZES.L}
				/>
			</div>
		)
	}
};

storiesOf('ui-kit', module)
	.add('input', () => {
		return (
			<InputsController />
		);
	});