import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Model Y"
        description="Order Online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Model 3"
        description="Order Online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Model X"
        description="Order Online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Order Now"
        RightBtnText="Demo Drive"
      />
      <Section
        title="Lowest Cost Solar Panel in America."
        description="Money Back Guarante"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        RightBtnText="Learn More"
      ></Section>
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less than a New Solar Panel"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        RightBtnText="Learn More"
      ></Section>
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
        RightBtnText="Learn More"
      ></Section>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
