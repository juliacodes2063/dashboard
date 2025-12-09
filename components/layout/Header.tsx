import IconButton from '@/components/ui/IconButton';
import Image from 'next/image';

import { SearchIcon, BellIcon, SunIcon} from '../icons';

const Header = () => {
  return (
    <header className="p-3 md:pl-0 md:pt-0 md:pb-0 h-[74px] flex items-center justify-between md:pr-[16px]">
      <IconButton aria-label="Search" size="mdm">
        <SearchIcon />
      </IconButton>

      <div className="flex items-center gap-[12px]">
        <IconButton aria-label="Notifications" size="mdm">
          <BellIcon  />
        </IconButton>

        <IconButton aria-label="Theme" size="mdm">
          <SunIcon  />
        </IconButton>

        <IconButton theme="avatar" aria-label="Profile">
          <Image src="/user.jpg" alt="Profile" width={46} height={46} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
