export interface CursorAnimation {
	data: {
		steps: CursorAnimationStep[];
	};
}

export interface CursorAnimationStep {
	frame: number;
	x: number;
	y: number;
}
