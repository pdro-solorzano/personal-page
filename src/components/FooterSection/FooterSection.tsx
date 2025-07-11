import { Container, Typography, Grid } from "@mui/material";

function FooterSection() {
  return (
    <Container
      maxWidth="xl"
      component="section"
      disableGutters
      sx={{ bgcolor: "secondary.main" }}
    >
      <Grid
        container
        spacing={0.5}
        maxWidth="lg"
        sx={{
          mx: { xs: 0, md: "auto" },
          px: { xs: 2.5, md: 10 },
          py: { xs: 0.5, md: 1.5 },
        }}
      >
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography
            variant="body1"
            color="secondary.contrastText"
            textAlign={{ md: "center", xs: "center" }}
            sx={{ fontWeight: "light" }}
          >
            © Pedro Solorzano 2025 all rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export { FooterSection };
