import { Search } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const linkItems = [
  { label: "Home", path: "/" },
  { label: "Governance", path: "/governance" },
  { label: "Neurons", path: "/neurons" },
  { label: "Network", path: "/network" },
  { label: "Releases", path: "/releases" },
  { label: "Canisters", path: "/canisters" },
  { label: "ICP", path: "/icp" },
  { label: "SNS", path: "/sns" },
  { label: "Chain Fusion", path: "/chain-fusion" },
];

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 3,
  width: 60,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgb(243, 234, 255) !important"
        : "rgb(7, 6, 13) !important",
    opacity: 1,
    position: "relative",
    width: "100%",
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 22,
    height: 22,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  },
  "& .MuiSwitch-track:before": {
    content: '""',
    position: "absolute",
    left: 4,
    top: "50%",
    transform: "translateY(-50%)",
    width: 17,
    height: 17,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
      "#fff"
    )}" d="M12 2a9.86 9.86 0 00-3.11.48c4.19 1.11 7.23 4.87 7.23 9.17 0 4.31-3.03 8.06-7.23 9.17A10 10 0 1012 2z"/></svg>')`,
    backgroundSize: "16px 16px",
  },
  "& .MuiSwitch-track:after": {
    content: '""',
    position: "absolute",
    right: 4,
    top: "50%",
    transform: "translateY(-50%)",
    width: 16,
    height: 16,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
      "#000"
    )}" d="M6.76 4.84l-1.8-1.79 1.42-1.42 1.79 1.79A7.932 7.932 0 0112 3.05c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8c0-1.73.56-3.32 1.49-4.63zM19.3 4.69l1.41-1.41 1.8 1.79-1.41 1.41-1.8-1.79zM11 0h2v4h-2V0zm8.49 15.37l1.8 1.79-1.41 1.41-1.79-1.79 1.4-1.41zm-8.51 4.63h2v4h-2v-4zm4.95-4.95l1.42-1.42 1.79 1.79-1.42 1.42-1.79-1.79zm-9.9 0l1.79-1.79 1.42 1.42-1.79 1.79-1.42-1.42zm-1.43 5.38l1.8-1.79 1.41 1.41-1.79 1.8-1.42-1.42zM0 11h4v2H0v-2zM4.69 4.69l1.8 1.79-1.42 1.42-1.79-1.8 1.41-1.41zm7.31 5.31h2v4h-2v-4zM12 13a2 2 0 110-4 2 2 0 010 4zm5.41 1.41l1.42 1.42-1.79 1.8-1.41-1.42 1.79-1.79zM12 16.95c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg>')`,
    backgroundSize: "16px 16px",
  },
}));

const StyledNavbar = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "80px",
});

const StyledList = styled("ul")({
  display: "flex",
  justifyContent: "flex-end",
  width: "auto",
  marginTop: "10px",
  listStyle: "none",
});

const Links = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 400,
  padding: "8px 6px",
  margin: "0 10px",
  cursor: "pointer",
  color:
    theme.palette.mode === "dark" ? "rgb(244, 243, 243)" : "rgb(33, 33, 33)",
  "&:hover": {
    backgroundColor: "rgb(205, 230, 231)",
    borderRadius: "30px",
  },
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

const Searchbox = styled("div")({
  backgroundColor: "transparent",
  padding: "3px 10px",
  borderRadius: "18px",
  width: "9%",
  border: "1px solid rgb(214, 212, 212)",
});

const DashboardNavbar = ({ mode, setMode }) => {
  return (
    <>
      <StyledNavbar>
        <Box ml={2} sx={{ cursor: "pointer" }}>
          <img
            src="https://dashboard.internetcomputer.org/_next/static/media/icp_dashboard_infinity_logo_light_theme.c2986525.svg"
            alt="Lcp logo"
            width={170}
          />
        </Box>
        <StyledList>
          {linkItems.map(({ label, path }) => (
            <Links key={label} to={path} exact activeClassName="active">
              {label}
            </Links>
          ))}
        </StyledList>
        <Searchbox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Search sx={{ fontSize: "20px", marginTop: "2px" }} />
            <Typography variant="div" fontSize={13} mt={0.6}>
              Search
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgb(239, 238, 238)",
                padding: "1px 2px",
                borderRadius: "13px",
                width: "45px",
                marginTop: "4px",
                marginBottom: "4px",
                textAlign: "center",
                fontSize: "13px",
                color: "rgb(141, 140, 140)",
              }}
            >
              Ctrl+/
            </Box>
          </Box>
        </Searchbox>
        <FormControlLabel
          onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          control={<Android12Switch defaultChecked />}
        />
      </StyledNavbar>

      <Outlet />
    </>
  );
};

export default DashboardNavbar;
