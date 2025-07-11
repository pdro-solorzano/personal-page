import { Container, Typography, Grid } from "@mui/material";
import { PracticeContainer } from "./PracticeContainer";
import type { Practice } from "../../models/models";

type Props = {
  practices?: Practice[];
};

function PortfolioSection({ practices }: Props) {
  return (
    <Container
      maxWidth="xl"
      component="section"
      id="portfolio"
      disableGutters
      sx={{ mb: 3 }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          mx: { xs: 0, md: "auto" },
          px: { xs: 2.5, md: 10 },
          mt: { xs: 8, md: 10 },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          fontWeight="medium"
          marginBottom={{ md: 2, xs: 2 }}
          sx={{ typography: { xs: "h3", md: "h2" } }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontSize: { xs: 12, md: 16 } }}
        >
          Welcome to my personal portfolio, where I showcase a selection of my
          recent{" "}
          <Typography
            variant="subtitle1"
            component="span"
            color="secondary"
            sx={{ fontSize: { xs: 12, md: 16 } }}
          >
            projects and practice exercises.
          </Typography>{" "}
          Here you'll find examples of my work, demonstrating my skills,
          creativity, and dedication to continuous learning in{" "}
          <Typography
            variant="subtitle1"
            component="span"
            color="secondary"
            sx={{ fontSize: { xs: 12, md: 16 } }}
          >
            software development.
          </Typography>
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            pt: 5,
          }}
        >
          {practices?.map((practice, i) => (
            <Grid size={{ xs: 6, md: 4 }}>
              <PracticeContainer key={i} practice={practice} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export { PortfolioSection };
