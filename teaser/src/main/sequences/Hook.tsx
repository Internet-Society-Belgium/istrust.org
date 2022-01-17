import {BrowserTitleBar} from '../components/BrowserTitleBar';

import warning from '../../../public/animations/warning.json';
import {Lottie} from '../../utils/Lottie';

export const Hook: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BrowserTitleBar typing />
		</div>
	);
};

export const Warning: React.FC = () => {
	return (
		<div style={{zIndex: 110}}>
			<Lottie data={warning} />
		</div>
	);
};
