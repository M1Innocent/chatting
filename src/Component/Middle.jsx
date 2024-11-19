import "./Middle.css";
import Story from "./Story";
const Middle = () => {
  return (
    <>
      <div className="middle_container">
        <div className="search">
          <p>Twit Socail media searching </p>
          <input
            type="text"
            placeholder="Searching Any thing"
            className="input"
          />
          <input type="button" value={"Post"} className="button" />
        </div>
        <Story />
        <Story />
        <Story />

        {/* <div className="story">
          <div className="title">
            <img src="2.jpg" alt="image" />
            <h4>kwizere patrick</h4>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              libero ut minus unde vitae mollitia quis ipsam, atque cupiditate?
              Quaerat!
            </p>
          </div>
          <div className="button">
            <input type="button" value={"Like"} />
            <input type="button" value={"Comment"} />
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Middle;
