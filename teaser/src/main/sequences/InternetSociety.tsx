import {Img, staticFile, useCurrentFrame} from 'remotion';

const isoc_logo = staticFile('/images/isoc/logo.png');
const isoc_internet_society = staticFile('/images/isoc/internet_society.png');
const isoc_belgium_chapter = staticFile('/images/isoc/belgium_chapter.png');

export const InternetSociety: React.FC = () => {
	const frame = useCurrentFrame();
	const frame_isoc_global = 50;

	return (
		<div className="w-1/2 flex gap-4">
			<div className="flex justify-center items-center">
				<Img src={isoc_logo} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<Img src={isoc_internet_society} />
				{frame < frame_isoc_global ? (
					<Img src={isoc_belgium_chapter} />
				) : (
					<div className="flex gap-1 text-secondary-light font-semibold">
						<span>30 years</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M18 12H6"
							/>
						</svg>

						<span>70,000+ members</span>
					</div>
				)}
			</div>
		</div>
	);
};
