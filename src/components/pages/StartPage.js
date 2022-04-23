import React from "react";
import Container from "../Container";

function StartPage({ children }) {
  return (
    <section className="start-page">
      <Container>
        <div className="start-page__inner">{children}</div>
      </Container>
    </section>
  );
}

export default StartPage;
