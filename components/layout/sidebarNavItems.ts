import {
  PackageIcon,
  HomeIcon,
  LocationIcon,
  CartIcon,
  SwitchIcon,
  DoneIcon,
} from '../icons';

export interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const sidebarNavItems: NavItem[] = [
  { id: 'home', icon: HomeIcon },
  { id: 'box', icon: PackageIcon },
  { id: 'location', icon: LocationIcon },
  { id: 'cart', icon: CartIcon },
  { id: 'switch', icon: SwitchIcon },
  { id: 'done', icon: DoneIcon },
];
