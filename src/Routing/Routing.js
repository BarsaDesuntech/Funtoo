import React from "react";
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Login from "../Layout/Login/Login";
import Registration from "../Layout/Registration/Registration";
import Unauth from "../Layout/Unauth/Unauth";
import Billings from "../Screen/Billing/Billings";
import Cart from "../Screen/Cart/Cart";
import Catalogue from "../Screen/Catalogue/Catalogue";
import EventDetails from "../Screen/EventDetails/EventDetails";
import EventDetailsforGSTbill from "../Screen/EventDetails/EventDetailsforGSTbill";
import Gamedetails from "../Screen/GameDetails/Gamedetails";
import Home from "../Screen/Home";
import ManageOrder from "../Screen/ManageOrder/ManageOrder";
import Payments from "../Screen/Payment/Payments";
import Subcatagory from "../Screen/SubCatagory/Subcatagory";
import WishList from "../Screen/WishList/WishList";
import Protected from "./Protected";
import CartPage from '../Screen/Cart/CartPage'
import WishListCategory from "../Screen/WishList/WishListCategory";
import SearchComponent from "../Screen/SearchComponent";
import GiftChat from "../Screen/EventDetails/GiftChat/GiftChat";
import AccountDetail from "../Screen/AccountDetail/AcountDetail";
import DetailEvent from "../Screen/EventDetails/DetailEvent/DetailEvent";
import GoogleLocationComponent from "../Screen/EventDetails/GoogleLocationComponent";
import ConfirmOrder from "../Screen/ManageOrder/ConfirmOrder/ConfirmOrder";
import EditGames from "../Screen/ManageOrder/EditGames/EditGames";
import UpdateContect from "../Layout/Login/UpdateContect";
import TrackOrder from "../Screen/TrackOrder/TrackOrder";


const Routing = () => {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>

          <Route path="/" element={<Registration />} />

          <Route path="Login_Path" element={<Login />} />
          <Route element={<Protected />} >
            <Route path="Home" element={<Home />} />
            <Route path="Catalogue" element={<Catalogue />} />
            <Route path="subcatagory" element={<Subcatagory />} />
            {/* <Route path="subcatagory/:pname" element={<Subcatagory />}></Route> */}
            <Route path="subcatagory/:gid" element={<Gamedetails />}></Route>
            <Route path="cartPage/:cart/" element={<Cart />}></Route>
            <Route path="EventDetails/:cart/:price" element={<EventDetails />}> </Route>
            <Route path="WishList" element={<WishList />} />
            <Route path="CartPage" element={<CartPage />} />
            <Route path="manageOrder" element={<ManageOrder />} />
            <Route path="Billing" element={<Billings />} />
            <Route path="Payment" element={<Payments />} />
            <Route path="Unauth" element={<Unauth />} />
            <Route path="EventDetailsforGSTbill" element={<EventDetailsforGSTbill />} />
            <Route path="WishListCategory" element={<WishListCategory />} />
            <Route path="SearchComponent" element={<SearchComponent />} />
            <Route path="chat" element={<GiftChat />} />
            <Route path="accountdetail" element={<AccountDetail />} />
            <Route path="detailevent" element={<DetailEvent />} />
            <Route path="GoogleLocationComponent" element={<GoogleLocationComponent />} />
            <Route path="confirmorder/:id" element={<ConfirmOrder />} />
            <Route path="editgames" element={<EditGames />} />
            <Route path="updateContect" element={<UpdateContect />} />
            <Route path="trackOrder/:id" element={<TrackOrder />} />


          </Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Routing;