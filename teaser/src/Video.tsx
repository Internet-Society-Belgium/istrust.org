import {Composition} from 'remotion';
import {Main} from './main';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="1920x1080"
				component={Main}
				durationInFrames={1000}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
