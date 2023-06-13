
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment } = wp.element;

import icons from '../../options/icons';
// save function
export default function save({ attributes }) {
	const { photo, teamMemberDesg, teamMemberName, titleTag, style, socialIcon, url, newTab } =
		attributes;
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
								<a href={url} target={newTab}>{icons[socialIcon]}</a>
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
