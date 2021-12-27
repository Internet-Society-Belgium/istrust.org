import {Img} from 'remotion';
import icon from '../../../public/images/icons/icon.svg';
import icon_ok from '../../../public/images/icons/icon-ok.svg';
import icon_neutral from '../../../public/images/icons/icon-neutral.svg';
import icon_warning from '../../../public/images/icons/icon-warning.svg';

export const BrowserTitleBar: React.FC<{
	url: URL;
	extension?: {
		score?: 'ok' | 'neutral' | 'warning';
		screenshot?: string;
	};
}> = ({url, extension}) => {
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
						aria-label="Previous screenshot"
						className="
              w-9
              h-9
              flex
              justify-center
              items-center
              rounded
              disabled:bg-opacity-0
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
              dark:disabled:pointer-events-none
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
						type="button"
						aria-label="Next screenshot"
						className="
              w-9
              h-9
              flex
              justify-center
              items-center
              rounded
              disabled:bg-opacity-0
              dark:disabled:bg-opacity-0
              text-secondary
              dark:text-dark-secondary
              disabled:text-opacity-20
              dark:disabled:text-opacity-20
              disabled:pointer-events-none
              dark:disabled:pointer-events-none
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
					<div>
						<div className="flex justify-end mr-3">
							<div
								className="
                mt-1
                w-5
                text-secondary
                dark:text-dark-secondary
                text-opacity-20
                dark:text-opacity-20
              "
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

						<Img
							src={extension.screenshot}
							className="
                  max-w-full
                  rounded-xl
                  border-4 border-secondary
                  dark:border-dark-secondary
                  border-opacity-20
                  dark:border-opacity-20
                  pointer-events-none
                "
						/>
					</div>
				</div>
			)}
		</div>
	);
};
