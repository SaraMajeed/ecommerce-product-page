export default function SideNav({menuStatus, hideMenu, menuItems}) {
  
  return (
    <div className={`w-72 p-5 h-screen fixed z-20 bg-white ${!menuStatus? "-translate-x-full" : "translate-x-0"}`}>
      <button onClick={hideMenu}>
        <img src="./src/assets/images/icon-close.svg" alt="close side nav" />
      </button>
      <ul className='pt-10'>
        {menuItems.map((item, i) => {
          return <li key = {i} className='py-3 font-bold'>{item}</li>
        })}
      </ul>
    </div>
  )
}
