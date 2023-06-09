/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

// save function
export default function save({ attributes }) {
	const { photo, clientDesg, clientName, titleTag, style } = attributes;
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
						alt={photo.alt ? photo.alt : clientName}
					/>
				</div>
			)}
			<div className="bdt-content">
				{clientName && (
					<RichText.Content
						tagName={titleTag}
						className="bdt-name"
						value={clientName}
					/>
				)}
				{clientDesg && (
					<RichText.Content
						tagName="span"
						className="bdt-designation"
						value={clientDesg}
					/>
				)}
			</div>
		</div>
	);
}
