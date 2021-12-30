export const FullCenter: React.FC<{className?: string}> = ({
	className,
	children,
}) => {
	return (
		<div
			className={`flex flex-col top-0 left-0 right-0 bottom-0 w-full h-full justify-center items-center ${
				className || ''
			}`}
		>
			{children}
		</div>
	);
};
