import {Img} from 'remotion';
import icon from '../../../public/images/istrust/icon.svg';

export const IsTrust: React.FC = () => {
	return (
		<div className="flex flex-col gap-8">
			<Img src={icon} className="w-36 h-36" />
			<h1 className="text-4xl text-center text-secondary font-semibold">
				isTrust
			</h1>
		</div>
	);
};
