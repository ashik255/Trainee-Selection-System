import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Footer from "./Footer/Footer";

const FullLayout = () => {
  return (
    <main>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********header**********/}
          <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
      
          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <Outlet />
          </Container>
         
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default FullLayout;
