import {
  Box,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { TbArrowsDiagonal } from "react-icons/tb";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { AreaChart, Area } from "recharts";

const listItems1 = [
  "Total Canister State",
  "Run a Node Machine",
  "Total Supply",
  "Circulating Supply",
  "ICP Transactions",
  "Total Burned",
];

const listItems2 = [
  "4.99 TiB",
  "2'591'916",
  "522’146’951 ICP",
  "469’209’642 ICP",
  "13’567’275",
  "172’128 ICP",
];

const listItems3 = [
  "ckBTC Total Supply",
  "ckETH Total Supply",
  "Million Instructions Executed Per Second",
  "NNS Proposals",
  "Neurons' Fund Stake",
  "Neurons' Fund Maturity",
];

const listItems4 = [
  "251.1557 ckBTC",
  "744.4836 ckETH",
  "31’600 MIEPs",
  "132’136",
  "14’942’894 ICP",
  "3’056’168",
];

const StyledContainer = styled(Container)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: "85%",
  margin: "0 auto",
}));

const linkLabels1 = [
  "Total Supply",
  "Circulating Supply",
  "ICP Transactions",
  "Total Burned",
];

const linkLabels3 = [
  "ckBTC Total Supply",
  "ckETH Total Supply",
  "NNS Proposals",
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const PureComponent = () => {
  return (
    <AreaChart
      width={150}
      height={44}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};

const Overview = () => {
  return (
    <StyledContainer style={{ marginBottom: "70px" }} component={Paper}>
      <Box>
        <Typography variant="h5" mt={3.5} mb={3} ml={2}>
          Overview
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            {listItems1.map((label) => (
              <Typography
                key={label}
                fontSize={16}
                mt={1.5}
                mb={4.1}
                component={linkLabels1.includes(label) ? "a" : "div"}
                href={linkLabels1.includes(label) ? "/" : undefined}
                sx={{
                  textDecoration: "none",
                  color: "#605c5c",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  if (linkLabels1.includes(label)) {
                    e.target.style.textDecoration = "underline";
                  }
                }}
                onMouseLeave={(e) => {
                  if (linkLabels1.includes(label)) {
                    e.target.style.textDecoration = "none";
                  }
                }}
              >
                {label}
                {linkLabels1.includes(label) && (
                  <OpenInNewIcon
                    fontSize="15"
                    style={{ marginLeft: 8, cursor: "pointer" }}
                  />
                )}
              </Typography>
            ))}
          </Box>
          <Box>
            {listItems2.map((label) => (
              <Typography
                variant="p"
                component="h6"
                key={label}
                to="/"
                exact
                mt={1.8}
                mb={4.9}
                fontSize={15}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {label}
              </Typography>
            ))}
          </Box>
          <Box>
            {[...Array(6)].map((_, index) => (
              <Box key={index} mb={1.5}>
                <PureComponent />
              </Box>
            ))}
          </Box>
          <Box>
            {[...Array(6)].map((_, index) => (
              <Box key={index} mb={3.8} mt={2}>
                <TbArrowsDiagonal
                  size={22}
                  style={{
                    color: "rgb(78, 12, 177)",
                    cursor: "pointer",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box>
            {listItems3.map((label) => (
              <Typography
                key={label}
                fontSize={16}
                width={200}
                mt={1}
                mb={3.8}
                component={linkLabels3.includes(label) ? "a" : "div"}
                href={linkLabels3.includes(label) ? "/" : undefined}
                style={{
                  textDecoration: "none",
                  color: "#605c5c",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => {
                  if (linkLabels3.includes(label)) {
                    e.target.style.textDecoration = "underline";
                  }
                }}
                onMouseLeave={(e) => {
                  if (linkLabels3.includes(label)) {
                    e.target.style.textDecoration = "none";
                  }
                }}
              >
                {label}
                {linkLabels3.includes(label) && (
                  <OpenInNewIcon
                    fontSize="15"
                    style={{ marginLeft: 8, cursor: "pointer" }}
                  />
                )}
              </Typography>
            ))}
          </Box>
          <Box>
            {listItems4.map((label) => (
              <Typography
                variant="p"
                component="h6"
                key={label}
                to="/"
                exact
                mt={1.8}
                mb={4.9}
                fontSize={15}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {label}
              </Typography>
            ))}
          </Box>
          <Box>
            {[...Array(6)].map((_, index) => (
              <Box key={index} mb={1.5}>
                <PureComponent />
              </Box>
            ))}
          </Box>
          <Box>
            {[...Array(6)].map((_, index) => (
              <Box key={index} mb={3.9} mt={2}>
                {index === 3 ? (
                  <Box height={22} />
                ) : (
                  <TbArrowsDiagonal
                    size={22}
                    style={{
                      color: "rgb(78, 12, 177)",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </StyledContainer>
  );
};

export default Overview;
