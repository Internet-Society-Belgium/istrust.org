import {BrowserTitleBar} from '../components/BrowserTitleBar';
import {Lottie} from '../../utils/Lottie';

import warning from '../../../public/animations/warning.json';

export const Hook: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BrowserTitleBar />
		</div>
	);
};

export const Warning: React.FC = () => {
	return (
		<div style={{zIndex: 110, transform: 'scale(2)'}}>
			<Lottie data={warning} />
		</div>
	);
};
