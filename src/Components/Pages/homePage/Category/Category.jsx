import "./Category.modules.css";

function Category() {
  return (
    <>
      <div className="categories">
        <h1>Categories</h1>
        <h3>Browse By Category</h3>

        <div className="Categorie-cards">
          <div className="phones">
            <img src="src/assets/Category-CellPhone.png" alt="" />
            <h2>phones</h2>
          </div>
          <div className="Computers">
            <img src="src/assets/Category-Computer.png" alt="" />
            <h2>Computers</h2>
          </div>
          <div className="SmartWatch">
            <img src="src/assets/Category-SmartWatch.png" alt="" />
            <h2>SmartWatch</h2>
          </div>
          <div className="Camera-red">
            <img src="src/assets/Category-Camera.png" alt="" />
            <h2>Camera</h2>
          </div>
          <div className="HeadPhones">
            <img src="src/assets/Category-Headphone.png" alt="" />
            <h2>HeadPhones</h2>
          </div>
          <div className="Gaming">
            <img src="src/assets/Category-Gamepad.png" alt="" />
            <h2>Gaming</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;


