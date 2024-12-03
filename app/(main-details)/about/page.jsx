import About_Banner from "@/components/about/About_Banner";
import Description1 from "@/components/about/Description1";
import Description2 from "@/components/about/Description2";
import Description3 from "@/components/about/Description3";
import Description4 from "@/components/about/Description4";
import Second_About_Banner from "@/components/about/Second_About_Banner";
import Second_Component from "@/components/about/Second_Component";
import Container from "@/components/layout_components/Container";
import React from "react";

const About = () => {
  return (
    <div>
      <Container>
        <About_Banner />
        <Second_Component />
        <Second_About_Banner />
        <Description1 />
        <Description2 />
        <Description3 />
        <Description4 />
      </Container>
    </div>
  );
};

export default About;
