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
    id: "3431489380209048756",
    state: "Spawning",
    stakedIcp: "0 ICP",
    dissolveDelay: "1 week",
    age: "-",
    votingPower: "-",
  },
  {
    id: "13757262119454849196",
    state: "Spawning",
    stakedIcp: "0 ICP",
    dissolveDelay: "1 week",
    age: "-",
    votingPower: "-",
  },
  {
    id: "5567185649935408397",
    state: "Spawning",
    stakedIcp: "0 ICP",
    dissolveDelay: "1 week",
    age: "-",
    votingPower: "-",
  },
  {
    id: "11257628376850163395",
    state: "Not Dissolving",
    stakedIcp: "299.9999 ICP",
    dissolveDelay: "8 years",
    age: "1 day",
    votingPower: "600",
  },
  {
    id: "4243395936759349825",
    state: "Spawning",
    stakedIcp: "0 ICP",
    dissolveDelay: "6 days",
    age: "-",
    votingPower: "-",
  },
  {
    id: "11214665915374295624",
    state: "Spawning",
    stakedIcp: "0 ICP",
    dissolveDelay: "6 days",
    age: "-",
    votingPower: "-",
  },
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  width: "85%",
  margin: "0 auto",
}));

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
  paddingTop: "13px",
  paddingBottom: "13px",
  paddingRight: "70px",
  cursor: "pointer",
});

const StyledBox = styled(Box)({
  display: "flex",
  textAlign: "center",
  width: "100px",
  padding: "10px",
  fontSize: "15px",
  border: "1px solid rgb(214, 213, 213)",
  backgroundColor: "rgb(243, 243, 243)",
  color: "rgb(78, 78, 78)",
  borderRadius: "10px",
});

const statusStyles = (state) => {
  if (state === "Spawning") {
    return {
      backgroundColor: "rgb(161, 161, 238)",
      color: "black",
      fontSize: "13px",
      borderRadius: "20px",
      padding: "3px 7px",
      width: "70px",
      textAlign: "center",
    };
  }
  return {
    color: "black",
    fontSize: "13px",
    borderRadius: "20px",
    padding: "3px 7px",
    width: "100px",
    textAlign: "center",
    backgroundColor: "rgb(215, 228, 233)",
  };
};

const NeuronsTable = () => {
  return (
    <StyledTableContainer component={Paper} sx={{ marginBottom: "70px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={6} align="left">
              <Typography
                variant="h5"
                fontSize={21}
                fontWeight={400}
                ml={2}
                mt={2}
                mb={2}
              >
                Neurons
              </Typography>
            </TableCell>
            <TableCell align="right" colSpan={6} sx={{ paddingLeft: "17%" }}>
              <StyledBox>View Neurons</StyledBox>
            </TableCell>
          </TableRow>
          <TableRow>
            <StyledTableHead>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20%",
                }}
              >
                ID & Name
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
                  marginRight: "70%",
                }}
              >
                State
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
                  marginRight: "35%",
                }}
              >
                Staked ICP
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
                }}
              >
                Dissolve Delay
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
                  marginRight: "60%",
                }}
              >
                Age
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
                Voting Power
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
              <StyledTableBody>
                <Typography variant="h6" sx={statusStyles(row.state)}>
                  {row.state}
                </Typography>
              </StyledTableBody>
              <StyledTableBody colSpan={3}>{row.stakedIcp}</StyledTableBody>
              <StyledTableBody colSpan={2}>{row.dissolveDelay}</StyledTableBody>
              <StyledTableBody colSpan={2}>{row.age}</StyledTableBody>
              <StyledTableBody colSpan={1}>{row.votingPower}</StyledTableBody>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default NeuronsTable;
