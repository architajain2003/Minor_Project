const Navbar = () => {
  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container">
          <a class="navbar-brand p-0 logo" href="/" title="Edu Tech">
            LOGO
            {/* <img src="assets/images/logo.svg" alt="logo" /> */}
          </a>
          <i
            class="fa-solid fa-bars navbar-toggler shadow-none border-0 p-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          ></i>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-lg-auto align-items-lg-center">
              <li class="nav-item">
                <a
                  class="nav-link d-inline-block"
                  aria-current="page"
                  href="#features"
                  title="Features"
                >
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" href="#Class" title="Class">
                  Class
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link d-inline-block"
                  href="#Blog"
                  title="Products"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link d-inline-block"
                  href="#Contacts"
                  title="Contacts"
                >
                  Contacts
                </a>
              </li>
            </ul>
            <a href="/signin" class=" btn theme-button d-lg-block d-none">
              Join Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
