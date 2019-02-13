import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import{ ColorContext} from '../contexts'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/home">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/works">Work</Link>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
             
        <ColorContext.Consumer>
        {({changeColor}) => {
                return  (
                    <MenuIcon onClick = {changeColor}/>
                  )
                
            }
        }
    </ColorContext.Consumer>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
