export interface CursorAnimation {
	steps: CursorAnimationStep[];
}

interface CursorAnimationStep {
	frame: number;
	type: 'cursor' | 'text';
	x: number;
	y: number;
	slowness?: number;
}
