import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Paper,
  styled,
  Box,
} from "@mui/material";
import { useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { TbArrowsDiagonal } from "react-icons/tb";

const data = [
  { time: "00:00", value: 375.5 },
  { time: "00:01", value: 374.8 },
  { time: "00:02", value: 375.2 },
  { time: "00:03", value: 374.9 },
  { time: "00:04", value: 375.1 },
  { time: "00:05", value: 374.7 },
  { time: "00:06", value: 375.3 },
  { time: "00:07", value: 374.85 },
  { time: "00:08", value: 375.15 },
  { time: "00:09", value: 374.75 },
  { time: "00:10", value: 375.25 },
  { time: "00:11", value: 374.9 },
  { time: "00:12", value: 375.1 },
  { time: "00:13", value: 374.8 },
  { time: "00:14", value: 375.2 },
  { time: "00:15", value: 374.85 },
  { time: "00:16", value: 375.15 },
  { time: "00:17", value: 374.75 },
  { time: "00:18", value: 375.25 },
  { time: "00:19", value: 374.9 },
  { time: "00:20", value: 375.1 },
  { time: "00:21", value: 374.8 },
  { time: "00:22", value: 375.2 },
  { time: "00:23", value: 374.85 },
  { time: "00:24", value: 375.15 },
  { time: "00:25", value: 374.75 },
  { time: "00:26", value: 375.25 },
  { time: "00:27", value: 374.9 },
  { time: "00:28", value: 375.1 },
  { time: "00:29", value: 374.8 },
  { time: "00:30", value: 375.2 },
  { time: "00:31", value: 374.85 },
  { time: "00:32", value: 375.15 },
  { time: "00:33", value: 374.75 },
  { time: "00:34", value: 375.25 },
  { time: "00:35", value: 374.9 },
  { time: "00:36", value: 375.1 },
  { time: "00:37", value: 374.8 },
  { time: "00:38", value: 375.2 },
  { time: "00:39", value: 374.85 },
  { time: "00:40", value: 375.15 },
  { time: "00:41", value: 374.75 },
  { time: "00:42", value: 375.25 },
  { time: "00:43", value: 374.9 },
  { time: "00:44", value: 375.1 },
  { time: "00:45", value: 374.8 },
  { time: "00:46", value: 375.2 },
  { time: "00:47", value: 374.85 },
  { time: "00:48", value: 375.15 },
  { time: "00:49", value: 374.75 },
  { time: "00:50", value: 375.25 },
  { time: "00:51", value: 374.9 },
  { time: "00:52", value: 375.1 },
  { time: "00:53", value: 374.8 },
  { time: "00:54", value: 375.2 },
  { time: "00:55", value: 374.85 },
  { time: "00:56", value: 375.15 },
  { time: "00:57", value: 374.75 },
  { time: "00:58", value: 375.25 },
  { time: "00:59", value: 374.9 },
  { time: "01:00", value: 375.1 },
];

const buttons = [
  { label: "1D", key: "1D" },
  { label: "7D", key: "7D" },
  { label: "1M", key: "1M" },
  { label: "3M", key: "3M" },
  { label: "1Y", key: "1Y" },
  { label: "All", key: "All" },
];

const StyledButton = styled(Button)(({ selected }) => ({
  width: "171px",
  height: "40px",
  border: "2.2px solid rgb(235, 228, 228)",
  backgroundColor: selected ? "#eaeffe" : "#f6f6f9",
  color: selected ? "#110128" : "#373454",
  "&:hover": {
    backgroundColor: selected ? "#eaeffe" : "rgb(233, 232, 232)",
    borderRight: "2.2px solid rgb(235, 228, 228) !important",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: "85%",
  margin: "0 auto",
  padding: "30px",
  [theme.breakpoints.down("md")]: {
    padding: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const PowerConsumptionChart = () => {
  const [selectedButton, setSelectedButton] = useState("7D");

  return (
    <StyledContainer style={{ marginBottom: "70px" }} component={Paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="p" fontSize={16} gutterBottom>
          Power Consumption
        </Typography>
        <ErrorOutlineIcon
          sx={{
            color: "rgb(78, 12, 177)",
            fontSize: "23px",
            marginBottom: "6px",
            marginRight: "81%",
            cursor: "pointer",
          }}
        />
        <TbArrowsDiagonal
          style={{
            color: "rgb(78, 12, 177)",
            cursor: "pointer",
            marginBottom: "10px",
            fontSize: "26px",
          }}
        />
      </Box>
      <Typography variant="h4" mt={4} gutterBottom>
        378.771 kW
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={1000}
          height={200}
          data={data}
          margin={{ top: 40, right: 8 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <YAxis domain={[372, 380]} tickCount={5} tick={{ fontSize: 12 }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

      <ButtonGroup
        color="inherit"
        aria-label="Medium-sized button group"
        sx={{ marginTop: "35px", marginLeft: "8px", width: "100%" }}
      >
        {buttons.map((button) => (
          <StyledButton
            key={button.key}
            selected={selectedButton === button.key}
            onClick={() => setSelectedButton(button.key)}
          >
            {button.label}
          </StyledButton>
        ))}
      </ButtonGroup>
    </StyledContainer>
  );
};

export default PowerConsumptionChart;
