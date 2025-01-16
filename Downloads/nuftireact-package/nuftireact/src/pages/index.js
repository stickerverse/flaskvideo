
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Explore from "./Explore";
import LiveAuction from "./LiveAuction";
import LiveAuctionDetails from "./LiveAuctionDetails";
import About from "./About";
import Author from "./Author";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ConnectWallet from "./ConnectWallet";
import CreateItem from "./CreateItem";
import Login from "./Login";
import Register from "./Register";
import Faq from "./Faq";
import PopularCollections from "./PopularCollections";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";

const routes = [
    { path: '/', component: <Home1 />},
    { path: '/home-2', component: <Home2 />},
    { path: '/home-3', component: <Home3 />},
    { path: '/explore', component: <Explore />},
    { path: '/liveAuction', component: <LiveAuction />},
    { path: '/liveAuctionDetails', component: <LiveAuctionDetails />},
    { path: '/about', component: <About />},
    { path: '/author', component: <Author />},
    { path: '/profile', component: <Profile />},
    { path: '/editProfile', component: <EditProfile />},
    { path: '/connectwallet', component: <ConnectWallet />},
    { path: '/createItem', component: <CreateItem />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/Faq', component: <Faq />},
    { path: '/popular-collections', component: <PopularCollections />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/contact', component: <Contact />},
  ]
  
  export default routes;