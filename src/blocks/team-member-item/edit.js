import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaPlaceholder,
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
	const {
		style,
		photo,
		teamMemberDesg,
		teamMemberName,
		titleTag,
		socialProfiles,
		newTab,
	} = attributes;

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
									label={__('Edit Photo', 'bdt-team-member')}
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
											src={photo.url}
											alt={
												photo.alt
													? photo.alt
													: teamMemberName
											}
										/>
										<div className="bdt-hover-content">
											<RichText
												tagName={titleTag}
												className="bdt-name"
												value={teamMemberName}
												onChange={(value) =>
													setAttributes({
														teamMemberName: value,
													})
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
													setAttributes({
														teamMemberDesg: value,
													})
												}
												placeholder={__(
													'Designation…',
													'bdt-team-member'
												)}
											/>
											<div className="bdt-social-share">
												{socialProfiles.length > 0 &&
													socialProfiles.map(
														(item, index) => {
															return (
																<a
																	key={index}
																	href={
																		item.url
																	}
																	target={
																		newTab &&
																		'_blank'
																	}
																	rel={
																		newTab
																			? 'noopener noreferrer'
																			: 'noopener'
																	}
																>
																	{
																		icons[
																			item
																				.icon
																		]
																	}
																</a>
															);
														}
													)}
											</div>
										</div>
									</div>
								</Fragment>
							) : (
								<MediaPlaceholder
									onSelect={(media) =>
										setAttributes({ photo: media })
									}
									allowedTypes={['image']}
									multiple={false}
									labels={{
										title: __(
											'Upload Photo',
											'bdt-team-member'
										),
									}}
								/>
								// <MediaUpload
								// 	onSelect={(media) =>
								// 		setAttributes({
								// 			photo: media,
								// 		})
								// 	}
								// 	allowedTypes={['image']}
								// 	value={photo && photo.id}
								// 	render={({ open }) => (
								// 		<Button
								// 			onClick={open}
								// 			variant="secondary"
								// 			icon="cloud-upload"
								// 		>
								// 			{__(
								// 				'Upload Photo',
								// 				'bdt-team-member'
								// 			)}
								// 		</Button>
								// 	)}
								// />
							)}
							<div className="bdt-info-wrap">
								<RichText
									tagName={titleTag}
									className="bdt-name"
									value={teamMemberName}
									onChange={(value) =>
										setAttributes({ teamMemberName: value })
									}
									placeholder={__('Name…', 'bdt-team-member')}
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
