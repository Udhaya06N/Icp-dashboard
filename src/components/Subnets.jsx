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
    id: "2fq7c-slacv-26cgz-vzbx2-2jrcs-5edph-i5s2j-tck77-c3rlz-iobzx-mqe",
    type: "Application",
    nodeMachines: "13",
    canisters: "83’822",
  },
  {
    id: "3hhby-wmtmw-umt4t-7ieyg-bbiig-xiylg-sblrt-voxgt-bqckd-a75bf-rqe",
    type: "Application",
    nodeMachines: "13",
    canisters: "15’445",
  },
  {
    id: "4ecnw-byqwz-dtgss-ua2mh-pfvs7-c3lct-gtf4e-hnu75-j7eek-iifqm-sqe",
    type: "Application",
    nodeMachines: "13",
    canisters: "5’675",
  },
  {
    id: "4zbus-z2bmt-ilreg-xakz4-6tyre-hsqj4-slb4g-zjwqo-snjcc-iqphi-3qe",
    type: "Application",
    nodeMachines: "13",
    canisters: "103",
  },
  {
    id: "5kdm2-62fc6-fwnja-hutkz-ycsnm-4z33i-woh43-4cenu-ev7mi-gii6t-4ae",
    type: "Application",
    nodeMachines: "12/13",
    canisters: "10’287",
  },
  {
    id: "6pbhf-qzpdk-kuqbr-pklfa-5ehhf-jfjps-zsj6q-57nrl-kzhpd-mu7hc-vae",
    type: "Application",
    nodeMachines: "12/13",
    canisters: "18’481",
  },
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
  paddingTop: "22px",
  paddingBottom: "22px",
  paddingRight: "160px",
  cursor: "pointer",
  marginRight: "20px",
});

const StyledBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  width: "120px",
  padding: "12px",
  fontSize: "15px",
  border: "1px solid rgb(214, 213, 213)",
  backgroundColor: "rgb(243, 243, 243)",
  color: "rgb(78, 78, 78)",
  borderRadius: "10px",
});

const Subnets = () => {
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
          Subnets
        </Typography>
        <StyledBox mr={2}>View All Subnets</StyledBox>
      </Box>
      <StyledTableContainer component={Paper} sx={{ marginBottom: "70px" }}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableHead>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "90%",
                  }}
                >
                  ID
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Type
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead colSpan={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  Node Machines
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead colSpan={3}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "60%",
                  }}
                >
                  Canisters
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableBody>
                  <StyledLink href="/" marginTop={1}>
                    {row.id}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody sx={{ paddingLeft: "7%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "rgb(161, 161, 238)",
                      color: "black",
                      fontSize: "13px",
                      borderRadius: "20px",
                      padding: "3px 7px",
                      width: "90px",
                      textAlign: "center",
                    }}
                  >
                    {row.type}
                  </Typography>
                </StyledTableBody>
                <StyledTableBody colSpan={3} sx={{ paddingLeft: "50px" }}>
                  {row.nodeMachines}
                </StyledTableBody>
                <StyledTableBody colSpan={3}>{row.canisters}</StyledTableBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

export default Subnets;
