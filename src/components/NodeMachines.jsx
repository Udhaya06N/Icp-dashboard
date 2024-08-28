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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const rowData = [
  {
    id: "235hh-hmjhq-dejel-3q5oi-pdz66-dygbp-yi2sy-zmuiq...",
    location: "Utah 1",
    dataCenterOwner: "FiberState",
    nodeProvider: "Privoxy Solutions, LLC",
    subnetId: "-",
    type: "Replica",
    status: "Awaiting",
  },
  {
    id: "23jbm-6z6mi-ki2ut-fkz5x-yy4uy-6llls-yyodh-xv537-2q...",
    location: "Melbourne 2",
    dataCenterOwner: "NEXTDC",
    nodeProvider: "Icaria Systems Pty Ltd ",
    subnetId: "o3ow2-2ipam-6fcjo-3j5...",
    type: "Replica",
    status: "Active",
  },
  {
    id: "23ykg-dluh4-32ndj-zw7au-wa3id-ptbpg-mtqk3-7xpc...",
    location: "Gauteng 2",
    dataCenterOwner: "Africa Data Centres",
    nodeProvider: "Karel Frank",
    subnetId: "-",
    type: "Replica",
    status: "Awaiting",
  },
  {
    id: "24fcm-3onfs-cykax-al4jb-gvdd3-u76zl-ht6ef-hcsbc-x...",
    location: "Vilnius 1",
    dataCenterOwner: "Baltneta",
    nodeProvider: "MB Patrankos šūvis",
    subnetId: "tdb26-jop6k-aogll-7ltgs...",
    type: "Replica",
    status: "Active",
  },
  {
    id: "253m2-atzdo-rltqy-tmnhr-fvspg-fat3p-sdbjp-7q3jg-d...",
    location: "Atlanta 2",
    dataCenterOwner: "Datasite",
    nodeProvider: "Giant Leaf, LLC",
    subnetId: "-",
    type: "Replica",
    status: "Awaiting",
  },
  {
    id: "25a7h-yfxtk-5wcoz-p56pu-bzpsa-xkr4h-7mlkz-slh2e-i...",
    location: "Navi Mumbai 1",
    dataCenterOwner: "Rivram",
    nodeProvider: "Rivram Inc",
    subnetId: "yinp6-35cfo-wgcd2-oc...",
    type: "Replica",
    status: "Active",
  },
];

const headers = [
  "ID",
  "Location",
  "Data Center Owner",
  "Node Provider",
  "Subnet ID",
  "Type",
  "Status",
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
  paddingRight: "40px",
  color: "rgb(78, 78, 78)",
  fontSize: "13px",
  cursor: "pointer",
});

const StyledTableBody = styled(TableCell)({
  padding: "13px 50px",
  cursor: "pointer",
});

const StyledBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  width: "auto",
  padding: "12px",
  fontSize: "15px",
  border: "1px solid rgb(214, 213, 213)",
  backgroundColor: "rgb(243, 243, 243)",
  color: "rgb(78, 78, 78)",
  borderRadius: "10px",
});

const statusStyles = (status) => {
  if (status === "Active") {
    return {
      backgroundColor: "rgb(214, 253, 214)",
      color: "black",
      fontSize: "12px",
      borderRadius: "20px",
      padding: "3px 14px",
      width: "35px",
    };
  }
  return {
    backgroundColor: "rgb(243, 208, 208)",
    color: "black",
    fontSize: "12px",
    borderRadius: "20px",
    padding: "3px 7px",
    width: "50px",
  };
};

const NodeMachines = () => {
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
          Node Machines
        </Typography>
        <StyledBox mr={2}>View All Node Machines</StyledBox>
      </Box>
      <StyledTableContainer component={Paper} sx={{ marginBottom: "70px" }}>
        <StyledTable stickyHeader>
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <ArrowDropDownIcon
                      sx={{
                        backgroundColor: "#f6f6f9",
                        padding: "7px",
                        borderRadius: "50%",
                        marginRight: "30px",
                      }}
                    />
                    <StyledLink href="/" marginTop={1}>
                      {row.id}
                    </StyledLink>
                  </Box>
                </StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/">{row.location}</StyledLink>
                </StyledTableBody>
                <StyledTableBody>{row.dataCenterOwner}</StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/">{row.nodeProvider}</StyledLink>
                </StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/">{row.subnetId}</StyledLink>
                </StyledTableBody>
                <StyledTableBody>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "rgb(161, 161, 238)",
                      color: "black",
                      fontSize: "12px",
                      borderRadius: "20px",
                      padding: "3px 7px",
                      width: "50px",
                      textAlign: "center",
                    }}
                  >
                    {row.type}
                  </Typography>
                </StyledTableBody>
                <StyledTableBody>
                  <Typography variant="h6" sx={statusStyles(row.status)}>
                    {row.status}
                  </Typography>
                </StyledTableBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

export default NodeMachines;
