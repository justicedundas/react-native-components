import { ReactElement } from 'react';

export type ChildrenProp<Element extends ReactElement = ReactElement> = Element | Element[];
export type ChildrenWithProps<Props = {}> = ChildrenProp<ReactElement<Props>>;

export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type Size = LiteralUnion< 'small' | 'medium' | 'large' >;
export type Status = LiteralUnion< 'basic' | 'primary' | 'success' | 'info' | 'warning' >;