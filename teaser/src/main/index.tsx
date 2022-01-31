import {
	Audio,
	AbsoluteFill,
	Series,
	Sequence,
	useVideoConfig,
	staticFile,
} from 'remotion';
import {FullCenter} from '../utils/FullCenter';

import './style.css';

import {Informations} from './sequences/Informations';
import {InternetSociety} from './sequences/InternetSociety';
import {Demo} from './sequences/Demo';
import {Scam} from './sequences/Scam';
import {IsTrust} from './sequences/IsTrust';
import {Real} from './sequences/Real';
import {Hook, Warning} from './sequences/Hook';
import {Values} from './sequences/Values';
import {World} from './sequences/World';

import {Cursor} from '../utils/Cursor';

import cursor_animation from '../../public/animations/cursor.json';
import {Transition} from '../utils/Transition';
import {FadeTransition} from '../utils/FadeTransition';

const music = staticFile('/audios/music.mp3');
const voice_hook = staticFile('/voices/hook.mp3');
const voice_real_0 = staticFile('/voices/real_0.mp3');
const voice_real_1 = staticFile('/voices/real_1.mp3');
const voice_scam = staticFile('/voices/scam.mp3');
const voice_istrust = staticFile('/voices/istrust.mp3');
const voice_demo_0 = staticFile('/voices/demo_0.mp3');
const voice_demo_1 = staticFile('/voices/demo_1.mp3');
const voice_demo_2 = staticFile('/voices/demo_2.mp3');

export const Main: React.FC = () => {
	const videoConfig = useVideoConfig();

	const voice_volume = 1;
	const music_volume = 0.1;

	return (
		<>
			<Sequence
				name="background"
				from={0}
				durationInFrames={videoConfig.durationInFrames}
			>
				<AbsoluteFill className="bg-background" />
				<Audio src={music} volume={music_volume} />
			</Sequence>

			<Sequence
				name="cursor"
				from={0}
				durationInFrames={videoConfig.durationInFrames}
			>
				<Cursor animation={cursor_animation} />
			</Sequence>

			<Series>
				<Series.Sequence name="hook" durationInFrames={105}>
					<FullCenter>
						<Hook />
					</FullCenter>

					<Sequence from={50}>
						<FullCenter>
							<Warning />
						</FullCenter>
					</Sequence>

					<Sequence from={10}>
						<Audio src={voice_hook} volume={voice_volume} />
					</Sequence>
				</Series.Sequence>

				<Series.Sequence
					name="istrust.com or istrust.org"
					durationInFrames={180}
				>
					<FullCenter>
						<Real />
					</FullCenter>

					<Sequence from={10}>
						<Audio src={voice_real_0} volume={voice_volume} />
					</Sequence>
					<Sequence from={120}>
						<Audio src={voice_real_1} volume={voice_volume} />
					</Sequence>
				</Series.Sequence>

				<Series.Sequence name="scam.com" durationInFrames={180}>
					<FullCenter>
						<Scam />
					</FullCenter>

					<Sequence from={10}>
						<Audio src={voice_scam} volume={voice_volume} />
					</Sequence>
				</Series.Sequence>

				<Series.Sequence name="isTrust" durationInFrames={110}>
					<FullCenter>
						<IsTrust />
					</FullCenter>

					<Sequence from={10}>
						<Audio src={voice_istrust} volume={voice_volume} />
					</Sequence>
				</Series.Sequence>

				<Series.Sequence name="demo" durationInFrames={210}>
					<FullCenter>
						<Demo />
					</FullCenter>

					<Sequence from={10}>
						<Audio src={voice_demo_0} volume={voice_volume} />
					</Sequence>
					<Sequence from={60}>
						<Audio src={voice_demo_1} volume={voice_volume} />
					</Sequence>
					<Sequence from={130}>
						<Audio src={voice_demo_2} volume={voice_volume} />
					</Sequence>
				</Series.Sequence>

				<Series.Sequence name="informations" durationInFrames={100}>
					<FullCenter>
						<Informations />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="Internet Society" durationInFrames={100}>
					<FullCenter>
						<InternetSociety />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="values" durationInFrames={100}>
					<FullCenter>
						<Values />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="world" durationInFrames={300}>
					<FullCenter>
						<World />
					</FullCenter>
				</Series.Sequence>
			</Series>
		</>
	);
};
