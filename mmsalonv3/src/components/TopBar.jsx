import Logo from '../assets/logobw.svg'
import './topbar.css'

const TopBar = () => {
    return (
        <>
            <div className="tbFullWrap center-ver-hor">
                <img className="tbLogo" src={Logo} />
                <div className="tbMenu center-ver-hor">
                    "When you look good you feel good"
                </div>
            </div>
        </>
    )
}

export default TopBar;