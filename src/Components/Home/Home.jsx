import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import NavBar from "../Navigation/NavBar";

const Home = () => {
  return (
    <>
      <div className=" relative">
        <div className=" ">
          <Sidebar />
        </div>
        <div className="">
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Home;
