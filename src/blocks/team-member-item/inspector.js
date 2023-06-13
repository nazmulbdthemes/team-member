
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
	ToggleControl
} from '@wordpress/components';
import { IconPicker } from '../../controls';
const Inspector = ({ attributes, setAttributes }) => {
	const { teamMemberName, teamMemberDesg, photo, titleTag, socialIcon, url, newTab} = attributes;
	
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
					selectedIcon={socialIcon}
					changeIcon={(value) =>
						setAttributes({
							socialIcon: value,
						})
					}
				/>
				<TextControl
					label={__('Icon Link', 'bdt-team-member')}
					value={url}
					onChange={(value) => setAttributes({ url: value })}
				/>
				<ToggleControl
					label={__('Open in a new tab', 'bdt-team-member')}
					checked={newTab}
					onChange={() => setAttributes({
						newTab: !newTab,
					})}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
