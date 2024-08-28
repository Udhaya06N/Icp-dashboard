import React from "react";
import "leaflet-defaulticon-compatibility";
import { CircleMarker, MapContainer, TileLayer } from "react-leaflet";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const DashboardMap = () => {
  const theme = useTheme();
  let markers;

  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 10; i++) {
      markers.push({
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80,
        },
      });
    }
  };
  addMarkers();

  return (
    <Container
      sx={{
        position: "relative",
        width: "85%",
        marginTop: "30px",
        marginBottom: "7%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACgCAMAAAAFBRFXAAAAElBMVEUAW7v/1QAAVr9YdKXdxED/2AARrfQwAAAAhklEQVR4nO3PAQGAMAzAsB24f8v46BIHmQEAAAAAAAAAAAAAAAAAAAAAAEh7lpl3mfmWmbvMnGWE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64TrhOuE64Tr1oV/Q9pWQXXlNOQAAAAASUVORK5CYII="
          alt="Lcp logo"
          width={12}
          height={9}
          style={{ marginTop: 3, marginRight: 4 }}
        />
        <Typography variant="p" fontSize={12} sx={{ color: "#caa8fd" }}>
          Leaflet | © OpenStreetMap{" "}
          <span style={{ color: "#9f9e9e" }}> contributors © </span>CARTO
        </Typography>
      </Box>

      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={true}
        style={{
          height: "400px",
          width: "90%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(ellipse at center,#0000 30%,#000 70%)"
                : "radial-gradient(ellipse at center,#fff0 30%,#fff 70%)",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((item, index) => {
            return (
              <CircleMarker
                key={index}
                radius={6}
                center={[item?.position.lat, item?.position.lng]}
                sx={{
                  width: "12px",
                  height: "12px",
                  BorderColor: "rgb(155, 92, 250)",
                }}
              ></CircleMarker>
            );
          })}
        </Box>
      </MapContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          fontSize: "15px",
          color: theme.palette.mode === "dark" ? "#ccc" : "#110128",
        }}
      >
        <Box
          mt={0.2}
          sx={{
            width: "12px",
            height: "12px",
            border: "1px solid rgb(33, 81, 240)",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        <Typography variant="p" fontSize="14px">
          Active Node Machines
        </Typography>
        <Box
          ml={2}
          mt={0.2}
          sx={{
            width: "12px",
            height: "12px",
            border: "1px solid rgb(155, 92, 250)",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        <Typography fontSize="14px" mb={1}>
          Boundary Nodes
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          fontSize: "15px",
          color: "#110128",
        }}
      >
        <Box
          mt={0.1}
          ml={2}
          sx={{
            width: "12px",
            height: "12px",
            border: "1px solid rgb(144, 144, 144)",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        <Typography
          variant="p"
          fontSize="14px"
          display="flex"
          justifyContent="center"
          sx={{ color: theme.palette.mode === "dark" ? "#ccc" : "#110128" }}
        >
          Upcoming Node Machines
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "0",
          padding: "10px",
          borderRadius: "5px",
          zIndex: 1000,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={450}
          fontSize={12}
          mb={0.3}
        >
          Blocks
        </Typography>
        <Typography variant="h6" fontWeight={400} fontSize={23}>
          3’601’888’198
        </Typography>
        <Typography variant="p" color="text.secondary" fontSize={10}>
          44.22 Blocks/s
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            color="text.secondary"
            mt={3}
            fontSize={12}
            fontWeight={450}
            mb={0.3}
          >
            Transactions
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" fontWeight={400} fontSize={23} mb={0.3}>
              4’512.13
            </Typography>
            <Typography color="text.secondary" fontSize={13} mt={1} ml={0.3}>
              TX/s
            </Typography>
          </Box>
          <Typography variant="p" color="text.secondary" fontSize={10}>
            24’254.26 - 90 day peak
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="p"
              color="text.secondary"
              mt={3}
              fontSize={12}
              fontWeight={450}
              mb={0.3}
            >
              ETH-equivalent Transactions
            </Typography>
            <ErrorOutlineIcon
              sx={{
                color: "rgb(78, 12, 177)",
                fontSize: "16px",
                marginTop: "22px",
                marginRight: "15px",
              }}
            />
          </Box>
          <Box
            mb={0.3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" fontWeight={400} fontSize={23}>
              376’980.58
            </Typography>
            <Typography color="text.secondary" fontSize={13} mt={1} ml={0.3}>
              TX/s
            </Typography>
          </Box>
          <Typography variant="p" color="text.secondary" fontSize={10}>
            Based on avg. instructions per TX
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            color="text.secondary"
            mt={3}
            fontSize={12}
            fontWeight={450}
            mb={0.3}
          >
            Cycle Burn Rate
          </Typography>
          <Box
            mb={0.3}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" fontWeight={400} fontSize={23}>
              9’855’255’793
            </Typography>
            <Typography color="text.secondary" fontSize={13} mt={1} ml={0.3}>
              Cycles/s
            </Typography>
          </Box>
          <Typography variant="p" color="text.secondary" fontSize={10}>
            11’832’831’790 - 90 day average
          </Typography>
        </Box>
      </Box>

      <Card
        sx={{
          position: "absolute",
          top: "80px",
          right: 0,
          maxWidth: 400,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "black"
              : "rgba(255, 255, 255, 0.8)",
          zIndex: 1000,
          padding: "20px",
          borderRadius: 2,
        }}
        variant="outlined"
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              color="text.secondary"
              gutterBottom
              component="a"
              to="/"
            >
              Total ICP Value Locked
            </Typography>
            <Box color="text.secondary" mr={11.5}>
              <OpenInNewIcon
                sx={{ fontSize: "13px", fontWeight: 490, cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Typography variant="h4" component="div">
            $2’012’086’600
          </Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box>
              <Typography
                color="text.secondary"
                sx={{
                  fontSize: 12,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                gutterBottom
                component="a"
                to="/"
              >
                Total Node
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography
                  mb={1.5}
                  sx={{
                    fontSize: 12,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  color="text.secondary"
                  gutterBottom
                  component="a"
                  to="/"
                  mt={0.5}
                >
                  Machines
                </Typography>
                <Box color="text.secondary" ml={0.3} mt={0.6}>
                  <OpenInNewIcon
                    sx={{
                      fontSize: "13px",
                      fontWeight: 490,
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="div"
                sx={{
                  fontSize: 12,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                color="text.secondary"
                gutterBottom
                component="a"
                to="/"
              >
                Node Machines In
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Typography
                  mb={1.5}
                  sx={{
                    fontSize: 12,
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  color="text.secondary"
                  gutterBottom
                  component="a"
                  to="/"
                  mt={0.5}
                >
                  Subnets
                </Typography>
                <Box color="text.secondary" mt={0.6} mr={4.6}>
                  <OpenInNewIcon
                    sx={{
                      fontSize: "13px",
                      fontWeight: 490,
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 1.5 }}
              fontWeight={400}
              fontSize={23}
            >
              1’497
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1.5 }}
              mr={7}
              fontWeight={400}
              fontSize={23}
            >
              559
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography color="text.secondary" fontSize={12}>
              Boundary Nodes
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: 12,
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                color="text.secondary"
                gutterBottom
                component="a"
                to="/"
              >
                Node Providers
              </Typography>
              <Box color="text.secondary" ml={0.2}>
                <OpenInNewIcon
                  sx={{ fontSize: "13px", fontWeight: 490, cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 1.5 }}
              fontWeight={400}
              fontSize={23}
            >
              22{" "}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 1.5 }}
              mr={7}
              fontWeight={400}
              fontSize={23}
            >
              131
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              color="text.secondary"
              gutterBottom
              component="a"
              to="/"
              mt={0.5}
            >
              Subnets
            </Typography>
            <Box color="text.secondary" mt={0.6} mr={9.6}>
              <OpenInNewIcon
                sx={{ fontSize: "13px", fontWeight: 490, cursor: "pointer" }}
              />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={12}
              mr={3}
            >
              Consumption
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Typography variant="h6" fontWeight={400} fontSize={23}>
              37
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h6" fontWeight={400} fontSize={23}>
                376.97
              </Typography>
              <Typography color="text.secondary" fontSize={13} mt={1}>
                kW
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DashboardMap;
