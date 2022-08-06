import { Fragment } from "react";
import MainHeader from "./main-header";
import Advertisement from "./advertisement";
import Footer from "./footer";

function Layout(params) {
  return (
    <Fragment>
      <MainHeader />
      <Advertisement />
      <main className="mainBody">{params.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
