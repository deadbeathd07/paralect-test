import React from "react";
import Container from "./Container";

function Header({ children }) {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">{children}</div>
      </Container>
    </header>
  );
}

export default Header;
