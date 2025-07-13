import { Container, Grid, Typography } from "@mui/material";
import { SocialMediaBar } from "../SocialMediaBar";

function HeroSection() {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      component="section"
      id="home"
      sx={{
        backgroundImage:
          "radial-gradient(circle,rgba(42, 46, 56, 1) 0%, rgba(8, 14, 24, 1) 100%) ",
        height: "100vh",
        alignContent: "center",
      }}
    >
      <Grid
        container
        columnSpacing={1}
        rowSpacing={{ xs: 8, md: 2 }}
        alignItems="center"
        maxWidth="lg"
        sx={{
          mx: { xs: 0, md: "auto" },
          px: { xs: 2.5, md: 10 },
          mt: { xs: 0, md: 15 },
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h3" sx={{ typography: { xs: "h4", md: "h3" } }}>
            My name is{" "}
            <Typography
              variant="h3"
              component="span"
              color="secondary"
              fontWeight="medium"
              sx={{
                textDecoration: "underline",
                typography: { xs: "h4", md: "h3" },
              }}
            >
              Pedro&nbsp;Solorzano
            </Typography>{" "}
            and I'm{" "}
            <Typography
              variant="h3"
              component="span"
              color="secondary"
              fontWeight="medium"
              sx={{
                textDecoration: "underline",
                typography: { xs: "h4", md: "h3" },
              }}
            >
              Web&nbsp;Developer
            </Typography>
          </Typography>
        </Grid>
        <Grid
          height="65vh"
          size={{ xs: 0, md: 2 }}
          sx={{ display: { xs: "none", md: "flex" } }}
        ></Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="subtitle2">
            I love building clean, scalable code that solves real user problems.
            With a strong focus on modern frontend development using{" "}
            <Typography variant="subtitle2" component="span" color="secondary">
              React
            </Typography>{" "}
            and{" "}
            <Typography variant="subtitle2" component="span" color="secondary">
              TypeScript
            </Typography>
            , I bring quality into the product from the first commit—automating
            tests and integrating{" "}
            <Typography variant="subtitle2" component="span" color="secondary">
              CI/CD pipelines
            </Typography>{" "}
            to move fast with confidence.
          </Typography>
          {/* download CV button */}
        </Grid>
        <Grid size={{ xs: 12 }}>
          <SocialMediaBar display={{ xs: "none", md: "flex" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export { HeroSection };
