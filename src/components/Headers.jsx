// import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { toggletheme } from "../redux/theme/themeSlice.js";
// import { signoutSuccess } from "../redux/user/userSlice";
// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";

// function Headers() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get("searchTerm");
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   const handleSignOut = async () => {
//     try {
//       const res = await fetch("/api/user/signout", {
//         method: "POST",
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set("searchTerm", searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className="border-b-2"
//     style={{
//       width: "100%",
//       height: "5%"
//     }}>
//       <Link
//         to="/"
//         className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//         style={{width: "15%",
//           height: "100%"
//         }}
//       >
//         <span
//         style={{
//           objectFit: "cover",
//           width: "100%",
//           height: "100%"
//         }}
//         >
//           <img src={logo} alt=""
//           style={{
//             width: "100%",
//             height: "50%"
//           }}/>
//         </span>
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <TextInput
//           type="text"
//           placeholder="Search..."
//           rightIcon={AiOutlineSearch}
//           className="hidden lg:inline"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>
//       <Button className="w-12 h-10 lg:hidden " color="gray" pill>
//         <AiOutlineSearch />
//       </Button>
//       <div className="flex gap-2 md:order-2">
//         <Button
//           className="w-12 h-10 hidden sm:inline"
//           color="gray"
//           pill
//           onClick={() => dispatch(toggletheme())}
//         >
//           {theme === "light" ? <FaSun /> : <FaMoon />}
//         </Button>
//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt="user" img={currentUser.profilePicture} rounded />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">{currentUser.username}</span>
//               <span className="block text-sm font-medium truncate">
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={"/dashboard?tab=profile"}>
//               <Dropdown.Item>Profile</Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to="/sign-in">
//             <Button gradientDuoTone="purpleToBlue" outline pill>
//               Sign In
//             </Button>
//           </Link>
//         )}
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link active={path === "/"} as={"div"}>
//           <Link to="/">Home</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === "/about"} as={"div"}>
//           <Link to="/about">About</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === "/projects"} as={"div"}>
//           <Link to="/projects">Tools</Link>
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Headers;




// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggletheme } from '../redux/theme/themeSlice.js';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { signOutSuccess as securitySignOutSuccess } from '../redux/securityPersonnelSlice';
// import { useEffect, useState } from 'react';
// import logo from '../assets/logo.png';

// function Headers() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { currentPersonnel } = useSelector((state) => state.securityPersonnel);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   const handleSignOut = async () => {
//     try {
//       const res = await fetch('/api/user/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSecuritySignOut = async () => {
//     try {
//       const res = await fetch('/api/security/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(securitySignOutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const dropdownStyle = {
//     position: 'relative',
//     display: 'inline-block',
    
//   };

//   const menuStyle = {
//     display: isOpen ? 'block' : 'none',
//     position: 'absolute',
//     top: '190%',
//     left: '0',
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: '20px 0px',
//     zIndex: 500,
//     width: '200px',
//     borderRadius: "5px"
//   };

//   const linkStyle = {
//     display: 'block',
//     padding: '5px 16px',
//     textDecoration: 'none',
//     transition: 'background-color 0.3s ease',
   
//   };

//   return (
//     <Navbar
//       className="border-b-2"
//       style={{ width: '100%', height: '80px', padding: '10px 20px' }}
//     >
//       <Link
//         to="/"
//         className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           width: '15%',
//           height: '100%',
//         }}
//       >
//         <img
//           src={logo}
//           alt="Logo"
//           style={{
//             height: '60px',
//             width: 'auto',
//             maxWidth: '100%',
//             objectFit: 'contain',
//           }}
//         />
//       </Link>

//       <form onSubmit={handleSubmit}>
//         <TextInput
//           type="text"
//           placeholder="Search..."
//           rightIcon={AiOutlineSearch}
//           className="hidden lg:inline"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>

//       <Button className="w-12 h-10 lg:hidden " color="gray" pill>
//         <AiOutlineSearch />
//       </Button>

//       <div className="flex gap-2 md:order-2">
//         <Button
//           className="w-12 h-10 hidden sm:inline"
//           color="gray"
//           pill
//           onClick={() => dispatch(toggletheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>

//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt="user" img={currentUser.profilePicture} rounded />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">{currentUser.username}</span>
//               <span className="block text-sm font-medium truncate">
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item>Profile</Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
//           </Dropdown>
//         ) : currentPersonnel ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt="security" img={currentPersonnel.profilePicture} rounded />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">{currentPersonnel.username}</span>
//               <span className="block text-sm font-medium truncate">
//                 {currentPersonnel.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/security-dashboard'}>
//               <Dropdown.Item>Dashboard</Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={handleSecuritySignOut}>Sign Out</Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to="/sign-in">
//             <Button gradientDuoTone="purpleToBlue" outline pill>
//               Sign In
//             </Button>
//           </Link>
//         )}

//         <Navbar.Toggle />
//       </div>

//       <Navbar.Collapse>
//         <Navbar.Link active={location.pathname === '/'} as={'div'}>
//           <Link to="/">Home</Link>
//         </Navbar.Link>

//         <Navbar.Link active={location.pathname === '/Live'} as={'div'}>
//           <Link to="/chat/:chatId" style={linkStyle}>
//             Support
//           </Link>
//         </Navbar.Link>

//         <Navbar.Link active={location.pathname === '/about'} as={'div'}>
//           <Link to="/about">About</Link>
//         </Navbar.Link>

//         <Navbar.Link
//           active={location.pathname === '/projects'}
//           as={'div'}
//           style={dropdownStyle}
//         >
//           <Link to="" onClick={toggleDropdown} style={linkStyle}>
//             Tools
//           </Link>
//           {isOpen && (
//             <div style={menuStyle}>
//               <Link to="/trivia" style={linkStyle}>
//                 Trivia
//               </Link>
//               <Link to="/url" style={linkStyle}>
//                 Url Scanner
//               </Link>
//               <Link to="/passgen" style={linkStyle}>
//                 Password Generator
//               </Link>
//             </div>
//           )}
//         </Navbar.Link>

//         <Navbar.Link active={location.pathname === '/security-sign-in'} as={'div'}>
//           <Link to="/security-sign-in">Security Sign In</Link>
//         </Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Headers;



import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggletheme } from '../redux/theme/themeSlice.js';
import { signoutSuccess } from '../redux/user/userSlice';
import { signOutSuccess as securitySignOutSuccess } from '../redux/securityPersonnelSlice';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

function Headers() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { currentPersonnel } = useSelector((state) => state.securityPersonnel);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/user/signout', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSecuritySignOut = async () => {
    try {
      const res = await fetch('/api/security/signout', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(securitySignOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const menuStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '190%',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px 0px',
    zIndex: 500,
    width: '200px',
    borderRadius: '5px',
  };

  const linkStyle = {
    display: 'block',
    padding: '5px 16px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Navbar
      className="border-b-2"
      style={{ width: '100%', height: '80px', padding: '10px 20px' }}
    >
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '15%',
          height: '100%',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: '60px',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </Link>

      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggletheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : currentPersonnel ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="security"
                img={currentPersonnel.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentPersonnel.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentPersonnel.email}
              </span>
            </Dropdown.Header>
            <Link to={'/security-dashboard'}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSecuritySignOut}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline pill>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={location.pathname === '/Live'} as={'div'}>
          <Link to="/chat/:chatId" style={linkStyle}>
            Support
          </Link>
        </Navbar.Link>

        <Navbar.Link active={location.pathname === '/about'} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link
          active={location.pathname === '/projects'}
          as={'div'}
          style={dropdownStyle}
        >
          <Link to="#" onClick={toggleDropdown} style={linkStyle}>
            Tools
          </Link>
          {isOpen && (
            <div style={menuStyle}>
              <Link to="/trivia" style={linkStyle} onClick={closeDropdown}>
                Trivia
              </Link>
              <Link to="/url" style={linkStyle} onClick={closeDropdown}>
                URL Scanner
              </Link>
              <Link to="/passgen" style={linkStyle} onClick={closeDropdown}>
                Password Generator
              </Link>
            </div>
          )}
        </Navbar.Link>

        <Navbar.Link
          active={location.pathname === '/security-sign-in'}
          as={'div'}
        >
          <Link to="/security-sign-in">Security Sign In</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Headers;
