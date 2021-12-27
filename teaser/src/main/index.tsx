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

import icon from '../../public/images/icons/icon.svg';
import istrust_org from '../../public/images/screenshots/istrust_org.png';
import istrust_org_tooltip from '../../public/images/screenshots/istrust_org-tooltip.png';

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
					name="istrust.org vs is-trust.org"
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

				<Series.Sequence name="demo" durationInFrames={75}>
					<Sequence from={0} durationInFrames={25}>
						<FullCenter>
							<BrowserTitleBar
								url={new URL('https://www.istrust.org/')}
								extension={{}}
							/>
							<div className="h-80"></div>
							<div className="h-20"></div>
						</FullCenter>
					</Sequence>

					<Sequence from={15} durationInFrames={25}>
						<FullCenter>
							<FadeTransition type="in" duration={10}>
								<BrowserTitleBar
									url={new URL('https://www.istrust.org/')}
									extension={{
										score: 'warning',
										screenshot: istrust_org,
									}}
								/>
							</FadeTransition>
						</FullCenter>
					</Sequence>

					<Sequence from={50} durationInFrames={25}>
						<FullCenter>
							<BrowserTitleBar
								url={new URL('https://www.istrust.org/')}
								extension={{
									score: 'warning',
									screenshot: istrust_org_tooltip,
								}}
							/>
						</FullCenter>
					</Sequence>
				</Series.Sequence>
			</Series>
		</>
	);
};
