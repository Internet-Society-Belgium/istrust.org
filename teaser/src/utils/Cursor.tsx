import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import cursor from '../../public/images/icons/cursor.svg';
import {CursorAnimation, CursorAnimationStep} from '../types/Cursor';

export const Cursor: React.FC<CursorAnimation> = ({data}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	let previousStep = data.steps[0];
	let step: CursorAnimationStep | null = null;
	for (const s of data.steps) {
		if (s.frame <= frame) {
			if (step) {
				previousStep = step;
			}
			step = s;
		}
	}

	if (!step) return <></>;

	const progress = spring({
		frame: frame - step.frame,
		fps,
		config: {
			mass: 10,
			damping: 200,
		},
	});

	const x = interpolate(progress, [0, 1], [previousStep.x, step.x], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const y = interpolate(progress, [0, 1], [previousStep.y, step.y], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<Img
			src={cursor}
			style={{
				position: 'absolute',
				// zIndex: -10,
				left: `${x}px`,
				top: `${y}px`,
				width: '2rem',
				height: '2rem',
			}}
		/>
	);
};
