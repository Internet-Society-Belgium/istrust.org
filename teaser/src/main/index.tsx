import {Audio, AbsoluteFill, Series} from 'remotion';
import {FullCenter} from '../utils/FullCenter';

import './style.css';

import {Informations} from './sequences/Informations';
import {InternetSociety} from './sequences/InternetSociety';
import {Demo} from './sequences/Demo';
import {Scam} from './sequences/Scam';
import {IsTrust} from './sequences/IsTrust';
import {Real} from './sequences/Real';
import {Hook} from './sequences/Hook';
import {Values} from './sequences/Values';

export const Main: React.FC = () => {
	return (
		<>
			<AbsoluteFill className="bg-background" />

			{/* <Audio src={music} volume={0.2} /> */}

			<Series>
				<Series.Sequence name="hook" durationInFrames={100}>
					<FullCenter>
						<Hook />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence
					name="istrust.org or is-trust.org"
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
			</Series>
		</>
	);
};
