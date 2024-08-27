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
    transactionHash:
      "c0db5d5bd11fd26ba6832fbbff16dc91f5829f713caf0601d4...3070",
    amount: "0.0127275 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:31 UTC, 1 hour ago",
    from: "98c7cb76...a8a1",
    to: "e2d06b26...f51f",
  },
  {
    transactionHash:
      "c0c5ba059d4ded7cc21120923c0001dc652cd9a790e5113a36...2c65",
    amount: "140.21383036 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:31 UTC, 1 hour ago",
    from: "178197f9...c64f",
    to: "48f561dd...be68",
  },
  {
    transactionHash:
      "239e5ce7a374457ddd44d8b1f0067d66c89e672b8a059a7128...faa2",
    amount: "0.069 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:31 UTC, 1 hour ago",
    from: "40b0ddc8...f9b4",
    to: "f9dab4be...f383",
  },
  {
    transactionHash:
      "dade9b5f0f2f3627f95c2ebad4b5a0079cb9d48096aca6d805...c5cc",
    amount: "329.77902584 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:21 UTC, 1 hour ago",
    from: "000e9f63...0a53",
    to: "dd15f304...8a74",
  },
  {
    transactionHash:
      "9d49fb2adcde0e7c601acab9401208eb76604028be3f21ab40...0a9f",
    amount: "0.00888267 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:12 UTC, 1 hour ago",
    from: "522d8a4d...f1f0",
    to: "72e858af...ced7",
  },
  {
    transactionHash:
      "76a102e8eb23e616160419a8fa84116767b11dc40dbc2df47c...43d7",
    amount: "0.17 ICP",
    type: "Transfer",
    timestamp: "2024-08-24, 17:14:11 UTC, 1 hour ago",
    from: "	b94bc60b...c416",
    to: "98c7cb76...a8a1",
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
  marginBottom: "70px",
  position: "relative",
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
  padding: "22px 50px",
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

const IcpTransactions = () => {
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
          ICP Transactions
        </Typography>
        <StyledBox mr={2}>View All ICP Transactions</StyledBox>
      </Box>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableHead>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "62%",
                  }}
                >
                  Transaction Hash
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
                    marginRight: "24%",
                  }}
                >
                  Amount
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
                    marginRight: "24%",
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
              <StyledTableHead>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "50%",
                  }}
                >
                  Timestamp
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
                    marginRight: "34%",
                  }}
                >
                  From
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
                    marginRight: "38%",
                  }}
                >
                  To
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
                    {row.transactionHash}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody>{row.amount}</StyledTableBody>
                <StyledTableBody>
                  {" "}
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "rgb(161, 161, 238)",
                      color: "black",
                      fontSize: "12px",
                      borderRadius: "20px",
                      padding: "3px 7px",
                      width: "80px",
                      textAlign: "center",
                    }}
                  >
                    {row.type}
                  </Typography>
                </StyledTableBody>
                <StyledTableBody colSpan={3}>{row.timestamp}</StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/" colSpan={3}>
                    {row.from}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/" colSpan={3}>
                    {row.to}
                  </StyledLink>
                </StyledTableBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};

export default IcpTransactions;
