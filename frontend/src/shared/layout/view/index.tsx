import SearchEngine from "../../search-engine/view";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Menu from "./components/menu";

interface LayoutProps {
    children: React.ReactNode | React.ReactElement,
}

function Layout({children}:LayoutProps) {
  return (
    <div className="flex flex-col h-screen ">
        {/* menu bar */}
        <div className="border-2 flex flex-row w-full h-auto">
            <div className="w-1/3">
        <Logo />
        </div>
        <div className="w-1/3 flex justify-center items-center ">
        <SearchEngine />
        </div>
        <div className="flex justify-end items-center w-1/3  mr-5">
        <Menu />
        </div>
        </div>

    {/* content */}

<div className="border-red h-4/5">{children}</div>
      

      {/* Footer */}
      <div className="border-2 h-auto" >
      <Footer />   
      </div>
       </div>
  );
}

export default Layout;
