import styled from 'styled-components';

export const MovieCardStyled = styled.div`
  width: 310px;
  height: 460px;
  margin: 1.5rem;

  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  div:nth-of-type(1) {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
    color: #f9d3b4;
  }

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }

  div:nth-of-type(2) {
    width: 100%;
    height: 100%;
  }

  div:nth-of-type(2) img {
    height: 100%;
    width: 100%;
  }

  div:nth-of-type(3) {
    z-index: 2;
    background-color: #343739;
    padding: 16px 24px 24px 24px;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }

  div:nth-of-type(3) span {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #f0f0f0;
  }

  div:nth-of-type(3) h3 {
    margin-top: 5px;
    font-family: 'Roboto Slab', serif;
    color: #f9d3b4;
  }

  &:hover div:nth-of-type(2) {
    height: 100%;
    opacity: 0.3;
  }

  &:hover div:nth-of-type(3) {
    background-color: transparent;
  }

  &:hover div:nth-of-type(1) {
    opacity: 1;
  }

  @media screen and (max-width: 400px) {
    width: '100%';
    margin: 1rem;
  }
`;

export const FooterStyled = styled.footer`
  font-family: 'Poppins', sans-serif;
  height: fit-content;
  background-color: #0d1e32;
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url('https://images.pexels.com/photos/6765248/pexels-photo-6765248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */
  color: #fce07e;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: #ffff;
  }
  h4 {
    font-weight: 400;
    color: #fce07e;
  }
  p {
    width: 40em;
    font-size: 0.6rem;
    text-align: center;
    margin: 0.6em 0 1.6em 0;
  }
  ul {
    list-style: none;
    display: flex;
    width: 18em;
    justify-content: space-evenly;
    margin-right: 3em;
    img {
      width: 1.4em;
      filter: invert(69%) sepia(90%) saturate(201%) hue-rotate(7deg)
        brightness(108%) contrast(98%);
    }
  }
`;

export const AppStyled = styled.div`
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 4rem 1rem;
  }
`;

export const SearchStyled = styled.div`
  width: 71%;
  margin: 4rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;

  input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    font-family: var(--font-raleway);
    font-weight: 500;
    padding-right: 1rem;

    outline: none;
    color: #a1a1a1;
    background: #1f2123;
  }

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      padding: 1rem 1.75rem;
      width: 100%;

      input {
        font-size: 1rem;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
