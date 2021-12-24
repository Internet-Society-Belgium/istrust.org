import {useCurrentFrame} from 'remotion';
import {default as Player} from 'lottie-react';

export const Lottie: React.FC<{
	data: any;
	loop?: boolean;
}> = ({data, loop}) => {
	let frame = useCurrentFrame();

	if (loop) {
		const {op} = data;
		frame = frame % op;
	}

	return (
		<Player
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={data}
		/>
	);
};
