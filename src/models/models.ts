type RGB = `#${string}`;
type techTag = {
  name: string;
  color: RGB;
};

interface Practice {
  name: string;
  description: string;
  url: URL;
  techTags: techTag[];
  icons?: React.ReactNode[];
}

interface SocialMedia {
  link: URL;
  color: RGB;
  children: React.ReactNode;
}

export type { Practice, SocialMedia };
