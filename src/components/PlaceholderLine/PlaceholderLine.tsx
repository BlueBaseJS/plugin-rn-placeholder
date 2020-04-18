import { ViewProps } from 'react-native';

export { PlaceholderLine } from 'rn-placeholder';

export interface PlaceholderLineProps extends ViewProps {
	height?: number;
	color?: string;
	width?: number;
	noMargin?: boolean;
	style?: ViewProps['style'];
}
