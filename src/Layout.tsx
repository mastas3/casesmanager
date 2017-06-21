import * as React from "react";
import AppBar from "material-ui/AppBar";
import { Grid, Col, Row } from "react-bootstrap";
import MainPage from "./MainPage";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import AddBox from "material-ui/svg-icons/content/add-box";
import LibraryBooks from "material-ui/svg-icons/av/library-books";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

export default class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  handleTouchTap = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  appBarRightIconRender = (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      targetOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <MenuItem primaryText="Login" />
      <MenuItem primaryText="Help" />
    </IconMenu>
  );

  renderMyCasesPage = () => {
    alert('My Cases');
  }

  render() {
    const style = {
      container: {},

      appbar: {
        background: "black",
        color: "white",
        textAlign: "center"
      },

      leftCol: {
        background: "rgba(195, 122, 186, 0.37)",
        height: "600px"
      },

      rightCol: {
        height: "800px",
        marginTop: "5px"
      }
    };

    return (
      <div style={style.container}>
        <AppBar
          style={style.appbar}
          title="Tickets Platform"
          onLeftIconButtonTouchTap={this.handleTouchTap}
          iconElementRight={this.appBarRightIconRender}
        />
        <Grid>
          <Row className="show-grid">
            <Col md={10} mdOffset={1} style={style.rightCol}>
              <MainPage />
            </Col>
          </Row>
        </Grid>
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={drawerOpen => this.setState({ drawerOpen })}
        >
          <MenuItem rightIcon={<AddBox />}>Open Case</MenuItem>
          <MenuItem rightIcon={<LibraryBooks />} onClick={this.renderMyCasesPage}>My Cases</MenuItem>
        </Drawer>
      </div>
    );
  }
}
