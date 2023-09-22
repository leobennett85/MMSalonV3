import '../menu/menu.css'
import Services from'../menu/Services'
import Products from './Products'
import Gallery from './Gallery'
import Media from './Media'

const Menu = () => {
    return (
        <>
            <div className="mFullWrap">
                <Services />
                <Products />
                <Gallery />
                <Media />
            </div>
        </>
    )
}

export default Menu;