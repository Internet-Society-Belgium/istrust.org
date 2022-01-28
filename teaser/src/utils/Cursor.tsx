import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {CursorAnimation} from '../types/Cursor';

const cursor = staticFile('/images/icons/cursor.svg');
const cursor_text = staticFile('/images/icons/cursor_text.svg');

export const Cursor: React.FC<{animation: CursorAnimation}> = ({animation}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	let pStep: number = 0;
	for (let step = 1; step < animation.steps.length; step++) {
		if (animation.steps[step].frame <= frame) {
			pStep = step;
		}
	}
	let nStep: number;
	if (pStep >= animation.steps.length - 1) {
		nStep = pStep;
	} else {
		nStep = pStep + 1;
	}

	const previousStep = animation.steps[pStep];
	const nextStep = animation.steps[nStep];

	const progress = spring({
		frame: Math.max(0, frame - previousStep.frame),
		fps,
		config: {
			mass: nextStep.slowness || 10,
			damping: 200,
		},
	});

	const x = interpolate(progress, [0, 1], [previousStep.x, nextStep.x], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const y = interpolate(progress, [0, 1], [previousStep.y, nextStep.y], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<Img
			src={previousStep?.type === 'text' ? cursor_text : cursor}
			style={{
				position: 'absolute',
				zIndex: 100,
				left: `${x}px`,
				top: `${y}px`,
				width: '2rem',
				height: '2rem',
				visibility: previousStep?.type === 'hidden' ? 'hidden' : 'visible',
			}}
		/>
	);
};
