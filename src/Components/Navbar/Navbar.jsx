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
                  sx={{ color: "white", textTransform: "none" }}
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
                  sx={{ color: "white", textTransform: "none" }}
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
                  sx={{ color: "white", textTransform: "none" }}
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
                  sx={{ color: "white", textTransform: "none" }}
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
                  sx={{ color: "white", textTransform: "none" }}
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
              onClick={() => navigate("/about")}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              About
            </Button>
            <Button
            onClick={()=>navigate('/resume')}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              Resume
            </Button>
            <Button
            onClick={()=>navigate('/portfoliopage')}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              Portfolio
            </Button>
            <Button
            onClick={()=>navigate('/blog')}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              Blog
            </Button>
            <Button
            onClick={()=>navigate('/contact')}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textTransform: "none",
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
