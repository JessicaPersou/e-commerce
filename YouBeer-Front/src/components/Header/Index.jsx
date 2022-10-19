import "../Header/header.css";

export function Header() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar1 style-header">
        <p>YOUR BEER</p>
      </div>
      <div className="nav-bar2 ">
        <a className="style-header">
          <p>SOBRE</p>
        </a>
        <a className="style-header">
          <p>HISTÓRIA</p>
        </a>
        <a className="style-header">
          <p>ESTILOS</p>
        </a>
        <a className="style-header" href="/login/register">
          <p>LOGIN</p>
        </a>
      </div>
    </nav>
  );
}
