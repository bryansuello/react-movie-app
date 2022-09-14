import { FooterStyled } from './styled/ComponentStyled';

const Footer = () => {
  return (
    <FooterStyled>
      <a href="https://bryansuello.dev">
        <h4>bryansuello.dev</h4>
      </a>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
        corporis voluptas aliquam non magni tempora iure ipsa blanditiis earum
        adipisci!
      </p>
      <ul>
        <li>
          <div>
            <a href="https://github.com/bryansuello">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                alt="github"
              />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="linkedin.com/bryansuello">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                alt="linkedIn"
              />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="https://behance.net/bryansuello">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4138/4138191.png"
                alt="behance"
              />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="https://instagram.com/suello.dev">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                alt="instagram"
              />
            </a>
          </div>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
