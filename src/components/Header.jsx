import logo from '../assets/logo.jpg';
import Button from './common/Button';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="SwaNosh Cafe Logo" />
        <h1>SwaNosh Cafe</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
