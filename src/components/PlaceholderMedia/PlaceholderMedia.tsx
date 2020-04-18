import { ViewProps } from 'react-native';

export { PlaceholderMedia } from 'rn-placeholder';

export interface PlaceholderMediaProps extends ViewProps {
	size?: number;
	isRound?: boolean;
	color?: string;
	style?: ViewProps['style'];
}
