class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <header class="app-bar">
    <div class="app-bar__menu">
    <button id="hamburgerButton" class="hamburgerButton">☰</button>
  </div>
  <div class="app-bar__brand">
    <div class="name_brand">Warsep APP</div>
  </div>
  <nav id="navigationDrawer" class="app-bar__navigation">
    <ul>
      <li><a href="#/home">Home</a></li>
      <li><a href="#/favorite">Favorite</a></li>
      <li><a href="https://www.instagram.com/fathi_rhs/">About Us</a></li>
    </ul>
  </nav>
  </header>
      `;
  }
}

customElements.define('nav-bar', NavBar);
