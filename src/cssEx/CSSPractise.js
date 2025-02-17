import "./CSSPractise.css";

const CSSPractise = () => {
  return (
    <div style={{ display: "flex" }}>
      <p className="Myname abc">Suresh 1 </p>
      <p className="Myname def">Suresh 2</p>
      <p id="Love"> Suresh 3</p>

      <div style={{ display: "flex" }}>
        <p className="You"> Enter </p>
        <input id="padding" type="text"></input>
      </div>
      <div>
        <p className="Universe"> Hello world</p>
        <div className="Position">Bring it top</div>
        <div className="cursorset">
          <p style={{ cursor: "pointer" }}>Impointer</p>
          <p style={{ textAlign: "right" }}> adjust right</p>
          <p className="HoverHi"> Hover </p>
          <p> Imp 8</p>
        </div>
        <div className="Test">
          <p className="Prioroty" id="Sirsi" style={{ color: "pink" }}>
            {" "}
          </p>
          <p> Manglore</p>
          <p> Sirsi</p>
          <p> Gayana</p>
          <p> Banglore</p>
          <p> Sirsi</p>
        </div>
      </div>
    </div>
  );
};
export default CSSPractise;
