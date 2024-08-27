import {
  Grid,
  Card,
  CardContent,
  Typography,
  ButtonGroup,
  Button,
  Box,
  styled,
} from "@mui/material";
import { TbArrowsDiagonal } from "react-icons/tb";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { LineChart, Line, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  { name: "1D", Canisters: 500000, Transactions: 100, CycleBurnRate: 200 },
  { name: "2D", Canisters: 510000, Transactions: 120, CycleBurnRate: 220 },
  { name: "3D", Canisters: 520000, Transactions: 130, CycleBurnRate: 240 },
  { name: "4D", Canisters: 530000, Transactions: 140, CycleBurnRate: 260 },
  { name: "5D", Canisters: 540000, Transactions: 150, CycleBurnRate: 280 },
  { name: "6D", Canisters: 550000, Transactions: 160, CycleBurnRate: 300 },
  { name: "7D", Canisters: 560000, Transactions: 170, CycleBurnRate: 320 },
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
  { label: "1Y", key: "1Y" },
  { label: "All", key: "All" },
];

const StyledButton = styled(Button)(({ selected }) => ({
  width: "55px",
  height: "45px",
  border: "2.2px solid rgb(235, 228, 228)",
  backgroundColor: selected ? "#eaeffe" : "#f6f6f9",
  color: selected ? "#110128" : "#373454",
  "&:hover": {
    backgroundColor: selected ? "#eaeffe" : "rgb(233, 232, 232)",
    borderRight: "2.2px solid rgb(235, 228, 228) !important",
  },
}));

const IcpGraphs = () => {
  const [selectedButtons1, setSelectedButtons1] = useState("1M");
  const [selectedButtons2, setSelectedButtons2] = useState("7D");
  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={2}
      sx={{
        width: "85%",
        margin: "0 auto",
        marginBottom: "70px",
      }}
    >
      <Grid item xs={12} sm={4}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Box
              mt={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="p" fontSize={16} fontWeight={400} ml={1}>
                Canisters
              </Typography>
              <ErrorOutlineIcon
                sx={{
                  color: "rgb(78, 12, 177)",
                  fontSize: "23px",
                  marginBottom: "6px",
                  marginRight: "58%",
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
            <Typography
              variant="p"
              fontSize={15}
              fontWeight={400}
              ml={1}
              sx={{ color: "#373454" }}
            >
              (Dapps/Smart Contracts)
            </Typography>
            <Typography
              variant="h4"
              component="p"
              mt={2}
              ml={1}
              mb={4}
              fontSize={30}
            >
              528’018
            </Typography>
            <LineChart width={300} height={150} data={data}>
              <Line type="monotone" dataKey="Canisters" stroke="#7A28CB" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
            <ButtonGroup
              color="inherit"
              aria-label="Medium-sized button group"
              sx={{ marginTop: "35px" }}
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
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Box
              mt={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="p" fontSize={16} fontWeight={400} ml={1}>
                Transactions
              </Typography>
              <TbArrowsDiagonal
                style={{
                  color: "rgb(78, 12, 177)",
                  cursor: "pointer",
                  fontSize: "26px",
                }}
              />
            </Box>
            <Box
              mt={4}
              pt={2}
              ml={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Typography variant="h4" component="h1" mb={4} fontSize={30}>
                4’548.48
              </Typography>
              <Typography
                variant="h6"
                component="p"
                fontWeight={400}
                mr={1}
                mt={0.7}
              >
                TX/s
              </Typography>
              <Box
                mb={3}
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
                  <Typography variant="body2" fontSize={13} mr={1}>
                    Update
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Box
                    width={19}
                    height={19}
                    borderRadius="50%"
                    bgcolor="rgb(78, 12, 177)"
                    mr={0.5}
                  />
                  <Typography variant="body2" fontSize={13}>
                    Query
                  </Typography>
                </Box>
              </Box>
            </Box>
            <LineChart width={300} height={150} data={data}>
              <Line type="monotone" dataKey="Transactions" stroke="#34C759" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
            <ButtonGroup
              color="inherit"
              aria-label="Medium-sized button group"
              sx={{ marginTop: "35px" }}
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
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card variant="outlined" sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Box
              mt={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="p" fontSize={16} fontWeight={400} ml={1}>
                Cycle Burn Rate
              </Typography>
              <TbArrowsDiagonal
                style={{
                  color: "rgb(78, 12, 177)",
                  cursor: "pointer",
                  fontSize: "26px",
                }}
              />
            </Box>
            <Box
              mt={1}
              ml={1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h4"
                component="p"
                mt={3}
                mb={4}
                fontSize={30}
              >
                10’456’532’768
              </Typography>
              <Typography variant="h6" fontWeight={400} mr={2} mt={3.7}>
                Cycles/s
              </Typography>
            </Box>
            <LineChart width={300} height={150} data={data}>
              <Line type="monotone" dataKey="CycleBurnRate" stroke="#FFC107" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
            </LineChart>
            <ButtonGroup
              color="inherit"
              aria-label="Medium-sized button group"
              sx={{ marginTop: "38px" }}
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
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IcpGraphs;
