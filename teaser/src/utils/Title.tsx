export const Title: React.FC<{
	text: string;
}> = ({text}) => {
	return <h1 className="text-primary text-6xl font-bold">{text}</h1>;
};
