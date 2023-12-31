import { BsHouseFill, BsBellFill, BsEnvelopeFill } from 'react-icons/bs';
import { FaHashtag, FaUser } from 'react-icons/fa';

import SidebarItem from '@/components/SidebarItem';
import SidebarLogo from '@/components/SidebarLogo';
import SidebarTweetButton from '@/components/SidebarTweetButton';

const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-4 lg:w-[230px]">
            <SidebarLogo />
            <SidebarItem icon={BsHouseFill} label="Home" />
            <SidebarItem icon={FaHashtag} label="Explore" />
            <SidebarItem icon={BsBellFill} label="Notifications" />
            <SidebarItem icon={BsEnvelopeFill} label="Messages" />
            <SidebarItem icon={FaUser} label="Profile" />
            <SidebarTweetButton />
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
