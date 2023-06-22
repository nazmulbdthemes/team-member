const attributes = {
	style: {
		type: 'string',
		default: 'style-1',
	},
	titleTag: {
		type: 'string',
		default: 'div',
	},
	teamMemberName: {
		type: 'string',
		default: 'John Doe',
	},
	teamMemberDesg: {
		type: 'string',
		default: 'Web Developer',
	},
	photo: {
		type: 'object',
	},
	socialProfiles: {
		type: 'array',
		default: [],
	},
	newTab: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
