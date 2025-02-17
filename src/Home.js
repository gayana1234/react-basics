import Calci from "./Gayana/Calci";
import Space from "./Gayana/Space/Space";
import JsFileTen from "./Gayana/JsFileTen";
import HtmlPr from "./Gayana/HtmlPr";
import SelectOptions from "./Gayana/SelectOptions";
import NewCalci from "./Gayana/NewCalci";
import Counter from "./Gayana/Counter/Counter";
import CounterRedux from "./Gayana/Counter/CounterRedux";
import SpaceTable from "./Gayana/Space/SpaceTable";
import TableCrud from "./Gayana/ApiCRUD/TableCrud";
import GayanaPractice from "./Gayana/GayanaPractice";
import Form from "./Gayana/Form";
import ASMD from "./Gayana/Space/ASMD";
import CRUDPRACTISE from "./Gayana/ApiCRUD/CRUDPRACTISE";
import SetTimeEx from "./Gayana/SetTimeEx";
import SetEx from "./Gayana/SetEX";
import CSSEx from "./cssEx/CSSEx";
import CSSPractise from "./cssEx/CSSPractise";
import TryCatchEx from "./Gayana/TryCatchEx";
import Catch from "./Gayana/Catch";
import StorageEx from "./Gayana/StorageEx";
import StoragePractise from "./Gayana/Space/StoragePractise";
import ReduxPractise from "./Store/ReduxPractise";
import Dispatch from "./Store/Dispatch";
import PM from "./Counter/PM";

const Home = () => {
  return (
    <div>
      <div class="content">
        <h3 class="concept"> PM </h3>
        <PM />
      </div>
      <div class="content">
        <h3 class="concept"> Dispatch </h3>
        <Dispatch />
      </div>
      <div class="content">
        <h3 class="concept"> ReduxPractise </h3>
        <ReduxPractise />
      </div>
      <div class="content">
        <h3 class="concept"> Catch me if you can </h3>
        <Catch />
      </div>
      <div class="content">
        <h3 class="concept"> ASMD </h3>
        <ASMD />
      </div>
      <div class="content">
        <h3 class="concept"> CSS Style </h3>
        <CSSPractise />
      </div>
      <div class="content">
        <h3 class="concept"> Local and Session </h3>
        <StoragePractise />
      </div>

      <div class="content">
        <h3 class="concept"> Storage!! </h3>
        <StorageEx />
      </div>
      <div class="content">
        <h3 class="concept"> Try Catch </h3>
        <Catch />
        <TryCatchEx />
      </div>
      <div class="content">
        <h3 class="concept"> CSS Practise</h3>
        <CSSPractise />
        <CSSEx />
      </div>
      <div class="content">
        <h3 class="concept"> Gayana Practice!!</h3>
        <ASMD />
        <CRUDPRACTISE />

        <GayanaPractice />
      </div>
      <div class="content">
        <h3 class="concept"> Time Out and Interval!!</h3>
        <SetEx />
        <SetTimeEx />
      </div>
      <div class="content">
        <h3 class="concept"> Form Handler</h3>
        <Form />
      </div>
      <div class="content">
        <h3 class="concept"> API CRUD Operation</h3>
        <TableCrud />+
      </div>
      <div class="content">
        <h3 class="concept"> Dynamic Table Creation</h3>
        <SpaceTable />
      </div>
      <div class="content">
        <h3 class="concept"> Use State Counter </h3>
        <Counter />
      </div>
      <div class="content">
        <h3 class="concept"> Using Redux Counter </h3>
        <CounterRedux />
      </div>
      <div class="content">
        <h3 class="concept"> Calculator with all operation </h3>
        <NewCalci />
      </div>
      <div class="content">
        <h3 class="concept"> HTML Select Options </h3>
        <SelectOptions />
      </div>
      <div class="content">
        <h3 class="concept"> HTML input types and events </h3>
        <HtmlPr />
      </div>
      <div class="content">
        <h3 class="concept">
          {" "}
          Simple Calculator with Local and Session Storage
        </h3>
        <Calci />
      </div>
      <div class="content">
        <h3 class="concept">
          Dynamic Contents along with axios call and Routing concept
        </h3>
        <Space />
      </div>
      <div class="content">
        <h3 class="concept"> Basic JS components </h3>
        <JsFileTen />
      </div>
    </div>
  );
};

export default Home;
