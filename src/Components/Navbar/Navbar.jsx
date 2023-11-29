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
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
          <img
            src={LogoNav}
            alt=""
            width={220}
            draggable="false"
            onClick={() => navigate("/home")}
            style={{ cursor: "pointer" }}
          />
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
                <Button
                  variant="text"
                  color="inherit"
                  onClick={() => navigate("/about")}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "fantasy",
                  }}
                >
                  About
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "fantasy",
                  }}
                >
                  Resume
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "fantasy",
                  }}
                >
                  Portfolio
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "fantasy",
                  }}
                >
                  Blog
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ backgroundColor: "black" }}
              >
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "fantasy",
                  }}
                >
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
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/about")}
              sx={{
                my: 2,
                backgroundColor: "transparent",
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "fantasy",
                fontSize: "1.1rem",
              }}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/services")}
              sx={{
                my: 2,
                backgroundColor: "transparent",
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "fantasy",
                fontSize: "1.1rem",
              }}
            >
              Services
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/portfoliopage")}
              sx={{
                my: 2,
                backgroundColor: "transparent",
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "fantasy",
                fontSize: "1.1rem",
              }}
            >
              Portfolio
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/blog")}
              sx={{
                my: 2,
                backgroundColor: "transparent",
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "fantasy",
                fontSize: "1.1rem",
              }}
            >
              Blog
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/contact")}
              sx={{
                my: 2,
                backgroundColor: "transparent",
                color: "white",
                display: "block",
                textTransform: "none",
                fontFamily: "fantasy",
                fontSize: "1.1rem",
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
