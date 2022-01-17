import {BrowserTitleBar} from '../components/BrowserTitleBar';

export const Real: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BrowserTitleBar url={new URL('https://www.istrust.com/')} />
			<h3 className="text-2xl text-secondary-light">OR</h3>
			<BrowserTitleBar url={new URL('https://www.istrust.org/')} />
		</div>
	);
};
