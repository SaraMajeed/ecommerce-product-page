import CartIcon from "./CartIcon"
import iconMenu from "../assets/images/icon-menu.svg"
import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";

export default function Header({ showMenu, toggleCart, menuItems, quantity }) {
  console.log(quantity)
  return (
    <nav className='flex flex-row sticky top-0 z-10 bg-white py-10 max-h-12 w-full items-center lg:px-32 md:px-10 lg:border-b'>
        <button className='p-5 min-w-max lg:hidden' onClick={showMenu}>
            <img src={iconMenu} alt="mobile-menu-button" />
        </button>
        <img className = "mr-7" src={logo} alt="logo" />
        <div className="xs: hidden sm:hidden lg:block">
          <ul className="flex text-grayish-blue">
            {
              menuItems.map((item, i) => {
                return <li key={i} className="mx-5 hover:text-dark-grayish-blue hover:border-b-2 border-orange hover:border-offset-4"><button>{item}</button></li>
              })
            }

          </ul>
          
        </div>
        <button onClick={toggleCart} className='flex py-5 w-full justify-end min-w-max'>
            <CartIcon fill={"hsl(219, 9%, 45%)"} />
            <p className={`absolute top-3 text-[10px] rounded-l-lg rounded-r-lg text-pale-orange w-6 h-4 ${quantity ? 'bg-orange' : ''}`}>{quantity? quantity : null}</p>
        </button>
        <button className='flex p-5 min-w-max min-h-max justify-end '>
            <img className='h-12 hover:outline rounded-full outline-orange outline-2' src={avatar} alt="avatar" />
        </button>
    </nav>
  )
}
