import React, { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  const menuVariants ={
    open :{
       x:0,
       transition:{
        stiffness:20,
        damping:15,
       },
       closed:{
        x:'-100%',
        transition:{
            stiffness:20,
            damping:15,
           },
       }
    }
  }
  return <div>Navbar</div>;
}

export default Navbar;
