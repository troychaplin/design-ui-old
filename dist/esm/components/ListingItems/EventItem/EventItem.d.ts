import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
    audience: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export interface EventItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    name?: string;
    link?: string;
    startDateTime?: string;
    endDateTime?: string;
    featuredImage?: string;
    description?: string;
    on_campus?: boolean;
    on_campus_building?: string | null;
    on_campus_room_number?: string | null;
    event_address?: string;
    tags?: Tags;
}
export interface ItemBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface BaseItemProps {
    as?: BaseItemTypeProps;
}
export interface TitleProps {
    as?: TitleTypeProps;
}
export declare const EventItem: {
    ({ as: Component, children, link, }: ItemBaseProps & EventItemProps): JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: EventItemProps): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, name }: TitleProps & EventItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    DateBox: {
        ({ startDateTime }: EventItemProps): JSX.Element;
        displayName: string;
    };
    Details: {
        ({ startDateTime, endDateTime, event_address, on_campus, on_campus_building, on_campus_room_number, }: EventItemProps): JSX.Element;
        displayName: string;
    };
    Category: {
        ({ tags }: EventItemProps): JSX.Element;
        displayName: string;
    };
};
export {};
