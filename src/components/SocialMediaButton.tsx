import type React from "react";
import { Avatar } from "@mui/material";
// TODO: handle type of rgb color in utils

function SocialMediaButton({
  link,
  color,
  children,
}: {
  link: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a href={link}>
      <Avatar sx={{ bgcolor: color }}>{children}</Avatar>
    </a>
  );
}

export { SocialMediaButton };
