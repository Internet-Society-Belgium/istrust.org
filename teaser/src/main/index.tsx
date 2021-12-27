import {
	Sequence,
	useVideoConfig,
	Audio,
	AbsoluteFill,
	Series,
	IFrame,
} from 'remotion';
import {Title} from '../utils/Title';
import {Lottie} from '../utils/Lottie';

import music from '../../public/audios/music.mp3';
import test from '../../public/animations/test.json';
import {Transition} from '../utils/Transition';
import {FadeTransition} from '../utils/FadeTransition';
import {BrowserTitleBar} from './components/BrowserTitleBar';
import {FullCenter} from '../utils/FullCenter';

import './style.css';

import istrust_org_light from '../../public/images/screenshots/istrust_org-light.png';

export const Main: React.FC = () => {
	const videoConfig = useVideoConfig();

	return (
		<>
			<AbsoluteFill className="bg-background" />

			{/* <Audio src={music} volume={0.2} /> */}

			<Series>
				<Series.Sequence name="hook" durationInFrames={100}>
					<FullCenter>
						<FadeTransition type="out" duration={10}>
							<FadeTransition type="in" duration={10}>
								<Title text="isTrust" />
								{/* <Lottie data={test} loop={true} /> */}
							</FadeTransition>
						</FadeTransition>
					</FullCenter>
				</Series.Sequence>

				<Series.Sequence
					name="istrust.org vs is-trust.org"
					durationInFrames={100}
				>
					<FullCenter className="gap-20">
						<BrowserTitleBar
							url={new URL('https://www.istrust.org/')}
							extension={{
								screenshot: istrust_org_light,
							}}
						/>
						{/* <BrowserTitleBar url={new URL('https://www.is-trust.org/')} /> */}
					</FullCenter>
				</Series.Sequence>
			</Series>
		</>
	);
};
