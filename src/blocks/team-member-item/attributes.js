const attributes = {
	style: {
		type: 'string',
		default: 'style-1',
	},
	titleTag: {
		type: 'string',
		default: 'h2'
	},
	titleColor: {
		type: 'string',
	},
	teamMemberName: {
		type: 'string',
		default: 'John Doe',
	},
	teamMemberDesg: {
		type: 'string',
		default: 'Web Developer'
	},
	photo: {
		type: 'object',
	},
	socialIcon: {
		type: 'string',
		default: 'facebook1'
	},
	url: {
		type: 'string',
		default: '#'
	},
	newTab: {
		type: 'string',
		default: '_blank'
	}
};

export default attributes;
