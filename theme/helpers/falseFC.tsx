import React from 'react';

export type RenderProp<Props = {}> = (props?: Props) => React.ReactElement;

export type FalsyFCProps<Props = {}> = Props & {
  component?: RenderProp<Props>;
  fallback?: React.ReactElement;
};


export class FalsyFC<Props = {}> extends React.Component<FalsyFCProps<Props>> {

  public render(): React.ReactElement {
    const { component, fallback, ...props } = this.props;

    if (!component) {
      return fallback || null;
    }

    return React.createElement(component, props as Props);
  }
}