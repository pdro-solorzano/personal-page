import { Stack } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { SocialMediaButton } from "./SocialMediaButton";

function SocialMediaBar() {
  return (
    <Stack direction="row" spacing={1} display={{ xs: "none", md: "flex" }}>
      <SocialMediaButton
        link={new URL("https://linkedin.com/in/pedro-solorzano-gomez")}
        color="#0a66c2"
      >
        <LinkedIn color="action" />
      </SocialMediaButton>
      <SocialMediaButton
        link={new URL("https://github.com/pdro-solorzano")}
        color="#6e5494"
      >
        <GitHub color="action" />
      </SocialMediaButton>
      <SocialMediaButton
        link={new URL("mailto:pdro_solorzano@outlook.com")}
        color="#f65314"
      >
        <Email color="action" />
      </SocialMediaButton>
    </Stack>
  );
}

export { SocialMediaBar };
