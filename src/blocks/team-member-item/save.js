import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment } = wp.element;

import icons from '../../options/icons';
// save function
export default function save({ attributes }) {
	const {
		photo,
		teamMemberDesg,
		teamMemberName,
		titleTag,
		style,
		socialProfiles,
		newTab,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: style,
			})}
		>
			{photo && (
				<Fragment>
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : teamMemberName}
						/>
						<div className="bdt-hover-content">
							{teamMemberName && (
								<RichText.Content
									tagName={titleTag}
									className="bdt-name"
									value={teamMemberName}
								/>
							)}
							{teamMemberDesg && (
								<RichText.Content
									tagName="span"
									className="bdt-designation"
									value={teamMemberDesg}
								/>
							)}
							<div className="bdt-social-share">
								{socialProfiles.length > 0 &&
									socialProfiles.map((item, index) => {
										return (
											<a
												key={index}
												href={item.url}
												target={newTab && '_blank'}
												rel={
													newTab
														? 'noopener noreferrer'
														: 'noopener'
												}
											>
												{icons[item.icon]}
											</a>
										);
									})}
							</div>
						</div>
					</div>
					<div className="bdt-info-wrap">
						<RichText.Content
							tagName={titleTag}
							className="bdt-name"
							value={teamMemberName}
						/>
						<RichText.Content
							tagName="span"
							className="bdt-designation"
							value={teamMemberDesg}
						/>
					</div>
				</Fragment>
			)}
		</div>
	);
}
