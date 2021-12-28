import {
	useVideoConfig,
	Audio,
	AbsoluteFill,
	Series,
	Img,
	Sequence,
} from 'remotion';
import {Lottie} from '../utils/Lottie';

import music from '../../public/audios/music.mp3';
import test from '../../public/animations/test.json';
import {Transition} from '../utils/Transition';
import {FadeTransition} from '../utils/FadeTransition';
import {BrowserTitleBar} from './components/BrowserTitleBar';
import {FullCenter} from '../utils/FullCenter';

import './style.css';

import icon from '../../public/images/istrust/icon.svg';

import {Informations} from './sequences/Informations';
import {InternetSociety} from './sequences/InternetSociety';
import {Demo} from './sequences/Demo';

export const Main: React.FC = () => {
	const videoConfig = useVideoConfig();

	return (
		<>
			<AbsoluteFill className="bg-background" />

			{/* <Audio src={music} volume={0.2} /> */}

			<Series>
				<Series.Sequence name="hook" durationInFrames={100}>
					<FullCenter>
						<Lottie data={test} loop={true} />
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence
					name="istrust.org or is-trust.org"
					durationInFrames={100}
				>
					<FullCenter className="gap-10">
						<BrowserTitleBar
							url={new URL('https://www.istrust.org/')}
							extension={{}}
						/>
						<div className="text-2xl text-secondary-light">OR</div>
						<BrowserTitleBar
							url={new URL('https://www.is-trust.org/')}
							extension={{}}
						/>
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="fakesite.com" durationInFrames={100}>
					<FullCenter>
						<BrowserTitleBar
							url={new URL('https://www.fakesite.com/')}
							extension={{}}
						/>
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence name="isTrust" durationInFrames={50}>
					<FullCenter className="gap-8">
						<Img src={icon} className="w-36 h-36" />
						<div className="text-4xl text-center text-secondary font-semibold">
							isTrust
						</div>
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
			</Series>
		</>
	);
};
