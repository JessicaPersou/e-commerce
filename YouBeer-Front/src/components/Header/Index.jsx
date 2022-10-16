import '../Header/header.css';

export function Header(){
  return(
    <nav className="nav-bar">
      <div className="nav-bar1 nav-font">
        <p>YOUR BEER</p>
      </div>
      <div className="nav-bar2 nav-font">
        <p>SOBRE</p>
        <p>HISTÓRIA</p>
        <p>ESTILOS</p>
        <p>LOGIN</p>
      </div>
    </nav>
  )
}