import IconButton from '@/components/ui/IconButton';
import Image from 'next/image';

import { SearchIcon, BellIcon, SunIcon} from '../icons';

const Header = () => {
  return (
    <header className="p-3 h-[74px] flex items-center justify-between md:pr-[16px]">
      <IconButton aria-label="Search">
        <SearchIcon />
      </IconButton>

      <div className="flex items-center gap-[12px]">
        <IconButton aria-label="Notifications">
          <BellIcon  />
        </IconButton>

        <IconButton aria-label="Theme">
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
