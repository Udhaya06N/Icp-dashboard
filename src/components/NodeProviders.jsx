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
    name: "1G",
    principalID:
      "7k7b7-4pzhf-aivy6-y654t-uqyup-2auiz-ew2cm-4qkl4-nsl4v-bul5k-5qe",
    nodeMachines: "5",
    subnets: "1",
    locations: "1",
  },
  {
    name: "43rd Big Idea Films",
    principalID:
      "sqhxa-h6ili-qkwup-ohzwn-yofnm-vvnp5-kxdhg-saabw-rvua3-xp325-zqe",
    nodeMachines: "13",
    subnets: "2",
    locations: "1",
  },
  {
    name: "87m Neuron, LLC",
    principalID:
      "eipr5-izbom-neyqh-s3ec2-52eww-cyfpg-qfomg-3dpwj-4pffh-34xcu-7qe",
    nodeMachines: "47",
    subnets: "14",
    locations: "3",
  },
  {
    name: "9Yards Capital",
    principalID:
      "spp3m-vawt7-3gyh6-pjz5d-6zidf-up3qb-yte62-otexv-vfpqg-n6awf-lqe",
    nodeMachines: "59",
    subnets: "9",
    locations: "3",
  },
  {
    name: "ACCUSET SOLUTIONS",
    principalID:
      "cp5ib-twnmx-h4dvd-isef2-tu44u-kb2ka-fise5-m4hta-hnxoq-k45mm-hqe",
    nodeMachines: "10",
    subnets: "6",
    locations: "1",
  },
  {
    name: "Adam Dymecki",
    principalID:
      "n32q7-33lmk-m33tr-o5ltb-po6cb-tqqrr-2x6wp-pzhw7-ymizu-o3fyp-sqe",
    nodeMachines: "2",
    subnets: "1",
    locations: "1",
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

const NodeProvider = () => {
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
          Node Providers
        </Typography>
        <StyledBox mr={2}>View All Node Providers</StyledBox>
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
                    marginRight: "40%",
                  }}
                >
                  Name
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
                  Principal ID
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
              <StyledTableHead colSpan={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Subnets
                  <ErrorOutlineIcon
                    sx={{
                      color: "rgb(78, 12, 177)",
                      fontSize: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </StyledTableHead>
              <StyledTableHead colSpan={2} sx={{ paddingRight: "5%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Locations
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
                    {row.name}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/">{row.principalID}</StyledLink>
                </StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/" colSpan={3}>
                    {row.nodeMachines}
                  </StyledLink>
                </StyledTableBody>
                <StyledTableBody colSpan={3}>{row.subnets}</StyledTableBody>
                <StyledTableBody>
                  <StyledLink href="/" colSpan={3}>
                    {row.locations}
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

export default NodeProvider;
