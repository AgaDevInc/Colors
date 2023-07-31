export type Color = `\x1b[${string}m`;

type FONTS_TYPE =
	| 'RESET'
	| 'BOLD'
	| 'DIM'
	| 'ITALIC'
	| 'UNDERLINED'
	| 'BLINK'
	| 'REVERSE'
	| 'HIDDEN'
	| 'STRIKETHROUGH';

export const FONTS: { [key in FONTS_TYPE]: Color };

type COLORS =
	| 'BLACK'
	| 'RED'
	| 'GREEN'
	| 'YELLOW'
	| 'BLUE'
	| 'MAGENTA'
	| 'CYAN'
	| 'WHITE';
type BRIGHT_COLORS = `BRIGHT_${Exclude<COLORS, 'GRAY' | 'BLACK'>}` | 'GRAY';
type ALL_COLORS = COLORS | BRIGHT_COLORS;

export const FOREGROUND: { [key in ALL_COLORS]: Color };
export const BACKGROUND: { [key in ALL_COLORS]: Color };
