import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CampaignIcon from "@mui/icons-material/Campaign";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: AutoFixHighIcon,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CampaignIcon,
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CollectionsOutlinedIcon,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: AutoFixHighIcon,
  },
  {
    id: 5,
    title: "Website Design",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CollectionsOutlinedIcon,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CampaignIcon,
  },
  {
    id: 7,
    title: "Web Development",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: AutoFixHighIcon,
  },
  {
    id: 8,
    title: "Digital Marketing",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CampaignIcon,
  },
  {
    id: 9,
    title: "Website Design",
    description:
      "Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality.",
    icon: CollectionsOutlinedIcon,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.light,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      top: 0,
      background: "linear-gradient(to top, red, transparent)",
      transition: "transform 0.3s",
      transform: "scaleY(1)",
    },
  },
  "& svg": {
    fontSize: 48,
  },
  "& div": {
    marginTop: theme.spacing(2),
  },
}));

export default function Services() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {servicesData.map((service) => (
            <Grid xs={2} sm={4} md={4} key={service.id}>
              <Item>
                {React.createElement(service.icon)}
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
