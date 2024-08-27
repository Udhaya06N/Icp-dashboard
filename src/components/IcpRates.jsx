import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  styled,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { TbArrowsDiagonal } from "react-icons/tb";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const data1 = [
  { time: "00:00", value: 44.2 },
  { time: "00:01", value: 44.5 },
  { time: "00:02", value: 44.1 },
  { time: "00:03", value: 44.4 },
  { time: "00:04", value: 44.3 },
  { time: "00:05", value: 44.6 },
  { time: "00:06", value: 44.2 },
  { time: "00:07", value: 44.5 },
  { time: "00:08", value: 44.1 },
  { time: "00:09", value: 44.4 },
  { time: "00:10", value: 44.3 },
  { time: "00:11", value: 44.6 },
  { time: "00:12", value: 44.2 },
  { time: "00:13", value: 44.5 },
  { time: "00:14", value: 44.1 },
  { time: "00:15", value: 44.4 },
  { time: "00:16", value: 44.3 },
  { time: "00:17", value: 44.6 },
  { time: "00:18", value: 44.2 },
  { time: "00:19", value: 44.5 },
  { time: "00:20", value: 44.1 },
  { time: "00:21", value: 44.4 },
  { time: "00:22", value: 44.3 },
  { time: "00:23", value: 44.6 },
  { time: "00:24", value: 44.2 },
  { time: "00:25", value: 44.5 },
  { time: "00:26", value: 44.1 },
  { time: "00:27", value: 44.4 },
  { time: "00:28", value: 44.3 },
  { time: "00:29", value: 44.6 },
  { time: "00:30", value: 44.2 },
];

const data2 = [
  { time: "00:00", value: 6.21, avg: 6.22 },
  { time: "00:01", value: 6.2, avg: 6.21 },
  { time: "00:02", value: 6.22, avg: 6.23 },
  { time: "00:03", value: 6.21, avg: 6.22 },
  { time: "00:04", value: 6.2, avg: 6.21 },
  { time: "00:05", value: 6.22, avg: 6.23 },
  { time: "00:06", value: 6.21, avg: 6.22 },
  { time: "00:07", value: 6.2, avg: 6.21 },
  { time: "00:08", value: 6.22, avg: 6.23 },
  { time: "00:09", value: 6.21, avg: 6.22 },
  { time: "00:10", value: 6.2, avg: 6.21 },
  { time: "00:11", value: 6.22, avg: 6.23 },
  { time: "00:12", value: 6.21, avg: 6.22 },
  { time: "00:13", value: 6.2, avg: 6.21 },
  { time: "00:14", value: 6.22, avg: 6.23 },
  { time: "00:15", value: 6.23, avg: 6.22 },
];

const buttons1 = [
  { label: "1D", key: "1D" },
  { label: "7D", key: "7D" },
  { label: "1M", key: "1M" },
  { label: "3M", key: "3M" },
  { label: "1Y", key: "1Y" },
  { label: "All", key: "All" },
];

const buttons2 = [
  { label: "1D", key: "1D" },
  { label: "7D", key: "7D" },
  { label: "1M", key: "1M" },
  { label: "3M", key: "3M" },
];

const StyledButton = styled(Button)(({ selected }) => ({
  width: "80px",
  height: "45px",
  border: "2.2px solid rgb(235, 228, 228)",
  backgroundColor: selected ? "#eaeffe" : "#f6f6f9",
  color: selected ? "#110128" : "#373454",
  "&:hover": {
    backgroundColor: selected ? "#eaeffe" : "rgb(233, 232, 232)",
    borderRight: "2.2px solid rgb(235, 228, 228) !important",
  },
}));

