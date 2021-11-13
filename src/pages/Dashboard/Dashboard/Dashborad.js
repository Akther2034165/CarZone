import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddAProduct from "../AddAProduct/AddAProduct";
import useAuth from "../../../hooks/useAuth";
import ManageProduct from "../ManageProduct/ManageProduct";
import Payment from "../Payment/Payment";
import Reviews from "../Reviews/Reviews";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logout, admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to={`${url}`}>
        <Button variant="text" sx={{ color: "black" }}>
          <DashboardIcon />
          Dashboard
        </Button>
      </Link>
      <br />
      {admin && (
        <Box>
          <Link to={`${url}/allorders`}>
            <Button variant="text" sx={{ color: "black" }}>
              <ShoppingCartIcon />
              Manage All Order
            </Button>
          </Link>
          <Link to={`${url}/makeadmin`}>
            <Button variant="text" sx={{ color: "black" }}>
              <PersonIcon /> Make Admin
            </Button>
          </Link>
          <Link to={`${url}/addproduct`}>
            <Button variant="text" sx={{ color: "black" }}>
              <AddIcon />
              Add Product
            </Button>
          </Link>
          <Link to={`${url}/manageproduct`}>
            <Button variant="text" sx={{ color: "black" }}>
              <AddIcon /> Manage Product
            </Button>
          </Link>
        </Box>
      )}
      {!admin && (
        <Box>
          <Link to={`${url}/myorder`}>
            <Button variant="text" sx={{ color: "black" }}>
              <ShoppingCartIcon />
              My Order
            </Button>
          </Link>
          <Link to={`${url}/payment`}>
            <Button variant="text" sx={{ color: "black" }}>
              <PaymentIcon /> Payment
            </Button>
          </Link>
          <Link to={`${url}/review`}>
            <Button variant="text" sx={{ color: "black" }}>
              <CreateIcon /> Reviews
            </Button>
          </Link>
        </Box>
      )}

      <br />
      <Link to="/home">
        <Button variant="text" sx={{ color: "black", textDecoration: "none" }}>
          <HomeIcon /> Home
        </Button>
      </Link>

      <Button
        variant="contained"
        onClick={logout}
        sx={{ color: "white", background: "red" }}
      >
        <LogoutIcon /> Logout
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>

          <Route path={`${path}/myorder`}>
            <MyOrders />
          </Route>
          <AdminRoute path={`${path}/allorders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddAProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageproduct`}>
            <ManageProduct />
          </AdminRoute>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/review`}>
            <Reviews />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
