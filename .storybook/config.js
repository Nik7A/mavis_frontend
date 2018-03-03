const React = require('react');
const { configure, addDecorator } = require('@storybook/react');
const { withKnobs } = require('@storybook/addon-knobs/react');
const { StoryWrapper } = require('../src/components/story-wrapper/story-wrapper.component');

addDecorator(withKnobs);
addDecorator(story => React.createElement(StoryWrapper, {children: story()}));

const req = require.context(`../src`, true, /\.story\.jsx$/);

configure(() => {
	req.keys().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(req);
}, module);
