/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	BlockControls,
} from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import icons from '../../options/icons';

export default function Edit(props) {
	const { attributes, setAttributes, context } = props;
	const { style, photo, teamMemberDesg, teamMemberName, titleTag, icon } = attributes;

	setAttributes({
		style: context['bdt/style'],
	});

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label={__(
										'Edit Photo',
										'bdt-team-member'
									)}
									icon="edit"
								/>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div
				{...useBlockProps({
					className: style,
				})}
			>
				<div className="bdt-container">
					<div className="bdt-advanced-member-wrap">
						<div className="bdt-item">
							{photo ? (
								<Fragment>
									<div className="bdt-image-wrap">
										<img
											className="bdt-img"
											src={photo.url}
											alt={
												photo.alt
													? photo.alt
													: teamMemberName
											}
										/>
										<div className="bdt-hover-content">
											<div className="bdt-name">
												<span>{teamMemberName}</span>
											</div>
											<div className="bdt-designation">
												{teamMemberDesg}
											</div>
											<div className="bdt-social-share"></div>
										</div>
									</div>
								</Fragment>
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
											{__(
												'Upload Photo',
												'bdt-team-member'
											)}
										</Button>
									)}
								/>
							)}
							<div className="bdt-content">
								<RichText
									tagName={titleTag}
									className="bdt-name"
									value={teamMemberName}
									onChange={(value) =>
										setAttributes({ teamMemberName: value })
									}
									placeholder={__(
										'Name…',
										'bdt-team-member'
									)}
								/>
								<RichText
									tagName="span"
									className="bdt-designation"
									value={teamMemberDesg}
									onChange={(value) =>
										setAttributes({ teamMemberDesg: value })
									}
									placeholder={__(
										'Designation…',
										'bdt-team-member'
									)}
								/>
								<span>{icons[icon]}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
