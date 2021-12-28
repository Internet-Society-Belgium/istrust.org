import {BrowserTitleBar} from '../components/BrowserTitleBar';

export const Hook: React.FC = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-10">
			<BrowserTitleBar typing />
		</div>
	);
};
