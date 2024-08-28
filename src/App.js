import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import DashboardNavbar from "./navbar/DashboardNavbar";
import Home from "./routes/Home";
import Governance from "./routes/Governance";
import Neurons from "./routes/Neurons";
import Network from "./routes/Network";
import Releases from "./routes/Releases";
import Canisters from "./routes/Canisters";
import Icp from "./routes/Icp";
import Sns from "./routes/Sns";
import ChainFusion from "./routes/ChainFusion";
import DashboardFooter from "./components/DashboardFooter";
import NodeMachines from "./components/NodeMachines";
import NodeProviders from "./components/NodeProviders";
import DataCenters from "./components/DataCenters";
import Subnets from "./components/Subnets";
import NeuronsTable from "./components/NeuronsTable";
import Proposals from "./components/Proposals";
import IcpTransactions from "./components/IcpTransactions";
import DashboardMap from "./components/DashboardMap";
import Overview from "./components/Overview";
import PowerConsumptionGraph from "./components/PowerConsumptionGraph";
import IcpRates from "./components/IcpRates";
import IcpGraphs from "./components/IcpGraphs";
import { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import DashboardWrapper from "./navbar/DashboardWrapper";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<DashboardWrapper mode={mode} setMode={setMode} />}
      >
        <Route index element={<Home />} />
        <Route path="governance" element={<Governance />} />
        <Route path="neurons" element={<Neurons />} />
        <Route path="network" element={<Network />} />
        <Route path="releases" element={<Releases />} />
        <Route path="canisters" element={<Canisters />} />
        <Route path="icp" element={<Icp />} />
        <Route path="sns" element={<Sns />} />
        <Route path="chain-fusion" element={<ChainFusion />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor={"background.default"} color={"text.primary"}>
        <RouterProvider router={route} />
        <DashboardMap />
        <Overview />
        <IcpGraphs />
        <IcpRates />
        <PowerConsumptionGraph />
        <IcpTransactions />
        <Proposals />
        <NeuronsTable />
        <Subnets />
        <DataCenters />
        <NodeProviders />
        <NodeMachines />
        <DashboardFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
