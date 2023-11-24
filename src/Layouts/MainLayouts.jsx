import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Container from "../Shared/Container";
import Footer from "../Shared/Footer";


const MainLayouts = () => {
    return (
       
     <Container>
         <Navbar />
      
      <Outlet />
      <Footer/>
     </Container>
      
    
    );
};

export default MainLayouts;