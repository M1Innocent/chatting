import "./Story.css";
const Story = () => {
  return (
    <>
      <div className="story">
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
      </div>
    </>
  );
};
export default Story;
