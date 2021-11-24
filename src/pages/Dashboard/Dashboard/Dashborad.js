import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AddIcon from "@mui/icons-material/Add";
import AddCommentIcon from "@mui/icons-material/AddComment";
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
const drawerWidth = 220;

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
      <img
        style={{ width: "100%", height: "65px", marginTop: "-90px" }}
        src="https://i.ibb.co/yXZwNLp/logoss.jpg"
        alt=""
      />
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ color: "black", mx: 2 }}>
          <HomeIcon /> Home
        </Button>
      </Link>
      <Link to={`${url}`} style={{ textDecoration: "none" }}>
        <Button variant="text" sx={{ color: "black", mx: 2 }}>
          <DashboardIcon />
          Dashboard
        </Button>
      </Link>
      <br />
      {admin && (
        <Box>
          <Link to={`${url}/allorders`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <ShoppingCartIcon />
              All Order
            </Button>
          </Link>
          <Link to={`${url}/makeadmin`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <PersonIcon /> Make Admin
            </Button>
          </Link>
          <Link to={`${url}/addproduct`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <AddIcon />
              Add Product
            </Button>
          </Link>
          <Link to={`${url}/manageproduct`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <ProductionQuantityLimitsIcon /> Manage Product
            </Button>
          </Link>
        </Box>
      )}
      {!admin && (
        <Box>
          <Link to={`${url}/myorder`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <ShoppingCartIcon />
              My Order
            </Button>
          </Link>
          <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <PaymentIcon /> Payment
            </Button>
          </Link>
          <Link to={`${url}/review`} style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{ color: "black", mx: 2 }}>
              <AddCommentIcon /> Reviews
            </Button>
          </Link>
        </Box>
      )}
      <Button
        variant="contained"
        onClick={logout}
        sx={{ color: "white", background: "red", mx: 3, mt: 45 }}
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
          background: "black",
          boxShadow: "none",
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
