import React from 'react';

export const FullCenter: React.FC = ({children}) => {
	return (
		<div className="flex flex-1 justify-center items-center">{children}</div>
	);
};
