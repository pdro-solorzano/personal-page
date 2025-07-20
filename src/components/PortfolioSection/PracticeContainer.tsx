import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import type { Practice } from "../../models/models";

type Props = {
  practice: Practice;
};

function PracticeContainer({ practice }: Props) {
  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea>
        <a href={practice.url?.toString()} style={{ textDecoration: "none" }}>
          <CardMedia
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mx: 2,
              mt: 2,
            }}
          >
            {practice.icons?.map((icon) => icon)}
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="textPrimary"
              sx={{ fontSize: { xs: 18, md: 28 } }}
            >
              {practice.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: { xs: 12, md: 14 } }}
            >
              {practice.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {practice.techTags.map((el, i) => (
              <Chip
                key={i}
                label={el.name}
                size="small"
                sx={{
                  background: el.color,
                  color: "black",
                  fontSize: { xs: 9, md: 12 },
                }}
              />
            ))}
          </CardActions>
        </a>
      </CardActionArea>
    </Card>
  );
}

export { PracticeContainer };
