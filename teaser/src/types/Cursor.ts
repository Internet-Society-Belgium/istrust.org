export interface CursorAnimation {
	steps: CursorAnimationStep[];
}

interface CursorAnimationStep {
	frame: number;
	type?: string;
	x: number;
	y: number;
	slowness?: number;
}
