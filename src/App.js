import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import ApiCall from "./pages/ApiCall";
import { site_text } from "./utils/languageMapper";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "./redux/slices/config/configSlice";
import pwcwhite from "./assets/images/pwcwhite.png";
import HomeIcon from "@mui/icons-material/Home";
import PasteIcon from '@mui/icons-material/ContentPaste';
import PersonIcon from '@mui/icons-material/Person';
import { size } from "lodash";
import LogoutIcon from '@mui/icons-material/Logout';
import LeftPanel from "./components/LeftPanel";
import Front from "./pages/Front";

function App() {
  const [showContacts, setShowContacts] = useState(false);

  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  window.site_lang = config?.language;
  window.site_text = site_text;

  React.useEffect(() => {
    const lang_value = localStorage.getItem("site-lang");
    if (lang_value) {
      dispatch(updateLanguage(lang_value));
    } else {
      dispatch(updateLanguage("English"));
    }
  }, []);

  const changeLang = (lang) => {
    dispatch(updateLanguage(lang));
    localStorage.setItem("site-lang", lang);
  };

  return (
    <div>
      
        <>
          <Routes>
          <Route exact path="/" element={<Front />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/redux" element={<Redux />} />
            <Route exact path="/api" element={<ApiCall />} />
          </Routes>
        </>

        
      </div>
    
  );
}

export default App;
