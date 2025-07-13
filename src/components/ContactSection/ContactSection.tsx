import { Container, Typography, Grid, Stack } from "@mui/material";
import { Email, LocalPhone, LocationOn } from "@mui/icons-material";
import { SocialMediaBar } from "../SocialMediaBar";

function ContactSection() {
  return (
    <Container maxWidth="xl" disableGutters component="section" id="contact">
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          mx: { xs: 0, md: "auto" },
          px: { xs: 2.5, md: 10 },
          pt: { xs: 8, md: 10 },
          pb: 5,
          backgroundImage:
            "radial-gradient(circle,rgba(42, 46, 56, 1) 0%, rgba(8, 14, 24, 1) 100%) ",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          marginBottom={{ md: 2, xs: 2 }}
          fontWeight="medium"
          sx={{ typography: { xs: "h3", md: "h2" } }}
        >
          Contact
        </Typography>
        <Grid container columnSpacing={1} rowSpacing={{ xs: 2, md: 2 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              sx={{
                fontWeight: "medium",
                mb: { xs: 2, md: 1 },
              }}
            >
              Pedro Solorzano
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mb: { xs: 2, md: 3 }, fontWeight: "normal" }}
            >
              I’m always open to exciting opportunities where I can contribute
              to great teams and continue growing as a developer. If you’re
              hiring or have a project in mind, feel free to reach out — I’d
              love to connect!
            </Typography>
            <SocialMediaBar display={{}} />
          </Grid>
          <Grid
            size={{ xs: 0, md: 2 }}
            sx={{ display: { xs: "none", md: "flex" } }}
          ></Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              sx={{
                fontWeight: "medium",
                mb: { xs: 2, md: 1 },
              }}
            >
              Contact Me
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: { sx: 1, md: 1 } }}>
              <Email color="secondary" />
              <Typography variant="body2" color="textSecondary">
                pdro_solorzano@outlook.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mb: { sx: 1, md: 1 } }}>
              <LocalPhone color="secondary" />
              <Typography variant="body2" color="textSecondary">
                +1 (817) 205-6987
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mb: { sx: 1, md: 1 } }}>
              <LocationOn color="secondary" />
              <Typography variant="body2" color="textSecondary">
                Texas, USA
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export { ContactSection };
