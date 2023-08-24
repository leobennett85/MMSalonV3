import './SiteStructure.css'
import '../components/zero.css'
import Booking from '../components/Booking'
import BottomBar from '../components/BottomBar'
import ContentBox from '../components/ContentBox'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const Home = () => {

    return (
      <>
        <div className="home-wrap">
          <div className="topbar-wrap">
              <TopBar />
          </div>

          <div className="navbar-wrap">
            <NavBar />
          </div>

          <div className="content-wrap">
              <div className="colA-showbooking-wrap">
                  <div className="contentBox-wrap">
                    <ContentBox />
                    <ContentBox />
                  </div>
              </div>
              <div className="colB-showbooking-wrap">
                video
              </div>
              <div className="colC-showbooking-wrap">
                <Booking />
              </div>
          </div>

          <div className="bottombar-wrap">
              <BottomBar />
          </div>
        </div>
      </>
    );
}

export default Home;