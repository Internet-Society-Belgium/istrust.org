import {staticFile, useCurrentFrame} from 'remotion';
import {BrowserTitleBar} from '../components/BrowserTitleBar';

const istrust_org = staticFile('/images/screenshots/istrust_org.png');
const istrust_org_tooltip = staticFile(
	'/images/screenshots/istrust_org-tooltip.png'
);

export const Demo: React.FC = () => {
	const frame = useCurrentFrame();
	const frame_screenshot = 50;
	const frame_tooltip = 75;

	return (
		<div>
			<BrowserTitleBar
				url={new URL('https://www.istrust.org/')}
				extension={
					frame > frame_tooltip
						? {score: 'warning', screenshot: {src: istrust_org_tooltip}}
						: frame > frame_screenshot
						? {score: 'warning', screenshot: {src: istrust_org}}
						: {screenshot: {src: istrust_org, hidden: true}}
				}
			/>
		</div>
	);
};
