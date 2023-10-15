
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';


const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import("./Contacts/Contacts"))
const Projects = lazy(() => import("./Projects/Projects"))
const Skills = lazy(() => import("./Skills/Skills"))


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="skills" element={<Skills />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
