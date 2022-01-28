import {Img, staticFile, useCurrentFrame} from 'remotion';

const privacy = staticFile('/images/icons/privacy.png');
const money = staticFile('/images/icons/money.png');
const github = staticFile('/images/icons/github.png');
const free = staticFile('/images/icons/free.png');

export const Values: React.FC = () => {
	const frame = useCurrentFrame();

	const frame_github = 50;
	const frame_free = 80;

	return (
		<div className="flex justify-center items-center gap-20">
			<Img
				src={frame < frame_github ? privacy : github}
				className="w-32 h-32"
			/>
			<Img src={frame < frame_free ? money : free} className="w-32 h-32" />
		</div>
	);
};
