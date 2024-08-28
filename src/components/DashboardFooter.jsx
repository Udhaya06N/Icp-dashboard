import { Box, Link, Stack, styled, Typography } from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

const dashboardLinks = [
  "Home",
  "Governance",
  "Neurons",
  "Subnets",
  "Data Centers",
  "Releases",
  "Canisters",
  "ICP Transactions",
  "Circulation",
  "Node Providers",
  "Node Machines",
  "SNS",
  "SNS Tokenomics Analyzer",
  "Bitcoin",
  "Ethereum",
  "Changelog",
];

const internetLinks = [
  "Internet Computer Home",
  "Run a Node Machine",
  "Submit a Proposal",
];

const supportLinks = [
  "IC Support",
  "View Status",
  "IC Wiki",
  "Developer Forum",
  "Developer Grants",
];

const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#121212" : "rgb(243, 243, 243)",
}));

const StyledLinks = styled(Link)({
  color: "grey",
  marginTop: "15px",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const DashboardFooter = () => {
  return (
    <FooterBox>
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          marginTop: "70px",
        }}
        mb={6}
      >
        <img
          src="https://dashboard.internetcomputer.org/_next/static/media/icp_dashboard_infinity_logo_light_theme.c2986525.svg"
          alt="Lcp logo"
          width={190}
          style={{ position: "relative", marginBottom: "50%" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="p"
            component="h6"
            sx={{ color: "rgb(102, 102, 102)" }}
            fontSize={{ xs: 14, sm: 15 }}
          >
            ICP Dashboard
          </Typography>
          {dashboardLinks.map((label) => (
            <StyledLinks key={label} href="/" exact>
              {label}
            </StyledLinks>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "center", sm: "left" },
            marginTop: { xs: 4, sm: 0 },
          }}
        >
          <Typography
            variant="p"
            component="h6"
            sx={{ color: "rgb(102, 102, 102)" }}
            fontSize={{ xs: 14, sm: 15 }}
          >
            Internet Computer
          </Typography>
          {internetLinks.map((label) => (
            <StyledLinks key={label} href="/">
              {label}
              <CallMadeIcon
                sx={{ fontSize: 18, marginLeft: "4px", paddingTop: "5px" }}
              />
            </StyledLinks>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "center", sm: "left" },
            marginTop: { xs: 4, sm: 0 },
          }}
        >
          <Typography
            variant="p"
            component="h6"
            sx={{ color: "rgb(102, 102, 102)" }}
            fontSize={{ xs: 14, sm: 15 }}
          >
            Support
          </Typography>
          {supportLinks.map((label) => (
            <StyledLinks key={label} href="/">
              {label === "View Status" ? (
                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", sm: "left" }}
                >
                  <Box mt={1}>{label}</Box>
                  <Box ml={1}>
                    <Typography
                      variant="h6"
                      sx={{
                        backgroundColor: "rgb(232, 255, 232)",
                        color: "green",
                        fontSize: "12px",
                        borderRadius: "20px",
                        padding: "3px 7px",
                        width: "50px",
                      }}
                    >
                      Working
                    </Typography>
                  </Box>
                  <CallMadeIcon
                    sx={{
                      fontSize: 18,
                      marginLeft: "4px",
                      paddingTop: "5px",
                    }}
                  />
                </Stack>
              ) : (
                <>
                  {label}
                  <CallMadeIcon
                    sx={{ fontSize: 18, marginLeft: "4px", paddingTop: "5px" }}
                  />
                </>
              )}
            </StyledLinks>
          ))}
        </Box>
      </Box>
      <hr />
      <Box sx={{ marginTop: "40px", paddingBottom: "50px" }}>
        <Typography
          variant="p"
          sx={{
            color: "rgb(102, 102, 102)",
            marginLeft: "80px",
          }}
          fontSize={14}
        >
          &copy; 2024 Internet Computer
        </Typography>
      </Box>
    </FooterBox>
  );
};

export default DashboardFooter;
