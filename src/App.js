
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { AppWrapper } from './App.styled';


const Home = lazy(() => import('./Home/Home'));
const Contacts = lazy(() => import("./Contacts/Contacts"))
const Projects = lazy(() => import("./Projects/Projects"))
const Skills = lazy(() => import("./Skills/Skills"))


function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="skills" element={<Skills />}></Route>
        </Route>
      </Routes>
      
    </AppWrapper>
  );
}

export default App;
