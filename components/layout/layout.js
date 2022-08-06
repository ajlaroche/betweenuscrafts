import { Fragment } from "react";
import MainHeader from "./main-header";

function Layout(params) {
  return (
    <Fragment>
      <MainHeader />
      <main className="mainBody">{params.children}</main>
    </Fragment>
  );
}

export default Layout;
