import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { Home, Projects, Posts, Contact, Gallery } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={(
            <Layout>
              <Home />
            </Layout>
          )} />
          <Route exact path="/projects" element={(
            <Layout>
              <Projects />
            </Layout>
          )} />
          <Route exact path="/posts" element={(
            <Layout>
              <Posts />
            </Layout>
          )} />
          <Route exact path="/contact" element={(
            <Layout>
              <Contact />
            </Layout>
          )} />
          <Route exact path="/gallery" element={(
            <Layout>
              <Gallery />
            </Layout>
          )} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
