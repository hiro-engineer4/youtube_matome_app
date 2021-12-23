import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";

export const Layout = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
