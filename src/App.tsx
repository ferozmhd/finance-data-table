import DataTable from "./components/DataTable";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faComment,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h3>Financial Statement</h3>
      <div className="button-container">
        <div>
          <button className="selected">Profit & Loss</button>
          <button>Balance Sheet</button>
          <button>Cashflow</button>
          <button>Ratio</button>
        </div>
        <div className="action-buttons">
          <button>
            <FontAwesomeIcon icon={faCirclePlus} /> Add column
          </button>
          <button>
            {" "}
            <FontAwesomeIcon icon={faComment} /> Inset Comment
          </button>
          <button>
            <FontAwesomeIcon icon={faGear} />
            Update Columns
          </button>
        </div>
      </div>
      <DataTable />
    </div>
  );
}

export default App;
