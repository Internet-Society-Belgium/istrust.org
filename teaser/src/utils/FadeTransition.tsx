import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const FadeTransition: React.FC<{
	type: 'in' | 'out';
	duration: number;
}> = ({type, duration, children}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const progress =
		type === 'in'
			? interpolate(frame, [0, duration], [0, 1], {
					extrapolateRight: 'clamp',
					extrapolateLeft: 'clamp',
			  })
			: interpolate(
					frame,
					[
						videoConfig.durationInFrames - duration,
						videoConfig.durationInFrames - 1,
					],
					[1, 0],
					{
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					}
			  );

	return (
		<div
			style={{
				opacity: progress,
			}}
		>
			{children}
		</div>
	);
};
