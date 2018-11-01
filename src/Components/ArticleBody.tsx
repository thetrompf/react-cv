import React from 'react';

interface Props {
    children: string;
}

export const ArticleBody: React.SFC<Props> = props => {
    return (
        <>
            {props.children.split('\n').map((part, i) => {
                return <p key={i}>{part}</p>;
            })}
        </>
    );
};
