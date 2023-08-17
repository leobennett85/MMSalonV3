import './SiteStructure.css';


const Home = () => {

    return (
      <>
        <div id="home-wrap">
          <div id="topbar-wrap">
              topbar
          </div>

          <div id="navbar-wrap">
            navbar
          </div>

          <div id="content-wrap">
              <div id="colA-Booking-wrap">
                  <div id="contentBox-wrap">
                    contenbox
                  </div>
              </div>
              <div id="colB-Booking-wrap">
                video
              </div>
              <div id="colC-Booking-wrap">
                book
              </div>
          </div>

          <div id="bottombar-wrap">
              bottombar
          </div>
        </div>
      </>
    );
}

export default Home;