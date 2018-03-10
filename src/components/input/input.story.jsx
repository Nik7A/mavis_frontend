import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import css from './story.module.css';
import { Input } from './input.component';
import { SIZES } from '../../constants/ui-kit';

storiesOf('ui-kit', module)
	.add('input', () => {
		return (
			<>
				<div className={css.wrapper}>
					<Input
						value="Your address"
						size={SIZES.XS}
						onChange={action('clicked')}/>
				</div>

			</>
		);
	});