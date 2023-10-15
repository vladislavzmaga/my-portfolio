import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <ul>
        <li><NavLink to={'/'} end>HOME</NavLink></li>
        <li><NavLink to={"projects"}>PROJECTS</NavLink></li>
        <li><NavLink to={"skills"}>SKILLS</NavLink></li>
        <li><NavLink to={"contacts"}>CONTACTS</NavLink></li>
      </ul>
    </>
  );
};
