import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sample01 from "./pages/Sample01";
import Ex10 from "./pages/answer/Ex10";
import Ex20 from "./pages/answer/Ex20";
import S20attributeChange from "./pages/sample/S20attributeChange";
import S30onClickEvent from "./pages/sample/S30onClickEvent";
import S40onChangeEvent from "./pages/sample/S40onChangeEvent";
import S50radioButton from "./pages/sample/S50radioButton";
import S60singleCheckBox from "./pages/sample/S60singleCheckBox";
import S70multiCheckBox from "./pages/sample/S70multiCheckBox";
import S80singleSelectBox from "./pages/sample/S80singleSelectBox";
import S90multiSelectBox from "./pages/sample/S90multiSelectBox";
import S110trim from "./pages/sample/S110trim";
import S120blur from "./pages/sample/S120blur";
import S130if from "./pages/sample/S130if";
import S140if2 from "./pages/sample/S140if2";
import S150ifelse from "./pages/sample/S150ifelse";
import S160ifelse2 from "./pages/sample/S160ifelse2";
import S170elseif from "./pages/sample/S170elseif";
import S180forLoop from "./pages/sample/S180forLoop";
import S190forLoop2 from "./pages/sample/S190forLoop2";
import S200firstItem from "./pages/sample/S200firstItem";
import S210filter from "./pages/sample/S210filter";
import S220fetchEmployeeList from "./pages/sample/S220fetchEmployeeList";
import S230xxsSample from "./pages/sample/S230xxsSample";
import S240basicParent from "./pages/sample/S240basicParent";
import S250propsParent from "./pages/sample/S250propsParent";
import S260countUpParent from "./pages/sample/S260countUpParent";
import Ex30 from "./pages/answer/Ex30";
import Ex40 from "./pages/answer/Ex40";
import Ex50 from "./pages/answer/Ex50";
import Ex60 from "./pages/answer/Ex60";
import S100stringAddition from "./pages/sample/S100stringAddition";
import S100numberAddition from "./pages/sample/S100numberAddition";
import Ex70 from "./pages/answer/Ex70";
import Ex80 from "./pages/answer/Ex80";
import Ex90 from "./pages/answer/Ex90";
import Ex100 from "./pages/answer/Ex100";
import Ex110 from "./pages/answer/Ex110";
import Ex120 from "./pages/answer/Ex120";
import Ex130 from "./pages/answer/Ex130";
import Ex140 from "./pages/answer/Ex140";
import S215useEffect from "./pages/sample/S215useEffect";
import S216countUp from "./pages/sample/S216countUp";
import Ex150 from "./pages/answer/Ex150";
import Ex160 from "./pages/answer/Ex160";
import Ex170 from "./pages/answer/Ex170";
import S270propsParent from "./pages/sample/S270propsParent";
import Ex180 from "./pages/answer/Ex180";
import S280countUpParent from "./pages/sample/S280countUpParent";
import S290counterContextSample from "./pages/sample/S290counterContextSample";

function App() {
  console.log("App component is rendering");
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample01" element={<Sample01 />} />
        <Route path="/s20" element={<S20attributeChange />} />
        <Route path="/s30" element={<S30onClickEvent />} />
        <Route path="/s40" element={<S40onChangeEvent />} />
        <Route path="/s50" element={<S50radioButton />} />
        <Route path="/s60" element={<S60singleCheckBox />} />
        <Route path="/s70" element={<S70multiCheckBox />} />
        <Route path="/s80" element={<S80singleSelectBox />} />
        <Route path="/s90" element={<S90multiSelectBox />} />
        <Route path="/s100string" element={<S100stringAddition />} />
        <Route path="/s100number" element={<S100numberAddition />} />
        <Route path="/s110" element={<S110trim />} />
        <Route path="/s120" element={<S120blur />} />
        <Route path="/s130" element={<S130if />} />
        <Route path="/s140" element={<S140if2 />} />
        <Route path="/s150" element={<S150ifelse />} />
        <Route path="/s160" element={<S160ifelse2 />} />
        <Route path="/s170" element={<S170elseif />} />
        <Route path="/s180" element={<S180forLoop />} />
        <Route path="/s190" element={<S190forLoop2 />} />
        <Route path="/s200" element={<S200firstItem />} />
        <Route path="/s210" element={<S210filter />} />
        <Route path="/s215" element={<S215useEffect />} />
        <Route path="/s216" element={<S216countUp />} />
        <Route path="/s220" element={<S220fetchEmployeeList />} />
        <Route path="/s230" element={<S230xxsSample />} />
        <Route path="/s240" element={<S240basicParent />} />
        <Route path="/s250" element={<S250propsParent />} />
        <Route path="/s260" element={<S260countUpParent />} />
        <Route path="/s270" element={<S270propsParent />} />
        <Route path="/s280" element={<S280countUpParent />} />
        <Route path="/s290" element={<S290counterContextSample />} />
        <Route path="/ex10" element={<Ex10 />} />
        <Route path="/ex20" element={<Ex20 />} />
        <Route path="/ex30" element={<Ex30 />} />
        <Route path="/ex40" element={<Ex40 />} />
        <Route path="/ex50" element={<Ex50 />} />
        <Route path="/ex60" element={<Ex60 />} />
        <Route path="/ex70" element={<Ex70 />} />
        <Route path="/ex80" element={<Ex80 />} />
        <Route path="/ex90" element={<Ex90 />} />
        <Route path="/ex100" element={<Ex100 />} />
        <Route path="/ex110" element={<Ex110 />} />
        <Route path="/ex120" element={<Ex120 />} />
        <Route path="/ex130" element={<Ex130 />} />
        <Route path="/ex140" element={<Ex140 />} />
        <Route path="/ex150" element={<Ex150 />} />
        <Route path="/ex160" element={<Ex160 />} />
        <Route path="/ex170" element={<Ex170 />} />
        <Route path="/ex180" element={<Ex180 />} />
      </Routes>
    </Router>
  );
}

export default App;
