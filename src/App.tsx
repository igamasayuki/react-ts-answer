import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Sample01 from "./views/Sample01";
import Ex10 from "./views/answer/Ex10";
import Ex20 from "./views/answer/Ex20";
import S20attributeChange from "./views/sample/S20attributeChange";
import S30onClickEvent from "./views/sample/S30onClickEvent";
import S40onChangeEvent from "./views/sample/S40onChangeEvent";
import S50radioButton from "./views/sample/S50radioButton";
import S60singleCheckBox from "./views/sample/S60singleCheckBox";
import S70multiCheckBox from "./views/sample/S70multiCheckBox";
import S80singleSelectBox from "./views/sample/S80singleSelectBox";
import S90multiSelectBox from "./views/sample/S90multiSelectBox";
import S100parseFloat from "./views/sample/S100parseFloat";
import S110trim from "./views/sample/S110trim";
import S120blur from "./views/sample/S120blur";
import S130if from "./views/sample/S130if";
import S140if2 from "./views/sample/S140if2";
import S150ifelse from "./views/sample/S150ifelse";
import S160ifelse2 from "./views/sample/S160ifelse2";
import S170elseif from "./views/sample/S170elseif";
import S180forLoop from "./views/sample/S180forLoop";
import S190forLoop2 from "./views/sample/S190forLoop2";
import S200firstItem from "./views/sample/S200firstItem";
import S210filter from "./views/sample/S210filter";
import S220dynamicAttributes from "./views/sample/S220dynamicAttributes";
import S230xxsSample from "./views/sample/S230xxsSample";
import S240basicParent from "./views/sample/S240basicParent";
import S250propsParent from "./views/sample/S250propsParent";
import S260countUpParent from "./views/sample/S260countUpParent";
import S270lifeCycleDemo from "./views/sample/S270lifeCycleDemo";
import S280emitParent from "./views/sample/S280emitParent";
import S290emitParent2 from "./views/sample/S290emitParent2";

function App() {
  console.log("App component is rendering");
  return (
    <>
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
          <Route path="/s100" element={<S100parseFloat />} />
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
          <Route path="/s220" element={<S220dynamicAttributes />} />
          <Route path="/s230" element={<S230xxsSample />} />
          <Route path="/s240" element={<S240basicParent />} />
          <Route path="/s250" element={<S250propsParent />} />
          <Route path="/s260" element={<S260countUpParent />} />
          <Route path="/s270" element={<S270lifeCycleDemo />} />
          <Route path="/s280" element={<S280emitParent />} />
          <Route path="/s290" element={<S290emitParent2 />} />
          <Route path="/ex10" element={<Ex10 />} />
          <Route path="/ex20" element={<Ex20 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
