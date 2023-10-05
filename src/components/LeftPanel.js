import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Redux from "../pages/Redux";
import ApiCall from "../pages/ApiCall";
import { site_text } from "../utils/languageMapper";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "../redux/slices/config/configSlice";
import pwcwhite from "../assets/images/pwcwhite.png";
import HomeIcon from "@mui/icons-material/Home";
import PasteIcon from '@mui/icons-material/ContentPaste';
import PersonIcon from '@mui/icons-material/Person';
import { size } from "lodash";
import LogoutIcon from '@mui/icons-material/Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSalesforce , } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faCircleUser, faComments } from '@fortawesome/free-regular-svg-icons';
import { faBookOpenReader , faCommentSms, faRightFromBracket, faTableColumns} from '@fortawesome/free-solid-svg-icons'
import {  } from "react-icons/fa";


export default function LeftPanel() {

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
            <div className="main-div" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", position:'fixed' }}>
                <div className="l-panel d-flex justify-content-start">
                    <div className="logo">
                        <img src={pwcwhite} alt="" />
                    </div>
                    <ul className="page-nav w-100">
                    <li  style={{ marginTop: "10px" }} className="hover:bg-[#FFFFFF]">
                        <FontAwesomeIcon icon={faTableColumns} style={{color: "#c4c4c4", height:'50%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }} className="hover:bg-[#FFFFFF]">
                        <FontAwesomeIcon icon={faAddressBook} style={{color: "#c4c4c4", height:'50%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faBookOpenReader} style={{color: "#c4c4c4", height:'50%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faSalesforce} style={{color: "#c4c4c4", height:'80%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faCircleUser} style={{color: "#c4c4c4", height:'70%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faComments} style={{color: "#c4c4c4", height:'50%'}} />
                        </li>
                        <li  style={{ marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#c4c4c4", height:'50%'}} />
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    );

}