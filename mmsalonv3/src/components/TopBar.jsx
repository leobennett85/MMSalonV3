import Logo from '../assets/logo.svg'
import './topbar.css'

const TopBar = () => {
    return (
        <>
            <div id="tbFullWrap">
                <img id="tbLogo" src={Logo} />
                <div id="tbMenu">
                    "When you look good you feel good"
                </div>
            </div>
        </>
    )
}

export default TopBar;