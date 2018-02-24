import React from 'react';
import css from './button.module.css';

export class Button extends React.Component {
	render() {
		return (
			<button className={css.container}>btn</button>
		);
	}
}