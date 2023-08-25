import Logo from '../assets/logo.svg'
import './topbar.css'

const TopBar = () => {
    return (
        <>
            <div className="tbFull-Wrap">
                <img className="tbLogo" src={Logo} />
                <div className="tbMenu center-ver-hor">
                    "When you look good you feel good"
                </div>
            </div>
        </>
    )
}

export default TopBar;