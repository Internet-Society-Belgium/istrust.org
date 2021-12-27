import {Img, useCurrentFrame} from 'remotion';

import globe from '../../../public/images/icons/globe-alt.svg';
import cake from '../../../public/images/icons/cake.svg';
import refresh from '../../../public/images/icons/refresh.svg';
import office_building from '../../../public/images/icons/office-building.svg';
import switch_vertical from '../../../public/images/icons/switch-vertical.svg';
import lock_closed from '../../../public/images/icons/lock-closed.svg';
import identification from '../../../public/images/icons/identification.svg';

export const Informations: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div className="grid grid-flow-row md:grid-flow-col gap-10">
			<div className="flex flex-col items-center">
				<div className="p-3 relative -bottom-6 bg-primary rounded">
					<Img src={globe} className="w-6 h-6" />
				</div>
				<div
					className="
              h-full
              w-60
              p-4
              pt-8
              flex flex-col
              justify-evenly
              items-center
              bg-container
              dark:bg-dark-container
              rounded-lg
            "
				>
					<h3
						className="
                p-2
                text-secondary
                dark:text-dark-secondary
                text-xl
                font-medium
              "
					>
						Domain
					</h3>
					<ul className="text-secondary-light dark:text-dark-secondary-light">
						<li className="p-1 flex items-center gap-2">
							<Img src={cake} className="w-6 h-6 pointer-events-none" />
							<h4>Creation</h4>
						</li>
						<li className="p-1 flex items-center gap-2">
							<Img src={refresh} className="w-6 h-6 pointer-events-none" />
							<h4>Last change</h4>
						</li>
						<li className="p-1 flex items-center gap-2">
							<Img
								src={office_building}
								className="w-6 h-6 pointer-events-none"
							/>
							<h4>Owner</h4>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<div className="p-3 relative -bottom-6 bg-primary rounded">
					<Img src={switch_vertical} className="w-6 h-6 pointer-events-none" />
				</div>
				<div
					className="
              h-full
              w-60
              p-4
              pt-8
              flex flex-col
              justify-evenly
              items-center
              bg-container
              dark:bg-dark-container
              rounded-lg
            "
				>
					<h3
						className="
                p-2
                text-secondary
                dark:text-dark-secondary
                text-xl
                font-medium
              "
					>
						Communication
					</h3>
					<ul className="text-secondary-light dark:text-dark-secondary-light">
						<li className="p-1 flex items-center gap-2">
							<Img
								src={lock_closed}
								alt="domain"
								className="w-6 h-6 pointer-events-none"
							/>
							<h4>Secure</h4>
						</li>
						<li className="p-1 flex items-center gap-2">
							<Img
								src={identification}
								alt="domain"
								className="w-6 h-6 pointer-events-none"
							/>
							<h4>Subject</h4>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
