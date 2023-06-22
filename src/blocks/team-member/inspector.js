/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	CardDivider,
	GradientPicker,
} from '@wordpress/components';
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
	ICON_GAP,
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
		iconBgNormalColor,
		iconBgGradientColor,
		textAlign,
		itemBgColor
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
					<ColorControl
						label={__('Background Color', 'bdt-team-member')}
						color={itemBgColor}
						colorName="itemBgColor"
						onChange={setAttributes}
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
					title={__('Social Profiles', 'bdt-team-member')}
					initialOpen={false}
				>
					<ColorControl
						label={__('Icon Color', 'bdt-team-member')}
						color={iconColor}
						colorName="iconColor"
						onChange={setAttributes}
					/>
					<p className="bdt-icon-color-title">
						{__('Icon Background Color', 'bdt-team-member')}
					</p>
					<TabPanelControl
						normalComponents={
							<Fragment>
								<ColorControl
									label={__(
										'Normal Background',
										'bdt-team-member'
									)}
									color={iconBgNormalColor}
									colorName="iconBgNormalColor"
									onChange={setAttributes}
								/>
							</Fragment>
						}
						hoverComponents={
							<Fragment>
								<GradientPicker
									value={iconBgGradientColor}
									onChange={(value) =>
										setAttributes({
											iconBgGradientColor: value,
										})
									}
									gradients={[
										{
											name: 'Vivid cyan blue to vivid purple',
											gradient:
												'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
											slug: 'vivid-cyan-blue-to-vivid-purple',
										},
										{
											name: 'Light green cyan to vivid green cyan',
											gradient:
												'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
											slug: 'light-green-cyan-to-vivid-green-cyan',
										},
										{
											name: 'Luminous vivid amber to luminous vivid orange',
											gradient:
												'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
											slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
										},
										{
											name: 'Luminous vivid orange to vivid red',
											gradient:
												'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
											slug: 'luminous-vivid-orange-to-vivid-red',
										},
										{
											name: 'Very light gray to cyan bluish gray',
											gradient:
												'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
											slug: 'very-light-gray-to-cyan-bluish-gray',
										},
										{
											name: 'Cool to warm spectrum',
											gradient:
												'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
											slug: 'cool-to-warm-spectrum',
										},
									]}
								/>
							</Fragment>
						}
					/>
					<CardDivider />
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
					<ResRangleControl
						label={__('Icon Gap', 'bdt-team-member')}
						controlName={ICON_GAP}
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
