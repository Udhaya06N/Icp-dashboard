import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Link,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const rowData = [
  {
    dcId: "an1",
    name: "Antwerp",
    owner: "Datacenter United",
    region: "Europe,BE,Flanders",
    subnets: "18",
    nodeMachines: "28",
    coordinates: "51.219, 4.403",
  },
  {
    dcId: "ar1",
    name: "CABA 1",
    owner: "SyT - Servicios y Telecomunica...",
    region: "South America,AR,CABA",
    subnets: "4",
    nodeMachines: "4",
    coordinates: "-34.606, -58.379",
  },
  {
    dcId: "at1",
    name: "Atlanta",
    owner: "Flexential",
    region: "North America,US,Georgia",
    subnets: "4",
    nodeMachines: "28",
    coordinates: "33.684, -84.382",
  },
  {
    dcId: "at2",
    name: "Atlanta 2",
    owner: "Datasite",
    region: "North America,US,Georgia",
    subnets: "6",
    nodeMachines: "27",
    coordinates: "33.818, -84.391",
  },
  {
    dcId: "aw1",
    name: "Allentown",
    owner: "Tierpoint",
    region: "North America,US,Pennsylvania",
    subnets: "9",
    nodeMachines: "27",
    coordinates: "40.602, -75.471",
  },
  {
    dcId: "ba1",
    name: "Barreiro 1",
    owner: "Online",
    region: "Europe,PT,Barreiro",
    subnets: "2",
    nodeMachines: "3",
    coordinates: "38.665, -9.067",
  },
];

const headers = [
  "DC ID",
  "Name",
  "Owner",
  "Region",
  "Subnets",
  "Node Machines",
  "Coordinates",
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: "85%",
  margin: "0 auto",
  overflowX: "auto",
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    height: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(117, 54, 212)",
    borderRadius: "4px",
  },
}));

const StyledTable = styled(Table)({
  display: "block",
  width: "100%",
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledLink = styled(Link)({
  color: "rgb(117, 54, 212)",
  textDecoration: "none",
  textAlign: "center",
  "&:hover": {
    textDecoration: "underline",
  },
});

const StyledTableHead = styled(TableCell)({
  color: "rgb(78, 78, 78)",
  fontSize: "13px",
  cursor: "pointer",
});

const StyledTableBody = styled(TableCell)({
  padding: "22px 80px",
  cursor: "pointer",
});

const StyledBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  width: "150px",
  padding: "12px",
  fontSize: "15px",
  border: "1px solid rgb(214, 213, 213)",
  backgroundColor: "rgb(243, 243, 243)",
  color: "rgb(78, 78, 78)",
  borderRadius: "10px",
});

const DataCenters = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
          border: "1px solid #ccc",
          boxSizing: "border-box",
          margin: "0 auto",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          borderBottom: "none",
        }}
      >
        <Typography
          variant="h5"
          fontSize={21}
          fontWeight={400}
          ml={5}
          mt={4}
          mb={3}
          my={4}
        >
          Data Centers
        </Typography>
        <StyledBox mr={2}>View All Data Centers</StyledBox>
      </Box>
      <StyledTableContainer component={Paper} sx={{ marginBottom: "70px" }}>
        <StyledTable>
          <TableHead>
            <TableRow>
              {headers.map((title, index) => (
                <StyledTableHead key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      width: "50px",
                      margin: "0 auto",
                    }}
                  >
                    {title}
                    <ErrorOutlineIcon
                      sx={{
                        color: "rgb(78, 12, 177)",
                        fontSize: "18px",
                        marginTop: "2px",
                        marginLeft: "4px",
                      }}
                    />
                  </Box>
                </StyledTableHead>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableBody>
                  <StyledLink href="/" marginTop={1}>
                    {row.dcId}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody>{row.name}</StyledTableBody>
                <StyledTableBody sx={{ paddingLeft: "7%" }}>
                  {row.owner}
                </StyledTableBody>
                <StyledTableBody sx={{ paddingLeft: "7%" }}>
                  {row.region}
                </StyledTableBody>
                <StyledTableBody>{row.subnets}</StyledTableBody>
                <StyledTableBody>{row.nodeMachines}</StyledTableBody>
                <StyledTableBody>{row.coordinates}</StyledTableBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

export default DataCenters;
