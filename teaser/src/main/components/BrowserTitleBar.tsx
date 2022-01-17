import {Img, useCurrentFrame, useVideoConfig} from 'remotion';
import icon from '../../../public/images/istrust/icon.svg';
import icon_ok from '../../../public/images/istrust/icon-ok.svg';
import icon_neutral from '../../../public/images/istrust/icon-neutral.svg';
import icon_warning from '../../../public/images/istrust/icon-warning.svg';

export const BrowserTitleBar: React.FC<{
	url?: URL;
	extension?: {
		score?: 'ok' | 'neutral' | 'warning';
		screenshot?: {
			src: string;
			hidden?: boolean;
		};
	};
}> = ({url, extension}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<div>
			<div className="flex justify-end">
				<div
					className="
            p-1
            flex
            justify-center
            items-center
            gap-1
            bg-container
            dark:bg-dark-container
            rounded-md
          "
				>
					<button
						type="button"
						className="
              w-9
              h-9
              flex
              justify-center
              items-center
              disabled:bg-opacity-0
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
            "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="70%"
							height="70%"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
						</svg>
					</button>
					<button
						disabled
						type="button"
						className="
              w-9
              h-9
              flex
              justify-center
              items-center
              disabled:bg-opacity-0
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
            "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="70%"
							height="70%"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
						</svg>
					</button>
					<button
						type="button"
						className="
              w-9
              h-9
              flex
              justify-center
              items-center
              disabled:bg-opacity-0
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
            "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="70%"
							height="70%"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
						</svg>
					</button>
					<div
						className="
              h-9
              w-80
              py-5
              px-3
              flex
              items-center
              rounded
              bg-secondary-container
              dark:bg-secondary-dark-container
            "
					>
						{url && (
							<div className="flex truncate">
								<span className="text-secondary-light dark:text-dark-secondary-light">
									{url.protocol}
								</span>
								<span className="text-secondary-light dark:text-dark-secondary-light">
									//
								</span>
								<span className="text-secondary-light dark:text-dark-secondary-light">
									{url.host.split('.').slice(0, -2).join('.') + '.'}
								</span>
								<span className="text-secondary dark:text-dark-secondary">
									{url.host.split('.').slice(-2).join('.')}
								</span>
								<span className="text-secondary-light dark:text-dark-secondary-light">
									{url.pathname}
								</span>
							</div>
						)}
					</div>
					{extension && (
						<div className="w-9 h-9 p-2 rounded">
							{extension.score === 'ok' ? (
								<Img src={icon_ok} />
							) : extension.score === 'neutral' ? (
								<Img src={icon_neutral} />
							) : extension.score === 'warning' ? (
								<Img src={icon_warning} />
							) : (
								<Img src={icon} />
							)}
						</div>
					)}
				</div>
			</div>
			{extension?.screenshot && (
				<div className="flex justify-end">
					<div className="w-full">
						<div className="flex justify-end mr-3">
							<div
								className={`
                mt-1
                w-5
                text-secondary
                dark:text-dark-secondary
                text-opacity-20
                dark:text-opacity-20
				${extension.screenshot.hidden ? 'opacity-0' : ''}
				`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="100%"
									height="100%"
									viewBox="0 0 255 127.5"
									fill="currentColor"
								>
									<polygon points="0,127.5 127.5,0 255,127.5" />
								</svg>
							</div>
						</div>

						<div className="flex justify-end">
							<Img
								src={extension.screenshot.src}
								className={`
								w-80
                  rounded-xl
                  border-4 border-secondary
                  dark:border-dark-secondary
                  border-opacity-20
                  dark:border-opacity-
				  ${extension.screenshot.hidden ? 'opacity-0' : ''}
                `}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
