import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import classnames from 'classnames';

import { SIZES } from '../../constants/ui-kit';
import css from './button.module.css'

export class Button extends React.Component {
	render() {
		const { size, disabled } = this.props;

		const classNames = classnames(css.container, this.props.className, {
			[css.size_xs]: size === SIZES.XS,
			[css.size_s]: size === SIZES.S,
			[css.size_m]: size === SIZES.M,
			[css.size_l]: size === SIZES.L,
			[css.size_xl]: size === SIZES.XL,
			[css.disabled]: !!disabled
		});

		return (
			<button {...this.props} className={classNames}/>
		);
	}
}

Button.propTypes = forbidExtraProps({
	children: PropTypes.node,
	size: PropTypes.oneOf(Object.values(SIZES)),
	onClick: PropTypes.func,
	className: PropTypes.string,
	disabled: PropTypes.bool
});

Button.defaultProps = {
	disabled: false
};