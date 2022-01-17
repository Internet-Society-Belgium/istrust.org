import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import world from '../../../public/images/icons/world.svg';
import pulse from '../../../public/animations/pulse.json';

import iconfill from '../../../public/images/istrust/icon-fill.svg';
import {FullCenter} from '../../utils/FullCenter';
import {Lottie} from '../../utils/Lottie';

export const World: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const frame_animation = 50;
	const frame_logo = 120;
	const frame_text = 160;

	const points = [
		{
			start: {
				x: 527,
				y: 385,
			},
			end: {
				x: 936.5,
				y: 408,
			},
		},
		{
			start: {
				x: 974.5,
				y: 401,
			},
			end: {
				x: 845,
				y: 440,
			},
		},
		{
			start: {
				x: 898,
				y: 370,
			},
			end: {
				x: 1028,
				y: 440,
			},
		},
		{
			start: {
				x: 296,
				y: 509,
			},
			end: {
				x: 847,
				y: 510,
			},
		},
		{
			start: {
				x: 974,
				y: 246,
			},
			end: {
				x: 1027,
				y: 510,
			},
		},
		{
			start: {
				x: 1007,
				y: 447,
			},
			end: {
				x: 880,
				y: 575,
			},
		},
		{
			start: {
				x: 1638,
				y: 862,
			},
			end: {
				x: 993,
				y: 575,
			},
		},
		{
			start: {
				x: 852,
				y: 324,
			},
			end: {
				x: 936.5,
				y: 620,
			},
		},
	];

	const spring_positions = spring({
		frame: Math.max(0, frame - frame_animation),
		fps,
		config: {
			mass: 8,
			damping: 200,
		},
	});

	const spring_text = spring({
		frame: Math.max(0, frame - frame_text),
		fps,
		config: {
			damping: 100,
			mass: 2,
			stiffness: 200,
		},
	});

	return (
		<div>
			<div
				style={{
					opacity: interpolate(
						frame,
						[frame_animation, frame_animation + 20],
						[1, 0],
						{
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						}
					),
				}}
			>
				<Img
					src={world}
					style={{
						width: '1920px',
						height: '1080px',
					}}
				/>
			</div>
			{frame < frame_logo + 20 &&
				points.map((point) => (
					<div
						className="absolute"
						style={{
							left: `${interpolate(
								spring_positions,
								[0, 1],
								[point.start.x, point.end.x],
								{
									extrapolateRight: 'clamp',
									extrapolateLeft: 'clamp',
								}
							)}px`,
							top: `${interpolate(
								spring_positions,
								[0, 1],
								[point.start.y, point.end.y],
								{
									extrapolateRight: 'clamp',
									extrapolateLeft: 'clamp',
								}
							)}px`,
						}}
					>
						<div className="w-6 h-6">
							<Lottie data={pulse} loop />
						</div>
					</div>
				))}
			{frame > frame_logo && (
				<FullCenter className="absolute">
					<div
						className="absolute"
						style={{
							opacity: interpolate(
								frame,
								[frame_text + 3, frame_text + 20],
								[0, 1],
								{
									extrapolateLeft: 'clamp',
									extrapolateRight: 'clamp',
								}
							),
							transform: `translateX(${interpolate(
								spring_text,
								[0, 1],
								[0, 200],
								{
									extrapolateLeft: 'clamp',
									extrapolateRight: 'clamp',
								}
							)}px)`,
						}}
					>
						<h1 className="text-4xl text-center text-secondary font-semibold">
							istrust.org
						</h1>
					</div>
					<div className="flex justify-center items-center">
						<Img
							src={iconfill}
							className="w-36 h-36"
							style={{
								opacity: interpolate(
									frame,
									[frame_logo, frame_logo + 20],
									[0, 1],
									{
										extrapolateLeft: 'clamp',
										extrapolateRight: 'clamp',
									}
								),
								transform: `translateX(${interpolate(
									spring_text,
									[0, 1],
									[0, -200],
									{
										extrapolateLeft: 'clamp',
										extrapolateRight: 'clamp',
									}
								)}px)`,
							}}
						/>
					</div>
				</FullCenter>
			)}
		</div>
	);
};
