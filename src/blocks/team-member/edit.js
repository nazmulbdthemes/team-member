/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import './style.scss';
import * as Constants from './constants';
const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_SIZE,
	ICON_ROUND_SIZE,
	ICON_GAP,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
} = Constants;

// Edit Function
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		titleColor,
		designationColor,
		iconColor,
		iconBgNormalColor,
		iconBgGradientColor,
		contentBgColor,
		boxBgHoverColor,
		textAlign,
		itemBgColor,
	} = attributes;

	// unique id
	useEffect(() => {
		setAttributes({
			uniqueId: `bdt-team-blocks-${clientId.slice(0, 8)}`,
		});
	}, []);

	// function to convert object to css
	const convertToCss = (obj) => {
		let cssResult;
		Object.keys(obj).reduce((cssString, key) => {
			// change key to css property
			const cssProperty = key.replace(
				/[A-Z]/g,
				(match) => `-${match.toLowerCase()}`
			);
			cssResult = `${cssString}${cssProperty}:${obj[key]};`;
			return cssResult;
		}, '');
		return cssResult;
	};

	const deskCols = attributes[`${GRID_COLUMNS}DeskRange`];
	const tabCols = attributes[`${GRID_COLUMNS}TabRange`];
	const mobCols = attributes[`${GRID_COLUMNS}MobRange`];
	// Grid Coloumn Gap
	const deskGap = attributes[`${GRID_GAP}DeskRange`];
	const tabGap = attributes[`${GRID_GAP}TabRange`];
	const mobGap = attributes[`${GRID_GAP}MobRange`];
	const gapUnit = attributes[`${GRID_GAP}Unit`];
	// Grid Row Gap
	const deskRowGap = attributes[`${ROW_GAP}DeskRange`];
	const tabRowGap = attributes[`${ROW_GAP}TabRange`];
	const mobRowGap = attributes[`${ROW_GAP}MobRange`];
	const gapRowUnit = attributes[`${ROW_GAP}Unit`];
	// Name Font Size
	const deskNameFont = attributes[`${NAME_FONT_SIZE}DeskRange`];
	const tabNameFont = attributes[`${NAME_FONT_SIZE}TabRange`];
	const mobNameFont = attributes[`${NAME_FONT_SIZE}MobRange`];
	const nameFontUnit = attributes[`${NAME_FONT_SIZE}Unit`];
	// DESG Font Size
	const deskDesgFont = attributes[`${DESG_FONT_SIZE}DeskRange`];
	const tabDesgFont = attributes[`${DESG_FONT_SIZE}TabRange`];
	const mobDesgFont = attributes[`${DESG_FONT_SIZE}MobRange`];
	const desgFontUnit = attributes[`${DESG_FONT_SIZE}Unit`];
	// Icon Size
	const deskIconSize = attributes[`${ICON_SIZE}DeskRange`];
	const tabIconSize = attributes[`${ICON_SIZE}TabRange`];
	const mobIconSize = attributes[`${ICON_SIZE}MobRange`];
	const iconSizeUnit = attributes[`${ICON_SIZE}Unit`];
	// Icon Round Size
	const deskIconRoundSize = attributes[`${ICON_ROUND_SIZE}DeskRange`];
	const tabIconRoundSize = attributes[`${ICON_ROUND_SIZE}TabRange`];
	const mobIconRoundSize = attributes[`${ICON_ROUND_SIZE}MobRange`];
	const iconRoundSizeUnit = attributes[`${ICON_ROUND_SIZE}Unit`];
	// Icon Gap
	const deskIconGap = attributes[`${ICON_GAP}DeskRange`];
	const tabIconGap = attributes[`${ICON_GAP}TabRange`];
	const mobIconGap = attributes[`${ICON_GAP}MobRange`];
	const iconGapUnit = attributes[`${ICON_GAP}Unit`];
	// Item Padding
	const deskItemPadding = attributes[`${ITEM_PADDING}DeskRange`];
	const tabItemPadding = attributes[`${ITEM_PADDING}TabRange`];
	const mobItemPadding = attributes[`${ITEM_PADDING}MobRange`];
	const itemPaddingUnit = attributes[`${ITEM_PADDING}Unit`];
	// Item Border Radius
	const deskItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}DeskRange`];
	const tabItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}TabRange`];
	const mobItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}MobRange`];
	const itemBorderRadiusUnit = attributes[`${ITEM_BORDER_RADIUS}Unit`];

	const itemDeskStyles = {
		...(deskItemPadding !== undefined &&
			deskItemPadding !== '' && {
				padding: `${deskItemPadding}${itemPaddingUnit}`,
			}),
		...(deskItemBorderRadius !== undefined &&
			deskItemBorderRadius !== '' && {
				borderRadius: `${deskItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
		...(itemBgColor !== undefined &&
			itemBgColor !== '' && {
				background: `${itemBgColor}`,
			}),
	};
	const itemTabStyles = {
		...(tabItemPadding !== undefined &&
			tabItemPadding !== '' && {
				padding: `${tabItemPadding}${itemPaddingUnit}`,
			}),
		...(tabItemBorderRadius !== undefined &&
			tabItemBorderRadius !== '' && {
				borderRadius: `${tabItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};
	const itemMobStyles = {
		...(mobItemPadding !== undefined &&
			mobItemPadding !== '' && {
				padding: `${mobItemPadding}${itemPaddingUnit}`,
			}),
		...(mobItemBorderRadius !== undefined &&
			mobItemBorderRadius !== '' && {
				borderRadius: `${mobItemBorderRadius}${itemBorderRadiusUnit}`,
			}),
	};

	const deskStyles = `
	
		${
			deskCols !== undefined &&
			deskGap !== undefined &&
			deskRowGap !== undefined &&
			deskCols !== '' &&
			deskGap !== '' &&
			deskRowGap !== ''
				? `.${uniqueId} .block-editor-block-list__layout,
					.${uniqueId}.bdt-item {
						grid-template-columns: repeat(${deskCols}, 1fr);
						grid-column-gap: ${deskGap}${gapUnit};
						grid-row-gap: ${deskRowGap}${gapRowUnit};
					}`
				: ' '
		}
		${
			Object.keys(itemDeskStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-team-member-item{${convertToCss(
						itemDeskStyles
				  )}}`
				: ' '
		}
		
		.${uniqueId} .bdt-image-wrap,
		.${uniqueId} .bdt-info-wrap,
		.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share{
			text-align: ${textAlign};
			justify-content: ${textAlign};
		}
		${
			deskNameFont !== undefined && deskNameFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-name,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-name {
					font-size: ${deskNameFont}${nameFontUnit};
				}`
				: ' '
		}
		${
			titleColor !== undefined && titleColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-name,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-name {
				color: ${titleColor};
			}`
				: ' '
		}
		${
			designationColor !== undefined && designationColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-designation,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-designation {
				color: ${designationColor};
			}`
				: ' '
		}
		${
			deskDesgFont !== undefined && deskDesgFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-designation,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-designation {
				font-size: ${deskDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		${
			iconColor !== undefined && iconColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a svg {
				fill: ${iconColor};
			}`
				: ' '
		}
		${
			iconBgNormalColor !== undefined && iconBgNormalColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a {
				background: ${iconBgNormalColor};
			}`
				: ' '
		}
		${
			iconBgGradientColor !== undefined && iconBgGradientColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a {
				background: ${iconBgGradientColor};
			}`
				: ' '
		}
		${
			deskIconSize !== undefined && deskIconSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a svg {
				width: ${deskIconSize}${iconSizeUnit};
				height: ${deskIconSize}${iconSizeUnit};
			}`
				: ' '
		}
		${
			deskIconRoundSize !== undefined && deskIconRoundSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a {
				width: ${deskIconRoundSize}${iconRoundSizeUnit};
				height: ${deskIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${
			deskIconGap !== undefined && deskIconGap !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share {
				gap: ${deskIconGap}${iconGapUnit};
			}`
				: ' '
		}
		
		${
			contentBgColor !== undefined && contentBgColor !== ''
				? `.${uniqueId} .bdt-image-wrap .bdt-hover-content,
				   .${uniqueId} .bdt-info-wrap  {
				background: ${contentBgColor};
			}`
				: ''
		}
		${
			boxBgHoverColor !== undefined && boxBgHoverColor !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item:hover {
				background: ${boxBgHoverColor};
			}`
				: ''
		}
	`;
	const tabStyles = `
		
		${
			tabCols !== undefined &&
			tabGap !== undefined &&
			tabRowGap !== undefined &&
			tabCols !== '' &&
			tabGap !== '' &&
			tabRowGap !== ''
				? `.${uniqueId} .block-editor-block-list__layout,
					.${uniqueId}.bdt-item {
						grid-template-columns: repeat(${tabCols}, 1fr);
						grid-column-gap: ${tabGap}${gapUnit};
						grid-row-gap: ${tabRowGap}${gapRowUnit};
					}`
				: ' '
		}
		${
			Object.keys(itemTabStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-team-member-item{${convertToCss(
						itemTabStyles
				  )}}`
				: ' '
		}
		${
			tabNameFont !== undefined && tabNameFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-name,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-name {
					font-size: ${tabNameFont}${nameFontUnit};
				}`
				: ' '
		}
		${
			tabDesgFont !== undefined && tabDesgFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-designation,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-designation {
				font-size: ${tabDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		${
			tabIconSize !== undefined && tabIconSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a svg {
				width: ${tabIconSize}${iconSizeUnit};
				height: ${tabIconSize}${iconSizeUnit};
			}`
				: ' '
		}
		${
			tabIconRoundSize !== undefined && tabIconRoundSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a {
				width: ${tabIconRoundSize}${iconRoundSizeUnit};
				height: ${tabIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${
			tabIconGap !== undefined && tabIconGap !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share {
				gap: ${tabIconGap}${iconGapUnit};
			}`
				: ' '
		}
	`;
	const mobStyles = `
		${
			mobCols !== undefined &&
			mobGap !== undefined &&
			mobRowGap !== undefined &&
			mobCols !== '' &&
			mobGap !== '' &&
			mobRowGap !== ''
				? `.${uniqueId} .block-editor-block-list__layout,
					.${uniqueId}.bdt-item {
						grid-template-columns: repeat(${mobCols}, 1fr);
						grid-column-gap: ${mobGap}${gapUnit};
						grid-row-gap: ${mobRowGap}${gapRowUnit};
					}`
				: ' '
		}
		${
			Object.keys(itemMobStyles).length > 0
				? `.${uniqueId} .wp-block-bdt-team-member-item{${convertToCss(
						itemMobStyles
				  )}}`
				: ' '
		}
		${
			mobNameFont !== undefined && mobNameFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-name,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-name {
					font-size: ${mobNameFont}${nameFontUnit};
				}`
				: ' '
		}
		${
			mobDesgFont !== undefined && mobDesgFont !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-info-wrap .bdt-designation,
				   .${uniqueId} .wp-block-bdt-team-member-item .bdt-image-wrap .bdt-hover-content .bdt-designation {
				font-size: ${mobDesgFont}${desgFontUnit};
			}`
				: ' '
		}
		${
			mobIconSize !== undefined && mobIconSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a svg {
				width: ${mobIconSize}${iconSizeUnit};
				height: ${mobIconSize}${iconSizeUnit};
			}`
				: ' '
		}
		${
			mobIconRoundSize !== undefined && mobIconRoundSize !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share a {
				width: ${mobIconRoundSize}${iconRoundSizeUnit};
				height: ${mobIconRoundSize}${iconRoundSizeUnit};
			}`
				: ' '
		}
		${
			mobIconGap !== undefined && mobIconGap !== ''
				? `.${uniqueId} .wp-block-bdt-team-member-item .bdt-hover-content .bdt-social-share {
				gap: ${mobIconGap}${iconGapUnit};
			}`
				: ' '
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
				<InnerBlocks
					allowedBlocks={['bdt/team-member-item']}
					template={[
						['bdt/team-member-item'],
						['bdt/team-member-item'],
						['bdt/team-member-item'],
					]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</Fragment>
	);
}
