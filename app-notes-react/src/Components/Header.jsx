import React from "react";
import FlutterDashTwoToneIcon from '@mui/icons-material/FlutterDashTwoTone';
import StickyNote2TwoToneIcon from '@mui/icons-material/StickyNote2TwoTone';

function Header() {
    return (
        <header className="layout__head">
            <h1><FlutterDashTwoToneIcon sx={{fontSize: 55}} /> Notes<StickyNote2TwoToneIcon sx={{fontSize: 30}} /></h1>
        </header>
    );
}

export default Header;