/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

// save function
export default function save({ attributes }) {
	const { photo, teamMemberDesg, teamMemberName, titleTag, style } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: style,
			})}
		>
			{photo && (
				<div className="bdt-image-wrap">
					<img
						className="bdt-img"
						src={photo.url}
						alt={photo.alt ? photo.alt : teamMemberName}
					/>
				</div>
			)}
			<div className="bdt-content">
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
			</div>
		</div>
	);
}
