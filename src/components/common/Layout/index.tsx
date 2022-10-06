import React, { ReactNode } from 'react';
type MyComponentProps = {
  children: ReactNode;
};
const Layout = ({ children }: MyComponentProps) => {
  return <div>{children}</div>;
};
export default Layout;
