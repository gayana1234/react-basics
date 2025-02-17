import "./CSSExmple.css";

const CSSEx = () => {
  return (
    <div>
      {/* Inlline Style */}
      <div style={{ display: "flex" }}>
        <p className="usingCName"> Gayana 1</p>
        <p className="usingCName"> Gayana 2</p>
        <p id="hello"> Gayana 3</p>
      </div>

      <div style={{ display: "flex" }}>
        <p className="marginEx"> Name: </p>
        <input id="paddingEx" type="text" />
      </div>
      <div>
        <p className="widthHeightEx"> Hello world</p>
      </div>
      {/* <div className="positionAndAllEx">
        <p>I want keep it in the top position</p>
      </div> */}
      {/* <div className="positionFixed">
        <p>I want keep it in the top position as Fixed</p>
      </div> */}
      <div className="cursorSty">
        <p style={{ cursor: "pointer" }}>Imp Pointer</p>
        <p style={{ textAlign: "right" }}>Imp 1</p>
        <p className="hoverExam">Hover Example </p>
        <p>Imp 1</p>
      </div>
      <div className="overExam">
        {/* <p> */}
        <p className="priotityCss" id="protyCs" style={{ color: "orange" }}>
          GAYANA 1
        </p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
        <p> GAYANA 1</p>
      </div>
    </div>
  );
};

export default CSSEx;
