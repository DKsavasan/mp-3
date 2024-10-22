import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/home";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Leadership from "./components/leadership";
import Projects from "./components/projects";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    flex: 1;
  }
`;

const Layout = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;

  @media (max-width: 750px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

const Main = styled.main`
  flex: 1;
  background-color: #deb887;
  padding: 1%;

  @media (max-width: 750px) {
    padding: 3%;
  }
`;

const Root = () => {
  return (
    <>
      <Header />
      <Layout>
        <Nav />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add other routes as needed */}
            {/* <Route path="/education" element={<Education />} /> */}
            {/* <Route path="/experiences" element={<Experiences />} /> */}
            {/* ... */}
          </Routes>
        </Main>
      </Layout>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
