import { Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { NavLink } from "react-router-dom";

export default function SandwichMenu () {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
            sx={{ display: 'flex', alignItems: 'center'}}
          >
            <MenuIcon fontSize='large' />
  </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{mt: 2}}
      >
        <MenuItem onClick={handleClose} component={NavLink} to={'/catalog'} sx={{ height: 100, width: 300, borderBottom: 0.5 }}>
          <Typography variant="h6">Каталог товарів</Typography>
          </MenuItem>

        <MenuItem onClick={handleClose} component={NavLink} to={'/about'} sx={{ height: 100, width: 300, borderBottom: 0.5  }}>
        <Typography variant="h6">Дізнатися більше про нас</Typography>
          </MenuItem>

        <MenuItem onClick={handleClose} component={NavLink} to={'/contacts'} sx={{ height: 100, width: 300 }}>
          <Typography variant="h6">Наші Контакти</Typography>
          </MenuItem>
      </Menu>
    </>
  );
}