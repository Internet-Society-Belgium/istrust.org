import {BrowserTitleBar} from '../components/BrowserTitleBar';

export const Scam: React.FC = () => {
	return (
		<BrowserTitleBar url={new URL('https://www.scam.com/')} extension={{}} />
	);
};
