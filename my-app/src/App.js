import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#" className="logo">
          <img src="/images/logo.png" alt="logo" width="100" height="100" />
        </a>
        <nav className="navbar">
          <a href="#">ABOUT</a>
          <a href="#">PRODUCTS</a>
          <a href="#">SALE</a>
          <a href="#">CONTACT</a>
          <a href="#">BLOG</a>
        </nav>
        <div className="buttons">
          <button>
            <i className="fas fa-user"></i>
          </button>
          <button>
            <i className="fas fa-cart-shopping"></i>
          </button>
          <button>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="search-site">
          <input
            type="text"
            className="search-input"
            id="search-box"
            placeholder="Search..."
          />
          <i className="fas fa-search"></i>
        </div>
      </header>

      {/* Home Sayfası */}
      <section className="home">
        <div className="content">
          <h3>JOİN THE CLUB</h3>
          <p>Become a member and earn points & exclusive rewards every time you shop.</p>
          <a href="#" className="btn">
            JOIN NOW
          </a>
          <a href="#" className="btn">
            LOGIN
          </a>
        </div>
      </section>
      {/* Home Sayfası sonu */}
      
      {/* Sale Sayfası */}
      <section className="SALE">
        <h1 className="heading">sale</h1>
        <div className="box-container">
          {/* Ürün kutularını buraya ekleyin */}
        </div>
      </section>
      {/* Sale Sayfası sonu */}
      
      {/* Products Sayfası */}
      <div className="PRODUCTS">
        <h1 className="heading">PRODUCTS</h1>
        <div className="box-container">
          {/* Ürün kutularını buraya ekleyin */}
        </div>
        <a href="#" className="btn">
          MORE
        </a>
      </div>
      {/* Products Sayfası sonu */}
      
      {/* About Sayfası */}
      <section className="about">
        <h1 className="heading">about</h1>
        <div className="row">
          <div className="image">
            <img src="images/about.webp" alt="about" />
          </div>
          <div className="content">
            <h3>About Us</h3>
            <p>
              {/* İçerik buraya ekleyin */}
            </p>
            <p>
              {/* İçerik buraya ekleyin */}
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
      {/* About Sayfası sonu */}
      
      {/* Contact Sayfası */}
      <section className="contact">
        <h1 className="heading">CONTACT</h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1506.3805447859963!2d29.07243955591652!3d40.96481233118321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1693802226244!5m2!1str!2str"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <h3> contact Us </h3>
            <div className="inputBox">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="last name" />
            </div>
            <div className="inputBox">
              <i className="fas fa-phone"></i>
              <input type="number" placeholder="phone number" />
            </div>
            <input type="submit" className="btn" value="CONTACT NOW" />
          </form>
        </div>
      </section>
      {/* Contact Sayfası sonu */}
      
      {/* Blog Sayfası */}
      <section className="blog">
        <h1 className="heading">blog</h1>
        <div className="box-container">
          {/* Blog kutularını buraya ekleyin */}
        </div>
      </section>
      {/* Blog Sayfası sonu */}
    </div>
  );
}

export default App;