const IcpRates = () => {
  const [selectedButtons1, setSelectedButtons1] = useState("7D");
  const [selectedButtons2, setSelectedButtons2] = useState("1M");

  return (
    <Grid
      container
      justifyContent="space-between"
      gap={1}
      sx={{
        width: "85%",
        margin: "0 auto",
        marginBottom: "70px",
      }}
    >
      <Grid item xs={12} sm={5.8}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Grid container direction="column" mt={2}>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="p" fontSize={16} fontWeight={400} ml={2}>
                    Finalization Rate
                  </Typography>
                  <TbArrowsDiagonal
                    style={{
                      color: "rgb(78, 12, 177)",
                      cursor: "pointer",
                      marginBottom: "10px",
                      fontSize: "26px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item mt={1}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    marginTop: "15px",
                    marginLeft: "14px",
                  }}
                >
                  <Typography variant="h4">44.53</Typography>
                  <Typography
                    variant="div"
                    fontSize={20}
                    fontWeight={400}
                    ml={1}
                    mt={1}
                    color="text.secondary"
                  >
                    Blocks/s
                  </Typography>
                </Box>
              </Grid>
              <Grid item mt={4}>
                <LineChart
                  width={500}
                  height={180}
                  data={data1}
                  style={{ marginRight: 40 }}
                >
                  <Line type="monotone" dataKey="value" stroke="#7A28CB" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip />
                </LineChart>
              </Grid>
              <Grid item>
                <ButtonGroup
                  color="inherit"
                  aria-label="Medium-sized button group"
                  sx={{ marginTop: "35px", marginLeft: "8px" }}
                >
                  {buttons1.map((button) => (
                    <StyledButton
                      key={button.key}
                      selected={selectedButtons1 === button.key}
                      onClick={() => setSelectedButtons1(button.key)}
                    >
                      {button.label}
                    </StyledButton>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Grid container direction="column" mt={2}>
              <Grid item>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="p" fontSize={16} fontWeight={400} ml={2}>
                    Conversion Rate
                  </Typography>
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "23px",
                      marginBottom: "6px",
                      marginRight: "63%",
                      cursor: "pointer",
                    }}
                  />
                  <TbArrowsDiagonal
                    style={{
                      color: "rgb(78, 12, 177)",
                      cursor: "pointer",
                      fontSize: "26px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item>
                <Typography
                  variant="p"
                  fontSize={17}
                  fontWeight={400}
                  ml={2}
                  sx={{ color: "#373454" }}
                >
                  (ICP-TCYCLES)
                </Typography>
              </Grid>
              <Grid item mr={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    marginTop: "20px",
                  }}
                >
                  <Typography variant="h4" ml={2}>
                    6.3966
                  </Typography>
                  <Typography
                    variant="div"
                    fontSize={20}
                    fontWeight={400}
                    mr={1}
                    mt={1}
                    color="text.secondary"
                  >
                    TCYCLES
                  </Typography>
                  <Box
                    ml={2.2}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Box
                        width={19}
                        height={19}
                        borderRadius="50%"
                        bgcolor="rgb(12, 176, 163)"
                        mr={0.5}
                      />
                      <Typography variant="p" fontSize={13}>
                        30-Day Moving Average*
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" ml={0.5}>
                      <Box
                        width={19}
                        height={19}
                        borderRadius="50%"
                        bgcolor="rgb(78, 12, 177)"
                        mr={0.5}
                      />
                      <Typography variant="p" fontSize={13}>
                        Current Role
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item mt={3}>
                <LineChart width={500} height={180} data={data2}>
                  <Line type="monotone" dataKey="value" stroke="#7A28CB" />
                  <Line type="monotone" dataKey="avg" stroke="#FF6347" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <Tooltip />
                </LineChart>
              </Grid>
              <Grid item>
                <ButtonGroup
                  color="inherit"
                  aria-label="Medium-sized button group"
                  sx={{ marginTop: "25px", marginLeft: "8px" }}
                >
                  {buttons2.map((button) => (
                    <StyledButton
                      key={button.key}
                      selected={selectedButtons2 === button.key}
                      onClick={() => setSelectedButtons2(button.key)}
                    >
                      {button.label}
                    </StyledButton>
                  ))}
                </ButtonGroup>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IcpRates;
