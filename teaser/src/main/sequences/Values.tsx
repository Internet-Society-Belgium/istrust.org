import {Img, useCurrentFrame} from 'remotion';

import privacy from '../../../public/images/icons/chat-private-line.svg';
import money from '../../../public/images/icons/money-dollar-circle-line.svg';
import github from '../../../public/images/icons/github.svg';
import free from '../../../public/images/icons/creative-commons-nc-line.svg';

export const Values: React.FC = () => {
	const frame = useCurrentFrame();

	const frame_github = 50;
	const frame_free = 80;

	return (
		<div className="flex justify-center items-center gap-20">
			<Img src={frame < frame_github ? privacy : github} className="w-32" />
			<Img src={frame < frame_free ? money : free} className="w-32" />
		</div>
	);
};
