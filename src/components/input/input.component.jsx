import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import classnames from 'classnames';

import { SIZES } from '../../constants/ui-kit';
import css from './input.module.css'

const propTypes = forbidExtraProps({
	size: PropTypes.oneOf(Object.values(SIZES)),
	className: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
});

export class Input extends React.Component {
	constructor(){
		super();
		this.state = {text: ''};
	};
	
	handleChange = e => {
		this.setState({text: e.target.value});
	};
	
	render() {
		const { size } = this.props;

		const classNames = classnames(css.container, this.props.className, {
			[css.size_xs]: size === SIZES.XS,
			[css.size_s]: size === SIZES.S,
			[css.size_m]: size === SIZES.M,
			[css.size_l]: size === SIZES.L,
			[css.size_xl]: size === SIZES.XL
		});
		
		return (
			<input {...this.props} className={classNames} />
		);
	}
}

Input.propTypes = propTypes;
