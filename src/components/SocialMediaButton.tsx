import { Avatar } from "@mui/material";
import type { SocialMedia } from "../models/models";

function SocialMediaButton({ link, color, children }: SocialMedia) {
  return (
    <a href={link.toString()}>
      <Avatar sx={{ bgcolor: color }}>{children}</Avatar>
    </a>
  );
}

export { SocialMediaButton };
