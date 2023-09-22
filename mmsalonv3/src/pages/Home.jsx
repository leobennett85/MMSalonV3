import './SiteStructure.css'
import Logo from '../components/logo/Logo'
import TopBar from '../components/TopBar'
import Menu from '../components/menu/Menu'
import BottomBar from '../components/BottomBar'
import Login from '../components/login/Login'

const Home = () => {

    return (
      <>
        <Login />
        <Logo />

        <div className="home-wrap">
          <div className="topbar-wrap">
            <TopBar />
          </div>

          <div className="menu-wrap">
            <Menu />
          </div>

          <div className="bottombar-wrap">
            <BottomBar />
          </div>
        </div>

      </>
    );
}

export default Home;