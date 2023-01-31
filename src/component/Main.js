import React from "react";
// import { FaClipboard , FaUserAlt , FaFile , FaShoppingCart } from 'react-icons/fa'
// import { MdMessage , MdAnalytics, MdFavorite, MdSettings } from 'react-icons/md'
import './main.css';



const Main = () => {

    // const [isExpanded, setExpendState] = useState(false);
	// const menuItems = [
	// 	{
	// 		text: "Dashboard",
	// 		icon: <FaClipboard />,
	// 	},
	// 	{
	// 		text: "Admin Profile",
	// 		icon: <FaUserAlt />,
	// 	},
	// 	{
	// 		text: "Messages",
	// 		icon: <MdMessage />,
	// 	},
	// 	{
	// 		text: "Analytics",
	// 		icon: <MdAnalytics />,
	// 	},
	// 	{
	// 		text: "File Manager",
	// 		icon: <FaFile />,
	// 	},
	// 	{
	// 		text: "Orders",
	// 		icon: <FaShoppingCart />,
	// 	},
	// 	{
	// 		text: "Saved Items",
	// 		icon: <MdFavorite />,
	// 	},
	// 	{
	// 		text: "Settings",
	// 		icon: <MdSettings />,
	// 	},
	// ];

    return (
        <div>Main Dashboard</div>
        // <div className={ isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX" } >
        //     <div className="nav-upper">
        //         <div className="nav-heading">
        //             {isExpanded && (
        //                 <div className="nav-brand">
        //                     <img src="icons/Logo.svg" alt="" srcset="" />
        //                     <h2>Showkart</h2>
        //                 </div> )}
        //             <button className={ isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out" } onClick={() => setExpendState(!isExpanded)} >
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </button>
        //         </div>
        //         <div className="nav-menu">
        //             {menuItems.map(({ text, icon }) => (
        //                 <a className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} href="#" >
        //                     <img className="menu-item-icon" src={icon} alt="" srcset="" />
        //                     {isExpanded && <p>{text}</p>}
        //                 </a>
        //             ))}
        //         </div>
        //     </div>
        //     <div className="nav-footer">
        //         {isExpanded && (
        //             <div className="nav-details">
        //                 <img className="nav-footer-avatar" src="icons/admin-avatar.svg" alt="" srcset="" />
        //                 <div className="nav-footer-info">
        //                     <p className="nav-footer-user-name">M Showkat</p>
        //                     <p className="nav-footer-user-position">store admin</p>
        //                 </div>
        //             </div>
        //         )}
        //         <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
        //     </div>
        // </div>
    )
}

export default Main
