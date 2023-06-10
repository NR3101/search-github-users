import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: var(--clr-green-dark);
    border: transparent;
    border-radius: 5px;
    transition: var(--transition);
    font-size: 1.2rem;
    text-transform: capitalize;
    box-sizing: border-box;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
    cursor: pointer;
  }
  button:hover {
    background: var(--clr-red-dark);
    transform: scale(110%);
  }
`;

export default Navbar;
