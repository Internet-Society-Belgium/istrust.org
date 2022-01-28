import {Img, staticFile, useCurrentFrame} from 'remotion';
import {FadeTransition} from '../../utils/FadeTransition';

const icon = staticFile('/images/istrust/icon.svg');

export const IsTrust: React.FC = () => {
	const frame = useCurrentFrame();

	const text_frame = 50;

	return (
		<div className="flex flex-col gap-8">
			<Img src={icon} className="w-36 h-36" />
			{frame > text_frame && (
				<FadeTransition type="in" duration={text_frame + 20}>
					<h1 className="text-4xl text-center text-secondary font-semibold">
						isTrust
					</h1>
				</FadeTransition>
			)}
		</div>
	);
};
