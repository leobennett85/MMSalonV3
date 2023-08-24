import './SiteStructure.css'
import Booking from '../components/Booking'
import BottomBar from '../components/BottomBar'
import ContentBox from '../components/ContentBox'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const Home = () => {

    return (
      <>
        <div id="home-wrap">
          <div id="topbar-wrap">
              <TopBar />
          </div>

          <div id="navbar-wrap">
            <NavBar />
          </div>

          <div id="content-wrap">
              <div id="colA-showbooking-wrap">
                  <div id="contentBox-wrap">
                    <ContentBox />
                    <ContentBox />
                  </div>
              </div>
              <div id="colB-showbooking-wrap">
                video
              </div>
              <div id="colC-showbooking-wrap">
                <Booking />
              </div>
          </div>

          <div id="bottombar-wrap">
              <BottomBar />
          </div>
        </div>
      </>
    );
}

export default Home;