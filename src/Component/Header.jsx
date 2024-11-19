import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="logo">
          <img src="1.jpg" alt="image" />
          <h5>Logo</h5>
        </ul>
        <ul className="icons">
          <a>News</a>
          <a>Home</a>
          <a>Notis</a>
          <a>contact</a>
        </ul>
        <ul className="profile">
          <img src="2.jpg" alt="image" />
        </ul>
      </div>
    </>
  );
};
export default Header;
