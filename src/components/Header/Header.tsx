import '../../styles/header.css'

export function Header(){
  return(
    <nav className="nav-bar">
      <div className="nav-bar1 nav-font">
        <p>Your Beer</p>
      </div>
      <div className="nav-bar2 nav-font">
        <p>About</p>
        <p>Craft Beer</p>
        <p>Contact</p>
        <p>Login</p>
      </div>
    </nav>
  )
}