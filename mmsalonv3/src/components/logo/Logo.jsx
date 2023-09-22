import LogoImg from '../../assets/roundlogo.svg'
import '../logo/logo.css'

const Logo = () => {
    return (
        <>
            <div className="lFullWrap">
                <img className="imgLogo" src={LogoImg} />
            </div>
        </>
    )
}

export default Logo;