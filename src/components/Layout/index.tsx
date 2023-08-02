import { FC, ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
