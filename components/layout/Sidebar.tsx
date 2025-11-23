'use client';

import { LogOutIcon, PackageIcon } from '../icons';
import IconButton from '../ui/IconButton';
import SidebarNav from './SidebarNav';
import { sidebarNavItems } from './sidebarNavItems';

const Sidebar = () => {
  return (
    <div  className="hidden md:flex w-[74px] flex-col justify-between items-center p-3">
      <div className="flex flex-col items-center gap-30">
        <IconButton aria-label="Notifications" size="lg" theme="logo">
          <PackageIcon  />
        </IconButton>

       <SidebarNav items={sidebarNavItems} />
      </div>

      <IconButton aria-label="Notifications" size="lg">
        <LogOutIcon />
      </IconButton>
    </div>
  );
};

export default Sidebar;
