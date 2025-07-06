import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Menu,
  Button,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import type { Theme } from "@emotion/react";

const pages = ["Home", "Portfolio", "Contact"];

function Navbar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* TODO: Now both elements render, do a conditional render to prevent both elements in DOM */}
      {/* Navbar in viewport md */}
      <BigNavbar theme={theme} handleCloseNavMenu={handleCloseNavMenu} />
      {/* Navbar in viewport less than md */}
      <SmallNavbar
        theme={theme}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
      />
    </>
  );
}

function BigNavbar({
  theme,
  handleCloseNavMenu,
}: {
  theme: Theme;
  handleCloseNavMenu: () => void;
}) {
  return (
    <AppBar
      position="fixed"
      sx={{
        mt: 3,
        background: "none",
        boxShadow: 0,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: 10 }}>
        <Toolbar
          disableGutters
          sx={{
            flexWrap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "secondary.main",
            gap: 8,
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            component="a"
            href="/"
            sx={{
              fontFamily: "Roboto Condensed",
              fontWeight: 300,
              textDecoration: "none",
              fontSize: 20,
            }}
          >
            Pedro Solorzano
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function SmallNavbar({
  theme,
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}: {
  theme: Theme;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
}) {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "none",
        backgroundColor: "secondary.main",
        boxShadow: 0,
        display: { xs: "flex", md: "none" },
      }}
    >
      <Container maxWidth="md" disableGutters sx={{ px: 1 }}>
        <Toolbar
          disableGutters
          sx={{
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.secondary.contrastText}
            component="a"
            href="/"
            sx={{
              fontFamily: "Roboto Condensed",
              fontWeight: 300,
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            Pedro Solorzano
          </Typography>
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "secondary.contrastText" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export { Navbar };
