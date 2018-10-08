// see also components/ScreenSize for another way to consume this data
import * as React from 'react';
import MediaQuery, { MediaQueryProps } from 'react-responsive';
import { Responsive } from './Responsive';
import { IResponsiveComponent, withResponsive } from './withResponsive';

export interface IMediaQuerySSRProps extends MediaQueryProps {
  responsive?: Responsive;
}

const MediaQueryHOC: React.SFC<IMediaQuerySSRProps> = ({
  children,
  responsive,
  ...rest
}) => {
  const values: any = responsive ?
    {
      deviceWidth: responsive.fakeWidth,
      width: responsive.fakeWidth,
    } :
    null;

  return (
    <MediaQuery
      {...rest}
      values={values}
    >
      {children}
    </MediaQuery>
  );
};

export const MediaQuerySSR: IResponsiveComponent = withResponsive(MediaQueryHOC);
