/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CardDivider } from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

import './editor.scss';
import aligns from '../../options/align';
const { ResRangleControl, ColorControl, Alignment } = Controls;
const {
	GRID_COLUMNS,
	GRID_GAP,
	ROW_GAP,
	NAME_FONT_SIZE,
	DESG_FONT_SIZE,
	ICON_SIZE,
	ICON_ROUND_SIZE,
	IMAGE_SIZE,
	ITEM_PADDING,
	ITEM_BORDER_RADIUS,
} = Constants;

import objAttributes from './attributes';
import TabPanelControl from '../../controls/tab-panel';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		style,
		titleColor,
		designationColor,
		contentBgColor,
		iconColor,
		boxBgColor,
		boxBgHoverColor,
		textAlign,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<InspectorControls>
			<Fragment>
				<PanelBody
					title={__('Layout Style', 'bdt-team-member')}
					initialOpen={true}
				>
					<SelectControl
						label={__('Select Layout Style', 'bdt-team-member')}
						value={style}
						options={[
							{
								label: __('Style One', 'bdt-team-member'),
								value: 'style-1',
							},
							{
								label: __('Style Two', 'bdt-team-member'),
								value: 'style-2',
							},
						]}
						onChange={(size) => setAttributes({ style: size })}
					/>
				</PanelBody>
				<PanelBody
					title={__('Column Settings', 'bdt-team-member')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Column Number', 'bdt-team-member')}
						controlName={GRID_COLUMNS}
						objAttrs={objAttrs}
						noUnits={true}
						min={1}
						max={4}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Column Gap', 'bdt-team-member')}
						controlName={GRID_GAP}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Row Gap', 'bdt-team-member')}
						controlName={ROW_GAP}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
				<PanelBody
					title={__('Item Box', 'bdt-team-member')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Padding', 'bdt-team-member')}
						controlName={ITEM_PADDING}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Border Radius', 'bdt-team-member')}
						controlName={ITEM_BORDER_RADIUS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<TabPanelControl
						normalComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Background Color',
										'bdt-team-member'
									)}
									color={boxBgColor}
									colorName="boxBgColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
						hoverComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Background Color',
										'bdt-team-member'
									)}
									color={boxBgHoverColor}
									colorName="boxBgHoverColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
					/>
				</PanelBody>
				<PanelBody
					title={__('Image Settings', 'bdt-team-member')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Image Size', 'bdt-team-member')}
						controlName={IMAGE_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={200}
					/>
				</PanelBody>
				<PanelBody
					title={__('Content', 'bdt-team-member')}
					initialOpen={false}
				>
					<ResRangleControl
						label={__('Name Font Size', 'bdt-team-member')}
						controlName={NAME_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<ResRangleControl
						label={__('Designation Font Size', 'bdt-team-member')}
						controlName={DESG_FONT_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={100}
					/>
					<CardDivider />
					<Alignment
						label={__('Alignment', 'bdt-team-member')}
						attribute={textAlign}
						attributeName="textAlign"
						setAttributes={setAttributes}
						options={aligns}
					/>
					<CardDivider />
					<ColorControl
						label={__('Title Color', 'bdt-team-member')}
						color={titleColor}
						colorName="titleColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__('Designation Color', 'bdt-team-member')}
						color={designationColor}
						colorName="designationColor"
						onChange={setAttributes}
					/>
					<ColorControl
						label={__(
							'Content Background Color',
							'bdt-team-member'
						)}
						color={contentBgColor}
						colorName="contentBgColor"
						onChange={setAttributes}
					/>
				</PanelBody>
				<PanelBody
					title={__('Icon', 'bdt-team-member')}
					initialOpen={false}
				>
					<ColorControl
						label={__('Color', 'bdt-team-member')}
						color={iconColor}
						colorName="iconColor"
						onChange={setAttributes}
					/>
					<ResRangleControl
						label={__('Icon Size', 'bdt-team-member')}
						controlName={ICON_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
					<ResRangleControl
						label={__('Icon Round Size', 'bdt-team-member')}
						controlName={ICON_ROUND_SIZE}
						objAttrs={objAttrs}
						noUnits={false}
						min={0}
						max={100}
					/>
				</PanelBody>
			</Fragment>
		</InspectorControls>
	);
};

export default Inspector;
