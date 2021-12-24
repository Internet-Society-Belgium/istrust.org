import {Sequence, useVideoConfig, Audio, AbsoluteFill} from 'remotion';
import {Title} from '../components/Title';
import {FullCenter} from '../components/FullCenter';
import {Lottie} from '../components/Lottie';

import audio from '../../public/audios/jazzy-abstract-beat.mp3';
import test from '../../public/animations/test.json';

export const Main: React.FC = () => {
	const videoConfig = useVideoConfig();

	return (
		<>
			<Sequence
				name="background"
				from={0}
				durationInFrames={videoConfig.durationInFrames}
			>
				<AbsoluteFill className="bg-background" />
				<Audio src={audio} />
			</Sequence>

			<Sequence name="introducing isTrust" from={10} durationInFrames={100}>
				<FullCenter>
					<Lottie data={test} loop={true} />
				</FullCenter>
			</Sequence>

			<Sequence
				name="istrust.org or is-trust.org"
				from={0}
				durationInFrames={100}
			>
				<></>
			</Sequence>

			<Sequence
				name="xn--80ak6aa92e.com or apple.com"
				from={0}
				durationInFrames={100}
			>
				<></>
			</Sequence>

			<Sequence name="light -> dark" from={0} durationInFrames={100}>
				<></>
			</Sequence>
		</>
	);
};
