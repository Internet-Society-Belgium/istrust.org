import {useCurrentFrame} from 'remotion';

export const Cursor: React.FC<{
	data: {
		steps: {frame: number; x: number; y: number}[];
	};
}> = ({data}) => {
	const frame = useCurrentFrame();

	let step: {frame: number; x: number; y: number} | null = null;

	for (const s of data.steps) {
		if (s.frame <= frame) {
			step = s;
		}
	}

	if (!step) return <></>;

	const x = step.x;
	const y = step.y;

	return (
		<>
			<div className="absolute left-0 top-0">{`x: ${x} y: ${y}`}</div>
			<div
				style={{
					position: 'absolute',
					zIndex: 10,
					left: `${x}px`,
					top: `${y}px`,
				}}
			>
				A
			</div>
		</>
	);
};
