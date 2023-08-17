import Logo from '../assets/logo.svg'
import DrawWiggle from './drawing/DrawWiggle'
import './topbar.css'

const TopBar = () => {
    return (
        <>
            <DrawWiggle />
            <div id="tbFullWrap">
                <img id="tbLogo" src={Logo} />
            </div>
        </>
    )
}

export default TopBar;