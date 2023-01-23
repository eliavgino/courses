import * as React from "react";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CarouselCourses from "./../components/carousleCourses";
import { NavLink, useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function HomePage() {
  const navigat = useNavigate();
  const teachers = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
      details: "here we teching with pastion",
      name: "steve jobi",
    },
    {
      url: "https://apidyn.royalsociety.org/images/fellows/P37009-Elon-Musk.jpg",
      details: "the best practice is here",
      name: "steavi",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMTk3M2YxMTUtMDg0OC00ZmMzLWFkNWQtZWU5YjE1ZDBlODMwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
      details:
        "knoledge is a power and after our course you gonna have super powwers",
      name: "eloni",
    },
    {
      url: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1086058968_ldhch4.jpg",
      details: " here we dont just teaching we make you better",
      name: "namaste kaka",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              g-courses
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              the place for you - all you need to do for being a pro . sign up
              -- add course and lets begin our journy together
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="https://web.whatsapp.com/" variant="contained">
                contact us
              </Button>

              <Button variant="outlined" onClick={() => navigat("/signup")}>
                sign up
              </Button>
            </Stack>
          </Container>
          <Box>
            <CarouselCourses />
          </Box>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={6}>
            {teachers.map((teacher, index) => (
              <Grid item key={index} xs={8} sm={11} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "10.25%",
                    }}
                    image={teacher.url}
                    alt="profile"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      name : {teacher.name}
                    </Typography>
                    <Typography>"{teacher.details}"</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
export default HomePage;
