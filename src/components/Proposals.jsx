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
    id: "132155",
    title: "Upgrade the Governance Canister to Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’632’901",
  },
  {
    id: "132154",
    title: "Upgrade the Root Canister to Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’579’735",
  },
  {
    id: "132153",
    title: "Upgrade the Lifeline Canister to Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’561’728",
  },
  {
    id: "132152",
    title: "Upgrade the Sns-wasm Canister to Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’539’999",
  },
  {
    id: "132151",
    title: "Publish SNS Swap WASM Built at Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’549’698",
  },
  {
    id: "132150",
    title: "Publish SNS Root WASM Built at Commit a020714",
    topic: "System Canister Management",
    status: "Open",
    votes: "8’533’920",
  },
];

const headers = ["ID", "Title", "Topic", "Status", "Votes"];

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
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingRight: "70px",
  cursor: "pointer",
});

const StyledBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  width: "130px",
  padding: "12px",
  fontSize: "15px",
  border: "1px solid rgb(214, 213, 213)",
  backgroundColor: "rgb(243, 243, 243)",
  color: "rgb(78, 78, 78)",
  borderRadius: "10px",
});

const Proposals = () => {
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
          Proposals
        </Typography>
        <StyledBox mr={2}>View All Proposals</StyledBox>
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
                    marginLeft: "20%",
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
                    marginRight: "86%",
                  }}
                >
                  Title
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
                    marginRight: "45%",
                  }}
                >
                  Topic
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead colSpan={4}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "20%",
                  }}
                >
                  Status
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead colSpan={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "60%",
                  }}
                >
                  Votes
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
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: "row",
                    }}
                  >
                    <ArrowDropDownIcon
                      sx={{
                        backgroundColor: "rgb(226, 225, 225)",
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
                <StyledTableBody>{row.title}</StyledTableBody>
                <StyledTableBody colSpan={4} sx={{ paddingLeft: "4%" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "rgb(161, 161, 238)",
                      color: "black",
                      fontSize: "13px",
                      borderRadius: "20px",
                      padding: "3px 7px",
                      width: "200px",
                      textAlign: "center",
                    }}
                  >
                    {row.topic}
                  </Typography>
                </StyledTableBody>
                <StyledTableBody colSpan={4}>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "rgb(245, 245, 113)",
                      color: "black",
                      fontSize: "13px",
                      borderRadius: "20px",
                      padding: "3px 7px",
                      width: "50px",
                      textAlign: "center",
                    }}
                  >
                    {row.status}
                  </Typography>
                </StyledTableBody>
                <StyledTableBody colSpan={3} sx={{ marginLeft: "20px" }}>
                  {row.votes}
                </StyledTableBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

export default Proposals;
