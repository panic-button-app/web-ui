import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { useState } from "react";
import Head from "../src/Head";
import Divider from "@material-ui/core/Divider";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 260;

const styles = (theme: Theme) => createStyles({
  drawer: {
    width: drawerWidth
  }
});

interface Props extends WithStyles<typeof styles> {
    children: JSX.Element[] | JSX.Element
};

function page(props: Props) {
  const { classes, theme } = props as any;
  const children = props.children;

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head />
      <AppBar>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          open={open}
          anchor="left"
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(false)}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key="1">
              <ListItemText>Hello this is a button</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </ClickAwayListener>

      {children}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(page);
