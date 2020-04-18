import { Fade, Placeholder as RNPlaceholder } from 'rn-placeholder';

import React from 'react';
import { ViewProps } from 'react-native';

export interface PlaceholderProps extends ViewProps {
	Animation?: React.ComponentType;
	Left?: React.ComponentType<ViewProps>;
	Right?: React.ComponentType<ViewProps>;
}

export const Placeholder = (props: PlaceholderProps) => (
	<RNPlaceholder Animation={Fade} {...props} />
);
