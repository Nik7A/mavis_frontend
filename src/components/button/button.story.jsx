import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import css from './story.module.css';
import { Button } from './button.component';
import { SIZES } from '../../constants/ui-kit';

storiesOf('ui-kit', module)
	.add('button', () => {
		return (
			<>
				<div className={css.wrapper}>
					<Button
						size={SIZES.XS}
						onClick={action('clicked')}>Extra Small</Button>
				</div>
				<div className={css.wrapper}>
					<Button
						size={SIZES.S}
						onClick={action('clicked')}>Small</Button>
				</div>
				<div className={css.wrapper}>
					<Button
						size={SIZES.M}
						onClick={action('clicked')}>Medium</Button>
				</div>
				<div className={css.wrapper}>
					<Button
						size={SIZES.L}
						onClick={action('clicked')}>Large</Button>
				</div>
				<div className={css.wrapper}>
					<Button
						size={SIZES.XL}
						onClick={action('clicked')}>Extra Large</Button>
				</div>
				<div className={css.wrapper}>
					<Button
						size={SIZES.M}
						disabled={true}
						onClick={action('clicked')}>Disabled</Button>
				</div>
			</>
		);
	});