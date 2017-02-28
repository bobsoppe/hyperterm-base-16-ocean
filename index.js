const backgroundColor = '#2b303b';
const foregroundColor = '#c0c5ce';
const cursorColor = '#c0c5ce';
const borderColor = '#343d46';
const colors = {
	black: backgroundColor,
	red: '#bf616a',
	green: '#a3be8c',
	yellow: '#ebcb8b',
	blue: '#8497bd',
	magenta: '#b48ead',
	cyan: '#96b5b4',
	white: foregroundColor,
	lightBlack: '#65737e',
	lightRed: '#bf616a',
	lightGreen: '#a3be8c',
	lightYellow: '#ebcb8b',
	lightBlue: '#8497bd',
	lightMagenta: '#b48ead',
	lightCyan: '#96b5b4',
	lightWhite: '#eff1f5'
};

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		foregroundColor,
		backgroundColor,
		borderColor,
		colors,
		cursorColor: config.cursorColor || cursorColor,
		termCSS: `
			${config.termCSS || ''}
			::selection {
				background: #4f5b66 !important;
			}
		`,
		css: `
			${config.css || ''}
			::selection {
				background: #4f5b66 !important;
			}
		`
	});
};
