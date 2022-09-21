import React from "react";
import classes from "./Projects.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import portfolioData from "../../data/portfolio.json";

const Projects = () => {
  return (
    <div className={classes.box} id="about">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY PROJECTS</span>

        <div className={classes.Project}>
          <div className={classes.container}>
            {portfolioData.portfolio.map((port, idx) => {
              return (
                <div key={idx} className={classes.image_box}>
                  <img
                    src={port.cover}
                    alt="cover"
                    className={classes.portfolio_image}
                  />
                  <div className={classes.content}>
                    <p className={classes.title}>{port.title}</p>
                    <h4 className={classes.description}>{port.description}</h4>
                    <button
                      className={classes.btn}
                      onClick={() => {
                        window.open(port.url);
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Projects;
