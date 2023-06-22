import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_SIZE,
	ICON_ROUND_SIZE,
	ICON_GAP,
	ITEM_BORDER_RADIUS,
	ITEM_PADDING,
} = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	style: {
		type: 'string',
		default: 'style-1',
	},
	blockStyle: {
		type: 'object',
	},
	titleColor: {
		type: 'string',
	},
	designationColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	iconBgNormalColor: {
		type: 'string',
	},
	iconBgGradientColor: {
		type: 'string',
	},
	contentBgColor: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	itemBgColor: {
		type: 'string',
	},
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: GRID_GAP,
		defaults: {
			[`${GRID_GAP}DeskRange`]: 30,
			[`${GRID_GAP}TabRange`]: 30,
			[`${GRID_GAP}MobRange`]: 30,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ROW_GAP,
		defaults: {
			[`${ROW_GAP}DeskRange`]: 40,
			[`${ROW_GAP}TabRange`]: 40,
			[`${ROW_GAP}MobRange`]: 40,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: NAME_FONT_SIZE,
		defaults: {
			[`${NAME_FONT_SIZE}DeskRange`]: 20,
			[`${NAME_FONT_SIZE}TabRange`]: 18,
			[`${NAME_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: DESG_FONT_SIZE,
		defaults: {
			[`${DESG_FONT_SIZE}DeskRange`]: 13,
			[`${DESG_FONT_SIZE}TabRange`]: 13,
			[`${DESG_FONT_SIZE}MobRange`]: 13,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_SIZE,
		defaults: {
			[`${ICON_SIZE}DeskRange`]: 18,
			[`${ICON_SIZE}TabRange`]: 18,
			[`${ICON_SIZE}MobRange`]: 18,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_ROUND_SIZE,
		defaults: {
			[`${ICON_ROUND_SIZE}DeskRange`]: 35,
			[`${ICON_ROUND_SIZE}TabRange`]: 35,
			[`${ICON_ROUND_SIZE}MobRange`]: 35,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_GAP,
		defaults: {
			[`${ICON_GAP}DeskRange`]: 10,
			[`${ICON_GAP}TabRange`]: 10,
			[`${ICON_GAP}MobRange`]: 10,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_PADDING,
		defaults: {},
	}),
	...generateResRangleControlAttributes({
		controlName: ITEM_BORDER_RADIUS,
		defaults: {},
	}),
};

export default attributes;
