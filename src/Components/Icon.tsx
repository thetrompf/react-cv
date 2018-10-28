import React from 'react';
import cx from 'classnames';

type IconSize = 'md' | 'lg' | '2x' | '3x' | '4x' | '5x';

interface Props {
    name: string;
    size?: IconSize;
}

export const Icon: React.SFC<Props> = props => {
    return (
        <i
            className={cx(`fa fa-${props.name}`, {
                'fa-lg': props.size === 'lg',
                'fa-2x': props.size === '2x',
                'fa-3x': props.size === '3x',
                'fa-4x': props.size === '4x',
                'fa-5x': props.size === '5x',
            })}
        />
    );
};
