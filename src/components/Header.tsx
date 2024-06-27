import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <TypeAnimation
      sequence={[500, 'Star Wars Characters', 1000, 'Star Wars AllianceBook', 1000]}
      wrapper="h3"
      speed={50}
      style={{ fontSize: '2em', textAlign: 'center', padding: '0.5rem 0' }}
      repeat={0}
    />
  );
};

export default Header;
