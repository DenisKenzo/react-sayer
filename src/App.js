import {BrowserRouter} from "react-router-dom";
import Content from "./components/content/content";


function App() {
  return (
      <BrowserRouter>
        <div>
            <Content/>
        </div>
      </BrowserRouter>
  );
}

export default App;
