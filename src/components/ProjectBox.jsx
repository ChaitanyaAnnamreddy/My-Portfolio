import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FoodOrderingApplicationDesc:
      "I built a food delivery web application replicating the core functionalities of Swiggy using React. It allows users to browse nearby restaurants, explore menus, place orders.Key features include restaurant listings with search and filter options, menu displays with images and descriptions, a shopping cart system, and ratings for restaurants. ",
    FoodOrderingApplicationGithub:
      "https://github.com/ChaitanyaAnnamreddy/food-odering-website",
    FoodOrderingApplicationWebsite: "",

    ECommerceDesc:
      "This website demonstrates a simple E-commerce application for an imaginary organic shop. It is built with Angular 10, Firebase and Bootstrap 4 as the final project in my complete Angular course.Key features include ProductCatalog,Shopping Cart,User Management,Checkout,Order Confirmation. ",
    ECommerceGithub: "",
    ECommerceWebsite: "https://film-mania.vercel.app/",

    PortfolioDesc:
      "A portfolio project using React is a dynamic and interactive website designed to showcase my professional skills, projects, and achievements. It typically includes sections such as an about me page providing background information and expertise, a portfolio section highlighting past projects with descriptions and links.",
    ColourPaletteGithub: "https://github.com/EshaalB/Colour-palette-Generator",
    ColourPaletteWebsite: "https://colourpalettegen.netlify.app",
  };

  return (
    <div className="projectBox">
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank" rel="noopener">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]}>
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
