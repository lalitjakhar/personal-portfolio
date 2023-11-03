import * as React from "react";
import LogoNav from "../../Assets/Logo-nav.webp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          color: "white",
          backgroundColor: "black",
          paddingInline: "1rem",
        }}
      >
        <Toolbar disableGutters sx={{ alignItems: "center" }}>
          <img src={LogoNav} alt="" width={220} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button variant="text" color="inherit" sx={{ color: "white" }}>
                  About
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button variant="text" color="inherit" sx={{ color: "white" }}>
                  Resume
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button variant="text" color="inherit" sx={{ color: "white" }}>
                  Portfolio
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button variant="text" sx={{ color: "white" }}>
                  Blog
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button variant="text" color="inherit" sx={{ color: "white" }}>
                  Contact
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "end",
              },
            }}
          >
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              About
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Resume
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Portfolio
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Blog
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
