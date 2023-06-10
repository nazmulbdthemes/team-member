// Import Icon
import { Dashicon } from '@wordpress/components';
import icons from '../../options/icons';
import './style.scss';
import { useState } from '@wordpress/element';

const IconPicker = ({ label, selectedIcon, changeIcon }) => {
	const [showIcons, setShowIcons] = useState(false);
	return (
		<div className="bdt-icon-picker">
			<p className="bdt-label">{label}</p>
			<button
				className="bdt-icon-header"
				onClick={() => setShowIcons(true)}
			>
				<span className="bdt-selected-icon">{icons[selectedIcon]}</span>
				<span className="bdt-open-icon">
					<Dashicon icon={showIcons ? 'minus' : 'plus'} />
				</span>
			</button>
			{showIcons && (
				<div className="icon-list">
					{Object.keys(icons).map((icon, index) => {
						return (
							<button
								className={`icon ${
									icon === selectedIcon ? 'active-icon' : ''
								}`}
								key={index}
								onClick={() => {
									changeIcon(icon);
									setShowIcons(false);
								}}
							>
								{icons[icon]}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default IconPicker;
