import Lottie from 'lottie-react';
import {BrowserTitleBar} from '../components/BrowserTitleBar';

import hacker from '../../../public/animations/hacker.json';

export const Hook: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BrowserTitleBar typing />
			<Lottie animationData={hacker} />
		</div>
	);
};
