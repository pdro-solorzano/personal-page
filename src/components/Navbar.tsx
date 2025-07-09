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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = ["Home", "Portfolio", "Contact"];

function Navbar() {
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
      <BigNavbar handleCloseNavMenu={handleCloseNavMenu} />
      {/* Navbar in viewport less than md */}
      <SmallNavbar
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
      />
    </>
  );
}

function BigNavbar({ handleCloseNavMenu }: { handleCloseNavMenu: () => void }) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
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
            borderBottom: 2,
            borderColor: "secondary.main",
            gap: 8,
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            variant="h6"
            color="textPrimary"
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
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
}: {
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
            color="secondary.contrastText"
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
