import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import {Icon} from '@mui/material';
import icon from '../../assets/iconNavbar.svg'
import ExplicitIcon from '@mui/icons-material/Explicit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { FormControl, InputLabel, MenuItem, Select,Button, Menu } from '@mui/material'
import  useStyles  from './NavbarStyle';

const Navbar = () => {

  const classes = useStyles();
  
  const [anchorElMovie, setAnchorElMovie] = useState(null);
  const [anchorElTvShow, setAnchorElTvShow] = useState(null);
  const [anchorElpersonal, setAnchorElPersonal] = useState(null);
  const [anchorElOther, setAnchorElOther] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMovies = (event) => {
    setAnchorElMovie(event.currentTarget);
  };

  const handleTvShows = (event) => {
    setAnchorElTvShow(event.currentTarget);
  };

  const handlePersonal = (event) => {
    setAnchorElPersonal(event.currentTarget);
  };

  const handleOther = (event) => {
    setAnchorElOther(event.currentTarget);
  };

  const handleCloseMovie = () => {
    setAnchorElMovie(null);
  };

  const handleCloseTvShow = () => {
    setAnchorElTvShow(null);
  };

  const handleClosePersonal = () => {
    setAnchorElPersonal(null);
  };

  const handleCloseOther = () => {
    setAnchorElOther(null);
  };

    return(
      <header className={classes.container}>
        <div className={classes.contet}>
          <div className={classes.sub_media}>
          <div className={classes.nav_wrapper}> 
            <a><img className={classes.iconNavbar} src={icon}  alt='lalal'/></a>
          <Button className={classes.navText} aria-controls="movie-menu" aria-haspopup="true" onClick={handleMovies}>
            Películas
          </Button>
          <Button aria-controls="tvShow-menu" aria-haspopup="true" onClick={handleTvShows}>
            Programas de televisión
          </Button>
          <Button aria-controls="personal-menu" aria-haspopup="true" onClick={handlePersonal}>
            Personas
          </Button>
          <Button aria-controls="tvShow-menu" aria-haspopup="true" onClick={handleOther}>
            Más
          </Button>
          
          <Menu
            id="movie-menu"
            anchorEl={anchorElMovie}
            keepMounted
            open={Boolean(anchorElMovie)}
            onClose={handleCloseMovie}
          >
            <MenuItem onClick={handleCloseMovie}>Popular</MenuItem>
            <MenuItem onClick={handleCloseMovie}>En cartelera hoy</MenuItem>
            <MenuItem onClick={handleCloseMovie}>Próximamente</MenuItem>
            <MenuItem onClick={handleCloseMovie}>Mejor valoradas</MenuItem>
          </Menu>
          
          <Menu
            id="tvShow-menu"
            anchorEl={anchorElTvShow}
            keepMounted
            open={Boolean(anchorElTvShow)}
            onClose={handleCloseTvShow}
          >
            <MenuItem onClick={handleCloseTvShow}>Popular</MenuItem>
            <MenuItem onClick={handleCloseTvShow}>Se emiten hoy</MenuItem>
            <MenuItem onClick={handleCloseTvShow}>En televisión</MenuItem>
            <MenuItem onClick={handleCloseTvShow}>Mejor valoradas</MenuItem>
          </Menu>

          <Menu
            id="personal-menu"
            anchorEl={anchorElpersonal}
            keepMounted
            open={Boolean(anchorElpersonal)}
            onClose={handleClosePersonal}
          >
            <MenuItem onClick={handleClosePersonal}>Personas populares</MenuItem>
          </Menu>

          <Menu
            id="Other-menu"
            anchorEl={anchorElOther}
            keepMounted
            open={Boolean(anchorElOther)}
            onClose={handleCloseOther}
          >
            <MenuItem onClick={handleCloseOther}>Discusiones</MenuItem>
            <MenuItem onClick={handleCloseOther}>Tabla de clasificación</MenuItem>
            <MenuItem onClick={handleCloseOther}>Soporte</MenuItem>
            <MenuItem onClick={handleCloseOther}>API</MenuItem>
          </Menu>
        </div>
        <div className={classes.nav_icons}>
          
          <AddIcon></AddIcon>
          <ExplicitIcon></ExplicitIcon>
          <NotificationsIcon></NotificationsIcon>
          <AccountCircleIcon></AccountCircleIcon>
           <SearchIcon></SearchIcon>
 
        
       </div>
          </div>
        </div>

      </header>

    )
}

export {Navbar}