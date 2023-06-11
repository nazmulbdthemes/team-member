/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	TextControl,
	PanelBody,
	Button,
	BaseControl,
	SelectControl,
	CardDivider,
} from '@wordpress/components';
import { IconPicker } from '../../controls';
const Inspector = ({ attributes, setAttributes }) => {
	const { teamMemberName, teamMemberDesg, photo, titleTag, icon } = attributes;
	// const addIcon = () => {
	// 	const newIcons = [...icons, '']; // Add an empty value for a new icon
	// 	setAttributes({ icons: newIcons });
	// };

	// const updateIcon = (index, value) => {
	// 	const newIcons = [...icons];
	// 	newIcons[index] = value;
	// 	setAttributes({ icons: newIcons });
	// };

	// const removeIcon = (index) => {
	// 	const newIcons = [...icons];
	// 	newIcons.splice(index, 1);
	// 	setAttributes({ icons: newIcons });
	// };
	return (
		<InspectorControls>
			<PanelBody
				title={__('Content', 'bdt-team-member')}
				initialOpen={true}
			>
				<TextControl
					label={__('Name', 'bdt-team-member')}
					value={teamMemberName}
					onChange={(value) =>
						setAttributes({
							teamMemberName: value,
						})
					}
					placeholder={__('Name…', 'bdt-team-member')}
				/>
				<SelectControl
					label={__('Select Tag', 'bdt-team-member')}
					options={[
						{ label: 'H1', value: 'h1' },
						{ label: 'H2', value: 'h2' },
						{ label: 'H3', value: 'h3' },
						{ label: 'H4', value: 'h4' },
						{ label: 'H5', value: 'h5' },
						{ label: 'H6', value: 'h6' },
						{ label: 'P', value: 'p' },
					]}
					onChange={(value) => {
						setAttributes({ titleTag: value });
					}}
					value={titleTag}
				/>
				<CardDivider />
				<TextControl
					label={__('Designation', 'bdt-team-member')}
					value={teamMemberDesg}
					onChange={(value) =>
						setAttributes({
							teamMemberDesg: value,
						})
					}
					placeholder={__('Designation…', 'bdt-team-member')}
				/>
				<CardDivider />
				<BaseControl
					id="reviewer-photo"
					label={__('Photo', 'bdt-team-member')}
				/>
				{photo ? (
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : teamMemberName}
						/>
					</div>
				) : (
					<MediaUpload
						onSelect={(media) =>
							setAttributes({
								photo: media,
							})
						}
						allowedTypes={['image']}
						value={photo && photo.id}
						render={({ open }) => (
							<Button
								onClick={open}
								variant="secondary"
								icon="cloud-upload"
							>
								{__('Upload Photo', 'bdt-team-member')}
							</Button>
						)}
					/>
				)}
				<IconPicker
					label={__('Select Icon', 'bdt-team-member')}
					selectedIcon={icon}
					changeIcon={(value) =>
						setAttributes({
							icon: value,
						})
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
