import { SidebarLink } from '@/types';
import * as Icons from '@/components/ui/icons';

export const themes = [
  { value: 'light', label: 'Light', icon: '/assets/icons/sun.svg' },
  { value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg' },
  { value: 'system', label: 'System', icon: '/assets/icons/computer.svg' },
];

export const sidebarLinks: SidebarLink[] = [
  {
    icon: <Icons.Home className='size-5' />,
    route: '/',
    label: 'Home',
  },
  { icon: <Icons.User className='size-5' />, route: '/profile', label: 'Profile' },
  {
    icon: <Icons.CircleHelp className='size-5' />,
    route: '/ask-question',
    label: 'Ask a question',
  },
  {
    icon: <Icons.Users className='size-5' />,
    route: '/community',
    label: 'Community',
  },
  {
    icon: <Icons.Star className='size-5' />,
    route: '/collection',
    label: 'Collections',
  },
  {
    icon: <Icons.Tag className='size-5' />,
    route: '/tags',
    label: 'Tags',
  },

  {
    icon: <Icons.BriefcaseBusiness className='size-5' />,
    route: '/jobs',
    label: 'Find Jobs',
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
