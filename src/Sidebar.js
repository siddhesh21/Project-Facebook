import React from "react";
import SidebarRow from "./SidebarRow";
import "./SidebarRow.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/135461166_858933254946649_8912077254214778819_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=Kd0MRQo_8kUAX_tbiuH&_nc_ht=scontent.fdub4-1.fna&oh=f78afee581fd45c9a5be47ecf694d880&oe=6048C720"
        title="Siddhesh Kankekar"
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
