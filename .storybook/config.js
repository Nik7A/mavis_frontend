import { configure } from '@storybook/react';


const req = require.context(`../src`, true, /\.story\.jsx$/);

configure(() => {
	req.keys().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(req);
}, module);