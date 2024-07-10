import { useState } from "react";
import DataTable from "./components/Table";
import { Radio, RadioChangeEvent, Tabs } from "antd";
import { TabsPosition } from "antd/es/tabs";

function App() {
  const [mode, setMode] = useState<TabsPosition>("top");

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <div className="App">
      <DataTable />
    </div>
  );
}

export default App;
