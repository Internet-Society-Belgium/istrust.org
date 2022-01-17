import {Img} from 'remotion';

import world from '../../../public/images/icons/world.svg';

export const World: React.FC = () => {
	const frame_logo = 50;

	return (
		<div>
			<Img src={world} className="w-screen h-screen" />
			<div className="absolute" style={{left: '290px', top: '460px'}}>
				<Ping />
			</div>
			<div className="absolute" style={{left: '900px', top: '400px'}}>
				<Ping />
			</div>
			<div className="absolute" style={{left: '950px', top: '460px'}}>
				<Ping />
			</div>
			<div className="absolute" style={{left: '1000px', top: '300px'}}>
				<Ping />
			</div>
		</div>
	);
};

const Ping: React.FC = () => {
	return (
		<span className="flex h-3 w-3">
			<span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
			<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
		</span>
	);
};
