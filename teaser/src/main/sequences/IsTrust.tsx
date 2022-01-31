import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FadeTransition} from '../../utils/FadeTransition';

const icon = staticFile('/images/istrust/icon.svg');

export const IsTrust: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const transition_frame = 85;

	const spring_position = spring({
		frame: Math.max(0, frame - transition_frame),
		fps,
		config: {
			damping: 100,
			mass: 2,
			stiffness: 200,
		},
	});

	const spring_scale = spring({
		frame: Math.max(0, frame - transition_frame),
		fps,
		config: {
			damping: 100,
			mass: 2,
			stiffness: 200,
		},
	});

	const opacity = interpolate(
		frame,
		[transition_frame, transition_frame + 10],
		[1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const x = interpolate(spring_position, [0, 1], [0, 444], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const y = interpolate(spring_position, [0, 1], [0, -327], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const scale = interpolate(spring_scale, [0, 1], [1, 0.14], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<div className="flex flex-col gap-8">
			<Img
				src={icon}
				className="w-36 h-36"
				style={{
					transform: `translate(${x}px, ${y}px) scale(${scale})`,
				}}
			/>

			<h1
				className="text-4xl text-center text-secondary font-semibold"
				style={{opacity}}
			>
				isTrust
			</h1>
		</div>
	);
};
