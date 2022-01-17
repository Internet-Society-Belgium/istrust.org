import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

import world from '../../../public/images/icons/world.svg';
import pulse from '../../../public/animations/pulse.json';

import icon from '../../../public/images/istrust/icon.svg';
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
				x: 540,
				y: 380,
			},
			end: {
				x: 936.5,
				y: 408,
			},
		},
		{
			start: {
				x: 980,
				y: 400,
			},
			end: {
				x: 845,
				y: 440,
			},
		},

		{
			start: {
				x: 900,
				y: 380,
			},
			end: {
				x: 1028,
				y: 440,
			},
		},
		{
			start: {
				x: 296.48,
				y: 508.48,
			},
			end: {
				x: 847,
				y: 510,
			},
		},
		{
			start: {
				x: 980,
				y: 250,
			},
			end: {
				x: 1027,
				y: 510,
			},
		},
		{
			start: {
				x: 1010,
				y: 450,
			},
			end: {
				x: 880,
				y: 575,
			},
		},
		{
			start: {
				x: 300,
				y: 100,
			},
			end: {
				x: 993,
				y: 575,
			},
		},
		{
			start: {
				x: 850,
				y: 350,
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
					<div className="flex justify-center items-center">
						<Img
							src={icon}
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
							}}
						/>
					</div>
				</FullCenter>
			)}
		</div>
	);
};
