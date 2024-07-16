import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Landing from "./pages/Landing";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./pages/Home";
import CreateKeys from "./auth/CreateKeys";
import Wallet from "./pages/Wallet";
import Market from "./pages/Market";
import Profile from "./pages/Profile";
import Buy from "./pages/Buy";
import Send from "./pages/Send";
import Dash from "./pages/Dash";
import PublicRoute from "./routes/PublicRoute";
import Receive from "./pages/Receive";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Layout title="">
        <Routes>
          {/* public routes */}
          <Route path="/sign-in" element={<PublicRoute />}>
            <Route index element={<SignIn />} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/*" element={<PageNotFound />} />


          {/* private routes */}
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home/create-key" element={<CreateKeys />} />
            <Route path="/home/overview" element={<Dash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/wallet" element={<Wallet />} />
            <Route path="/home/market" element={<Market />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="/home/buy" element={<Buy />} />
            <Route path="/home/send" element={<Send />} />
            <Route path="/home/receive" element={<Receive />} />
            <Route path="/home/deposit" element={<Deposit />} />
            <Route path="/home/withdraw" element={<Withdraw />} />
          </Route>
        </Routes>
        {/* <DashBoard /> */}
      </Layout>
    </Router>
  );
}

export default App;
