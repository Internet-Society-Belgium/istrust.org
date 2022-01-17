import {Audio, AbsoluteFill, Series, Sequence, useVideoConfig} from 'remotion';
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
import {Cursor} from '../utils/Cursor';

import cursor_animation from '../../public/animations/cursor.json';
import music from '../../public/audios/music.mp3';
import {World} from './sequences/World';

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
				<Audio src={music} volume={0.2} />
			</Sequence>

			<Sequence
				name="cursor"
				from={0}
				durationInFrames={videoConfig.durationInFrames}
			>
				<Cursor data={cursor_animation} />
			</Sequence>

			<Series>
				<Series.Sequence name="hook" durationInFrames={100}>
					<FullCenter>
						<Hook />
					</FullCenter>

					<Sequence from={50}>
						<FullCenter>
							<Warning />
						</FullCenter>
					</Sequence>
				</Series.Sequence>

				<Series.Sequence
					name="istrust.com or istrust.org"
					durationInFrames={100}
				>
					<FullCenter>
						<Real />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="scam.com" durationInFrames={100}>
					<FullCenter>
						<Scam />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="isTrust" durationInFrames={50}>
					<FullCenter>
						<IsTrust />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="demo" durationInFrames={120}>
					<FullCenter>
						<Demo />
					</FullCenter>
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
