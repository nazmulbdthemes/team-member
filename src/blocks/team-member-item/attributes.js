const attributes = {
	style: {
		type: 'string',
		default: 'style-1',
	},
	title: {
		type: 'string',
	},
	titleTag: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	teamMemberName: {
		type: 'string',
		default: 'John Doe'
	},
	teamMemberDesg: {
		type: 'string',
		default: 'Web Developer'
	},
	photo: {
		type: 'object',
	},
	icon: {
		type: 'string',
		default: 'facebook1',
	},
};

export default attributes;
