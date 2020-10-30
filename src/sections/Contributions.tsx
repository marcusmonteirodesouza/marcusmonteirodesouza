import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import Triangle from "../components/Triangle";

const Contributions = () => {
  return (
    <Section.Container id="contributions" Background={Background}>
      <Section.Header name="Contributions" icon="🔨" label="notebook" />

      <Fade direction="right" triggerOnce style={{ height: "100vh" }}>
        <iframe
          src="https://profile-summary-for-github.com/user/marcusmonteirodesouza"
          height="100%"
          width="100%"
        />
      </Fade>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={["80vh", "80vh"]}
      width={["100vw", "100vw"]}
      position="top-right"
    />

    <Triangle
      color="background"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      position="top-right"
    />

    <Triangle
      color="primary"
      height={["25vh", "40vh"]}
      width={["75vw", "60vw"]}
      position="bottom-right"
    />

    <Triangle
      color="secondary"
      height={["25vh", "20vh"]}
      width={["100vw", "100vw"]}
      position="bottom-right"
    />
  </>
);

export default Contributions;
