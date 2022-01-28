export interface CursorAnimation {
	steps: CursorAnimationStep[];
}

interface CursorAnimationStep {
	frame: number;
	x: number;
	y: number;
	type?: string;
	slowness?: number;
}
