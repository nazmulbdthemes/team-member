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

const Inspector = ({ attributes, setAttributes }) => {
	const { clientName, clientDesg, photo, titleTag } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={__('Content', 'bdt-review-blocks')}
				initialOpen={true}
			>
				<TextControl
					label={__('Name', 'bdt-review-blocks')}
					value={clientName}
					onChange={(value) =>
						setAttributes({
							clientName: value,
						})
					}
					placeholder={__('Name…', 'bdt-review-blocks')}
				/>
				<SelectControl
					label={__('Select Tag', 'bdt-review-blocks')}
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
					label={__('Designation', 'bdt-review-blocks')}
					value={clientDesg}
					onChange={(value) =>
						setAttributes({
							clientDesg: value,
						})
					}
					placeholder={__('Designation…', 'bdt-review-blocks')}
				/>
				<CardDivider />
				<BaseControl
					id="reviewer-photo"
					label={__('Photo', 'bdt-review-blocks')}
				/>
				{photo ? (
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : clientName}
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
								{__('Upload Photo', 'bdt-review-blocks')}
							</Button>
						)}
					/>
				)}
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
