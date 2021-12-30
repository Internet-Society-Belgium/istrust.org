import {useCurrentFrame} from 'remotion';
import {default as Player} from 'lottie-react';

export const Lottie: React.FC<{
	data: any;
	loop?: boolean;
}> = ({data, loop}) => {
	let frame = useCurrentFrame();

	if (!data.op) return <></>;

	const {op} = data;

	if (frame > op) {
		if (loop) {
			frame = frame % op;
		} else {
			frame = op - 1;
		}
	}

	return (
		<Player
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={JSON.parse(JSON.stringify(data))}
		/>
	);
};
