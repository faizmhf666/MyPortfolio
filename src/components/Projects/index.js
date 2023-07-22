import React from "react";
import Slider from "react-slick";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

import Navbar from "../Navbar";
import Footer from "../Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.css";

const data = [
  {
    demo: "https://faizmhf666.github.io/MyPortfolio/",
    title: "Portfolio 1.0",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689959067/Screenshot_82_s8sohv.png",
    id: 0,
    react: true,
  },
  {
    demo: "https://faizbookhub.ccbp.tech",
    title: "BookHub React Project",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601409/BookHub_bbff3z.png",
    id: 1,
    react: true,
  },
  {
    demo: "https://ecommercebyme.ccbp.tech",
    title: "E-commerce webApp",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601409/Ecommerce_snyuqe.png",
    id: 2,
    react: true,
  },
  {
    demo: "https://primevideocmhf.ccbp.tech",
    title: "Streaming service landing page using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601411/Streaming_Service_Page_kxymir.png",
    id: 3,
    react: true,
  },
  {
    demo: "https://rpsgamebyfaiz.ccbp.tech/",
    title: "Rock Paper Scissors using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601408/RockPaperScissorsGame_zpwkhg.png",
    id: 4,
    react: true,
  },
  {
    demo: "https://bggradientfaiz.ccbp.tech",
    title: "Background gradient using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601408/CSS_Color_Gradient_c2gam9.png",
    id: 5,
    react: true,
  },
  {
    demo: "https://faizcointoss.ccbp.tech",
    title: "Coin Toss webapp using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601410/Coin_Toss_Game_u23siw.png",
    id: 6,
    react: true,
  },
  {
    demo: "https://faizappstore.ccbp.tech",
    title: "App store landing page using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601410/AppStore_Landing_page_k50bhk.png",
    id: 7,
    react: true,
  },
  {
    demo: "https://faizreactbh.ccbp.tech",
    title: "Browser History page using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601410/Interactive_Web_history_page_olgfvh.png",
    id: 8,
    react: true,
  },
  {
    demo: "https://memecreaterfaiz.ccbp.tech",
    title: "Meme generator using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601412/Meme_Generator_uiufbd.png",
    id: 9,
    react: true,
  },
  {
    demo: "https://changethememhf.ccbp.tech",
    title: "Navbar with theme switch ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601407/ThemeAndIcons_o5089i.png",
    id: 10,
    react: true,
  },
  {
    demo: "https://faizregform.ccbp.tech",
    title: "Dummy registration form using ReactJS",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601408/Registration_Form_Dummy_ab44js.png",
    id: 11,
    react: true,
  },
  {
    demo: "https://fzcommentapp.ccbp.tech",
    title: "Comment your Thoughts app/app section using ReactJs",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601409/Comment_Secction_lqd3dr.png",
    id: 12,
    react: true,
  },
  {
    demo: "https://wikiapifaiz.ccbp.tech",
    title: "Wikipedia search webapp using JavaScript and Html/css",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601412/Wikipedia_Search_Api_WebApp_ipfmv8.png",
    id: 13,
    react: false,
  },
  {
    demo: "https://todowebpagebyjf.ccbp.tech",
    title: "Todo Webapp demonstrating JavaScript",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601411/ToDos_JS_tkkrnk.png",
    id: 14,
    react: false,
  },
  {
    demo: "https://explosivesgame.ccbp.tech",
    title: "Explosive game demonstrating various events and interval/timer",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601411/setInterval_Timeout_Game_JS_esu6pp.png",
    id: 15,
    react: false,
  },
  {
    demo: "https://catswitchproje2.ccbp.tech",
    title: "Cat and Switch Demonstrating event listeners in JavaScript",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601411/Cat_and_Switch_Js_zwwab9.png",
    id: 16,
    react: false,
  },
  {
    demo: "https://guessnumberfaiz.ccbp.tech",
    title: "Number Guessing game using JavaScript Math function",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601411/Guess_the_Number_Game_JS_qgiiss.png",
    id: 17,
    react: false,
  },
  {
    demo: "https://withcsspagedemo.ccbp.tech",
    title: "CSS Flex-box dummy blog page",
    thumbnail:
      "https://res.cloudinary.com/dvu0weqay/image/upload/v1689601413/Blog_Page_Css_flexbox_xlecrd.png",
    id: 18,
    react: false,
  },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    slidesToScroll: 3,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reactProjects = data.filter((each) => each.react === true);
  const nonReactProjects = data.filter((each) => each.react !== true);

  return (
    <div className="container-main-projects">
      <Navbar />
      <div className="projects">
        <div className="headings">
          <h1>#MyProjects</h1>
          <p>Some of my recent projects: </p>
        </div>
        <div className="project-container">
          <div>
            <h1>
              <span className="project-main-heading">
                &nbsp; React.Js Projects &nbsp;
                <FaReact className="p-icons" style={{ color: "#00a9ff" }} /> :
                &nbsp;
              </span>
            </h1>
            <Slider {...settings}>
              {reactProjects.map((each) => (
                <li key={each.id} className="project-card">
                  <div>
                    <h2 className="project-title">{each.title}</h2>
                    <img
                      src={each.thumbnail}
                      alt={each.title}
                      className="thumbnail"
                    />
                    <div className="project-btn">
                      <a
                        className="btn btn-1 button"
                        href={each.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        className="btn btn-1 button"
                        href="https://github.com/faizmhf666?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </div>
          <div>
            <h1>
              <span className="project-main-heading">
                &nbsp; JavaScript Projects &nbsp;
                <TbBrandJavascript
                  className="p-icons"
                  style={{ color: "#cfb430" }}
                />
                &nbsp; : &nbsp;
              </span>
            </h1>
            <Slider {...settings}>
              {nonReactProjects.map((each) => (
                <li key={each.id} className="project-card">
                  <div>
                    <h2 className="project-title">{each.title}</h2>
                    <img
                      src={each.thumbnail}
                      alt={each.title}
                      className="thumbnail"
                    />
                    <div className="project-btn">
                      <a
                        className="btn btn-1 button"
                        href={each.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                      <a
                        className="btn btn-1 button"
                        href="https://github.com/faizmhf666?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
