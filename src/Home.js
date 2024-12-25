import Calci from "./Gayana/Calci";
import Mynewcomp from "./Gayana/Mynewcomp";
import Space from "./Gayana/Space";
import JsFileTen from "./Gayana/JsFileTen";
import HtmlPr from "./Gayana/HtmlPr";
import SelectOptions from "./Gayana/SelectOptions";
import NewCalci from "./Gayana/NewCalci";
import Counter from "./Store/Counter";
import ConterRedux from "./Store/CounterReducer/CounterRedux";

const Home = () => {
  return (
    <div>
      <Counter />
      <ConterRedux />
      <NewCalci />
      <SelectOptions />
      <HtmlPr />
      <Mynewcomp />
      <Calci />
      <Space />
      <JsFileTen />
      <table>
        <th> Name 1</th>
        <th> Age 2</th>
        <th> Company 3</th>
        <tbody>
          <tr>
            <td> Gayana</td>
            <td> 27</td>
            <td> Synechron</td>
          </tr>
          <tr>
            <td> Suresh</td>
            <td> 26</td>
            <td> STG</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
