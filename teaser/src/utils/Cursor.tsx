import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import cursor from '../../public/images/icons/cursor.svg';
import cursor_text from '../../public/images/icons/cursor_text.svg';
import {CursorAnimation} from '../types/Cursor';

export const Cursor: React.FC<{data: CursorAnimation}> = ({data}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	let pStep: number = 0;
	for (let step = 1; step < data.steps.length; step++) {
		if (data.steps[step].frame <= frame) {
			pStep = step;
		}
	}
	let nStep: number;
	if (pStep >= data.steps.length - 1) {
		nStep = pStep;
	} else {
		nStep = pStep + 1;
	}

	const previousStep = data.steps[pStep];
	const nextStep = data.steps[nStep];

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
			src={previousStep.type === 'text' ? cursor_text : cursor}
			style={{
				position: 'absolute',
				zIndex: 1000,
				left: `${x}px`,
				top: `${y}px`,
				width: '2rem',
				height: '2rem',
			}}
		/>
	);
};
