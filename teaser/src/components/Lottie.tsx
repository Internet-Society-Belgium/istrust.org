import {useCurrentFrame} from 'remotion';
import {default as Player} from 'lottie-react';

export const Lottie: React.FC<{
	data: any;
}> = ({data}) => {
	const frame = useCurrentFrame();

	return (
		<Player
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={data}
		/>
	);
};
