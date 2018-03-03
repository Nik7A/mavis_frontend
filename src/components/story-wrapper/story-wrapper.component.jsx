import React from 'react';
import '../app/common.css';
import './common.css';
import css from './story-wrapper.module.css';

export const StoryWrapper = ({children}) => (
	<section className={css.container}>{children}</section>
);