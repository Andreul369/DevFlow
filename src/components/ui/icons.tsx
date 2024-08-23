import * as Lucide from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// eslint-disable-next-line no-undef
export type Icon = (props: LucideProps) => JSX.Element;

export const Activity = Lucide.Activity;
export const Add = Lucide.Plus;
export const ArrowDown = Lucide.ArrowDown;
export const ArrowUp = Lucide.ArrowUp;
export const ArrowLeft = Lucide.ArrowLeft;
export const ArrowRight = Lucide.ArrowRight;
export const BankNote = Lucide.Banknote;
export const Bell = Lucide.Bell;
export const CaretSort = Lucide.SortAsc;
export const Calendar = Lucide.Calendar;
export const CalendarCheck = Lucide.CalendarCheck;
export const CalendarDays = Lucide.CalendarDays;
export const Computer = Lucide.Computer;
export const ChevronDown = Lucide.ChevronDown;
export const Check = Lucide.Check;
export const CheckCircle = Lucide.CheckCircle;
export const ChevronLeft = Lucide.ChevronLeft;
export const ChevronRight = Lucide.ChevronRight;
export const ChevronUp = Lucide.ChevronUp;
export const Circle = Lucide.CircleIcon;
export const Close = Lucide.X;
export const Copy = Lucide.Copy;
export const CopyDone = Lucide.ClipboardCheck;
export const CreditCard = Lucide.CreditCard;
export const CrossCircled = Lucide.XCircle;
export const Dashboard = Lucide.Activity;
export const DollarSign = Lucide.DollarSign;
export const DotsHorizontal = Lucide.MoreHorizontal;
export const Ellipsis = Lucide.MoreVertical;
export const Eye = Lucide.Eye;
export const EyeNone = Lucide.EyeOff;
export const File = Lucide.File;
export const Frown = Lucide.Frown;
export const GraduationCap = Lucide.GraduationCap;
export const Help = Lucide.HelpCircle;
export const Home = Lucide.Home;
export const Key = Lucide.Key;
export const Laptop = Lucide.Laptop;
export const ListFilter = Lucide.ListFilter;
export const LineChart = Lucide.LineChart;
export const Logo = Lucide.Command;
export const LogOut = Lucide.LogOut;
export const Minus = Lucide.Minus;
export const MixerHorizontal = Lucide.SlidersHorizontal;
export const Moon = Lucide.Moon;
export const MoreVertical = Lucide.MoreVertical;
export const Organization = Lucide.Building;
export const Package = Lucide.Package;
export const Package2 = Lucide.Package2;
export const Page = Lucide.File;
export const PanelLeft = Lucide.PanelLeft;
export const Phone = Lucide.Phone;
export const PlusCircle = Lucide.PlusCircle;
export const Plus = Lucide.Plus;
export const Post = Lucide.FileText;
export const Search = Lucide.Search;
export const SendHorizontal = Lucide.SendHorizonal;
export const Settings = Lucide.Settings;
export const ShoppingCart = Lucide.ShoppingCart;
export const Smile = Lucide.Smile;
export const Spinner = Lucide.Loader2;
export const Sun = Lucide.SunMedium;
export const Stopwatch = Lucide.Watch;
export const User = Lucide.User;
export const Users = Lucide.Users;
export const Users2 = Lucide.Users2;
export const ThumbsDown = Lucide.ThumbsDown;
export const ThumbsUp = Lucide.ThumbsUp;
export const Trash = Lucide.Trash;
export const Truck = Lucide.Truck;
export const Wallet = Lucide.Wallet;
export const Waves = Lucide.Waves;
export const Warning = Lucide.AlertTriangle;

export const Apple: Icon = (props) => (
  <svg role='img' viewBox='0 0 24 24' {...props}>
    <path
      d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'
      fill='currentColor'
    />
  </svg>
);

export const ClerkHead: Icon = (props) => (
  <svg fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.116 3.1608L16.2354 6.04135C16.1449 6.13177 16.0266 6.18918 15.8996 6.20437C15.7725 6.21956 15.6441 6.19165 15.5348 6.12513C14.4017 5.44155 13.0949 5.10063 11.7722 5.14354C10.4495 5.18645 9.16759 5.61134 8.08114 6.36692C7.41295 6.83202 6.83276 7.41221 6.36765 8.0804C5.61297 9.16751 5.18848 10.4495 5.14524 11.7722C5.10201 13.0949 5.44187 14.4019 6.12395 15.536C6.19 15.6451 6.21764 15.7731 6.20246 15.8998C6.18728 16.0264 6.13015 16.1443 6.04018 16.2347L3.15962 19.1152C3.10162 19.1736 3.03168 19.2188 2.95459 19.2476C2.87751 19.2765 2.79511 19.2883 2.71302 19.2824C2.63093 19.2764 2.5511 19.2528 2.479 19.2131C2.40689 19.1734 2.34422 19.1186 2.29527 19.0524C0.736704 16.9101 -0.0687588 14.3121 0.0046021 11.6639C0.077963 9.01568 1.02602 6.46625 2.70079 4.41354C3.21208 3.78549 3.78622 3.21134 4.41428 2.70006C6.46683 1.02574 9.01589 0.0779624 11.6637 0.00460332C14.3115 -0.0687557 16.9091 0.736432 19.0512 2.29453C19.1179 2.34332 19.1731 2.40598 19.2131 2.47818C19.2532 2.55038 19.2771 2.6304 19.2833 2.71274C19.2895 2.79508 19.2777 2.87778 19.2488 2.95513C19.2199 3.03248 19.1746 3.10265 19.116 3.1608Z'
      fill='#5D31FF'
    />
    <path
      d='M19.1135 20.8289L16.2329 17.9483C16.1424 17.8579 16.0241 17.8005 15.8971 17.7853C15.7701 17.7701 15.6416 17.798 15.5323 17.8645C14.4639 18.509 13.2398 18.8497 11.9921 18.8497C10.7443 18.8497 9.52022 18.509 8.45181 17.8645C8.34252 17.798 8.21406 17.7701 8.08701 17.7853C7.95997 17.8005 7.84171 17.8579 7.75119 17.9483L4.87063 20.8289C4.81022 20.8869 4.76333 20.9576 4.73329 21.0358C4.70324 21.114 4.69078 21.1979 4.69678 21.2815C4.70277 21.3651 4.72708 21.4463 4.76799 21.5194C4.80889 21.5926 4.86538 21.6558 4.93346 21.7046C6.98391 23.1965 9.45442 24.0001 11.9902 24.0001C14.5259 24.0001 16.9964 23.1965 19.0469 21.7046C19.1152 21.6561 19.172 21.5931 19.2133 21.5201C19.2545 21.4471 19.2792 21.366 19.2856 21.2824C19.2919 21.1988 19.2798 21.1148 19.2501 21.0365C19.2203 20.9581 19.1737 20.8872 19.1135 20.8289V20.8289Z'
      fill='currentColor'
    />
    <path
      d='M11.9973 15.4223C13.8899 15.4223 15.4243 13.888 15.4243 11.9953C15.4243 10.1027 13.8899 8.56836 11.9973 8.56836C10.1046 8.56836 8.57031 10.1027 8.57031 11.9953C8.57031 13.888 10.1046 15.4223 11.9973 15.4223Z'
      fill='currentColor'
    />
  </svg>
);

export const ClerkWide: Icon = (props) => (
  <svg
    width='77'
    height='24'
    viewBox='0 0 77 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M35.1481 16.7381C34.7521 17.1486 34.2765 17.4741 33.7505 17.6947C33.2245 17.9154 32.659 18.0265 32.0886 18.0213C31.6069 18.0359 31.1273 17.9517 30.6794 17.7739C30.2315 17.5961 29.8247 17.3285 29.4841 16.9875C28.8654 16.3421 28.5093 15.4206 28.5093 14.3221C28.5093 12.1231 29.941 10.619 32.0886 10.619C32.6646 10.6109 33.2353 10.7301 33.7599 10.968C34.2845 11.206 34.7501 11.5568 35.1234 11.9955L36.9816 10.3525C35.7707 8.8827 33.8059 8.12305 31.9401 8.12305C28.2885 8.12305 25.6992 10.64 25.6992 14.343C25.6992 16.1745 26.3427 17.7167 27.4279 18.8057C28.5131 19.8947 30.0591 20.5344 31.843 20.5344C34.16 20.5344 36.0087 19.5939 37.0463 18.4116L35.1481 16.7381Z'
      fill='currentColor'
    />
    <path d='M38.7266 3.42773H41.4929V20.3398H38.7266V3.42773Z' fill='currentColor' />
    <path
      d='M54.8179 15.2828C54.8635 14.9145 54.8889 14.5439 54.894 14.1728C54.894 10.6659 52.5979 8.12611 49.0472 8.12611C48.2641 8.11071 47.4861 8.25581 46.7612 8.55246C46.0363 8.84911 45.3797 9.29104 44.832 9.85102C43.7944 10.94 43.1719 12.4822 43.1719 14.3213C43.1719 18.07 45.8144 20.5374 49.3176 20.5374C51.6688 20.5374 53.3614 19.5855 54.3762 18.2947L52.5637 16.6897L52.4742 16.6136C52.1146 17.0634 51.6561 17.4243 51.1344 17.6683C50.6127 17.9123 50.0419 18.0328 49.4661 18.0205C47.6879 18.0205 46.4046 16.9829 46.0391 15.2828H54.8179ZM46.0848 13.0628C46.2083 12.5269 46.4613 12.0295 46.8216 11.614C47.1214 11.2874 47.4883 11.0293 47.897 10.8574C48.3058 10.6856 48.7468 10.604 49.19 10.6183C50.7702 10.6183 51.7602 11.6064 52.101 13.0628H46.0848Z'
      fill='currentColor'
    />
    <path
      d='M63.445 8.08984V11.1741C63.1251 11.1494 62.8034 11.1246 62.6073 11.1246C60.513 11.1246 59.325 12.6287 59.325 14.603V20.3394H56.5625V8.2612H59.325V10.0908H59.3498C60.2884 8.80761 61.6344 8.09366 63.1004 8.09366L63.445 8.08984Z'
      fill='currentColor'
    />
    <path
      d='M69.8866 15.2812L67.8894 17.5031V20.3398H65.125V3.42773H67.8894V13.8019L72.8224 8.29975H76.1046L71.7638 13.1603L76.1808 20.3398H73.0718L69.938 15.2812H69.8866Z'
      fill='currentColor'
    />
    <path
      d='M19.116 3.1608L16.2354 6.04135C16.1449 6.13177 16.0266 6.18918 15.8996 6.20437C15.7725 6.21956 15.6441 6.19165 15.5348 6.12513C14.4017 5.44155 13.0949 5.10063 11.7722 5.14354C10.4495 5.18645 9.16759 5.61134 8.08114 6.36692C7.41295 6.83202 6.83276 7.41221 6.36765 8.0804C5.61297 9.16751 5.18848 10.4495 5.14524 11.7722C5.10201 13.0949 5.44187 14.4019 6.12395 15.536C6.19 15.6451 6.21764 15.7731 6.20246 15.8998C6.18728 16.0264 6.13015 16.1443 6.04018 16.2347L3.15962 19.1152C3.10162 19.1736 3.03168 19.2188 2.95459 19.2476C2.87751 19.2765 2.79511 19.2883 2.71302 19.2824C2.63093 19.2764 2.5511 19.2528 2.479 19.2131C2.40689 19.1734 2.34422 19.1186 2.29527 19.0524C0.736704 16.9101 -0.0687588 14.3121 0.0046021 11.6639C0.077963 9.01568 1.02602 6.46625 2.70079 4.41354C3.21208 3.78549 3.78622 3.21134 4.41428 2.70006C6.46683 1.02574 9.01589 0.0779624 11.6637 0.00460332C14.3115 -0.0687557 16.9091 0.736432 19.0512 2.29453C19.1179 2.34332 19.1731 2.40598 19.2131 2.47818C19.2532 2.55038 19.2771 2.6304 19.2833 2.71274C19.2895 2.79508 19.2777 2.87778 19.2488 2.95513C19.2199 3.03248 19.1746 3.10265 19.116 3.1608Z'
      fill='#5D31FF'
    />
    <path
      d='M19.1135 20.8289L16.2329 17.9483C16.1424 17.8579 16.0241 17.8005 15.8971 17.7853C15.7701 17.7701 15.6416 17.798 15.5323 17.8645C14.4639 18.509 13.2398 18.8497 11.9921 18.8497C10.7443 18.8497 9.52022 18.509 8.45181 17.8645C8.34252 17.798 8.21406 17.7701 8.08701 17.7853C7.95997 17.8005 7.84171 17.8579 7.75119 17.9483L4.87063 20.8289C4.81022 20.8869 4.76333 20.9576 4.73329 21.0358C4.70324 21.114 4.69078 21.1979 4.69678 21.2815C4.70277 21.3651 4.72708 21.4463 4.76799 21.5194C4.80889 21.5926 4.86538 21.6558 4.93346 21.7046C6.98391 23.1965 9.45442 24.0001 11.9902 24.0001C14.5259 24.0001 16.9964 23.1965 19.0469 21.7046C19.1152 21.6561 19.172 21.5931 19.2133 21.5201C19.2545 21.4471 19.2792 21.366 19.2856 21.2824C19.2919 21.1988 19.2798 21.1148 19.2501 21.0365C19.2203 20.9581 19.1737 20.8872 19.1135 20.8289V20.8289Z'
      fill='currentColor'
    />
    <path
      d='M11.9973 15.4223C13.8899 15.4223 15.4243 13.888 15.4243 11.9953C15.4243 10.1027 13.8899 8.56836 11.9973 8.56836C10.1046 8.56836 8.57031 10.1027 8.57031 11.9953C8.57031 13.888 10.1046 15.4223 11.9973 15.4223Z'
      fill='currentColor'
    />
  </svg>
);

export const DemoLogo: Icon = (props) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='100%' height='100%' rx='16' fill='white' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
      fill='black'
    />
  </svg>
);

export const DevOverflow: Icon = (props) => (
  <svg
    width='23'
    height='23'
    viewBox='0 0 23 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.4545 0C9.35139 1.58314 10.447 5.76875 10.6868 7.66667L11.6161 7.43434C11.3577 5.38927 11.5997 1.67624 10.4545 0Z'
      fill='#FF7000'
    />
    <path
      d='M13.4748 0.232422L11.8485 7.43444L12.7778 7.66677L14.1717 0.464745L13.4748 0.232422Z'
      fill='#FF7000'
    />
    <path
      d='M6.73743 1.16152L9.29299 7.8989L4.87884 2.55546L3.94955 2.78778L8.36369 8.82819L2.09097 4.87869L1.85864 5.80799L8.13137 9.75748L9.29299 7.8989L10.4546 7.66657L7.66672 0.929199L6.73743 1.16152Z'
      fill='#FF7000'
    />
    <path
      d='M16.495 1.16162L13.0101 7.89899C14.6309 8.14428 17.5934 2.41568 16.495 1.16162Z'
      fill='#FF7000'
    />
    <path
      d='M14.1718 8.82813C16.2617 8.38753 18.7828 5.18398 19.9798 3.4847C18.0304 3.32137 14.6725 7.04403 14.1718 8.82813Z'
      fill='#FF7000'
    />
    <path
      d='M0.696923 7.89893L0.4646 8.5959C2.42945 9.62711 5.44754 10.5854 7.66662 10.6868C7.06518 8.95723 2.38006 8.24727 0.696923 7.89893Z'
      fill='#FF7000'
    />
    <path d='M0 11.1516V12.0809H7.43434V11.1516H0Z' fill='#FF7000' />
    <path
      d='M15.5657 12.0809L23 11.8485V11.3839C21.525 10.9479 16.1205 10.4093 15.5657 12.0809Z'
      fill='#FF7000'
    />
    <path
      d='M15.3334 12.5457C15.9364 14.2785 20.622 14.9856 22.3031 15.3335L22.5354 15.1012V14.6366C20.5579 13.5987 17.5666 12.643 15.3334 12.5457Z'
      fill='#FF7000'
    />
    <path
      d='M15.1011 13.4749L14.6365 14.4041L20.9092 18.3536L21.1415 17.4243L15.1011 13.4749Z'
      fill='#FF7000'
    />
    <path
      d='M3.25256 19.7475L3.48489 19.9798L9.06064 15.101C7.56367 13.7254 3.87651 18.4095 3.25256 19.7475Z'
      fill='#FF7000'
    />
    <path
      d='M15.3334 22.3031H16.2627L13.7072 15.101H13.9395C14.8923 16.9475 16.9246 19.7752 18.8183 20.6768L19.0506 20.4445C18.2992 18.7585 16.4896 16.3427 15.0339 15.1849C14.4132 14.6913 13.2379 14.8027 12.9424 15.6564C12.4179 17.1723 14.9044 20.7351 15.3334 22.3031Z'
      fill='#FF7000'
    />
    <path
      d='M9.0606 15.1011C8.41135 16.6605 5.23375 20.6991 6.50504 22.0708L9.98989 15.3334L9.0606 15.1011Z'
      fill='#FF7000'
    />
    <path
      d='M10.2223 15.5657L9.06067 23C11.1948 22.3758 10.0118 17.4403 11.6162 16.0303C11.6162 17.5172 11.401 22.5293 13.0102 23C13.0092 21.5046 13.3123 17.1189 12.3067 15.9903C11.8991 15.5329 10.7878 15.6271 10.2223 15.5657Z'
      fill='#FF7000'
    />
  </svg>
);

export const Drizzle: Icon = (props) => (
  <svg viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect
      width='5.25365'
      height='22.2834'
      rx='2.62683'
      transform='matrix(0.873028 0.48767 -0.497212 0.867629 16.0791 30.3292)'
      fill='currentColor'
    ></rect>
    <rect
      width='5.25365'
      height='22.2834'
      rx='2.62683'
      transform='matrix(0.873028 0.48767 -0.497212 0.867629 34.3301 19)'
      fill='currentColor'
    ></rect>
    <rect
      width='5.25365'
      height='22.2834'
      rx='2.62683'
      transform='matrix(0.873028 0.48767 -0.497212 0.867629 62.4131 19.0005)'
      fill='currentColor'
      data-astro-cid-42ewbp4n=''
    ></rect>
    <rect
      width='5.25365'
      height='22.2834'
      rx='2.62683'
      transform='matrix(0.873028 0.48767 -0.497212 0.867629 44.1562 30.3292)'
      fill='currentColor'
      data-astro-cid-42ewbp4n=''
    ></rect>
  </svg>
);

export const Facebook: Icon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinejoin='round'
    strokeLinecap='round'
    {...props}
  >
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
  </svg>
);

export const GitHub: Icon = (props) => (
  <svg viewBox='0 0 438.549 438.549' {...props}>
    <path
      fill='currentColor'
      d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
    ></path>
  </svg>
);

export const Google: Icon = (props) => (
  <svg role='img' viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
    />
  </svg>
);

export const HeartIcon: Icon = (props) => {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <g>
        <path d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
      </g>
    </svg>
  );
};

export const HeartIconActive: Icon = (props) => {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <g>
        <path d='M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'></path>
      </g>
    </svg>
  );
};

export const Kysely: Icon = (props) => (
  <svg
    width='132'
    height='132'
    viewBox='0 0 132 132'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_8_3)'>
      <rect x='2' y='2' width='128' height='128' rx='16' fill='white' />
      <path
        d='M41.2983 109V23.9091H46.4918V73.31H47.0735L91.9457 23.9091H98.8427L61.9062 64.1694L98.5103 109H92.0288L58.5824 67.9087L46.4918 81.2873V109H41.2983Z'
        fill='black'
      />
    </g>
    <rect x='2' y='2' width='128' height='128' rx='16' stroke='#121212' strokeWidth={4} />
    <defs>
      <clipPath id='clip0_8_3'>
        <rect x='2' y='2' width='128' height='128' rx='16' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedIn: Icon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width='100'
    height='100'
    viewBox='0 0 50 50'
    {...props}
  >
    <path
      fill='currentColor'
      d='M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z'
    ></path>
  </svg>
);

export const Mdx: Icon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='57.97'
    height='24'
    viewBox='0 0 512 212'
    {...props}
  >
    <path
      fill='currentColor'
      d='m272.696 40.203l-.002 84.896l31.185-31.178l15.74 15.741l-57.642 57.638l-58.369-58.369l15.741-15.741l31.085 31.085l.001-84.072zM72.162 162.979V97.232l40.255 40.257l40.56-40.557v65.383h22.261V43.192l-62.82 62.816l-62.517-62.521v119.492z'
    />
    <path
      fill='#F9AC00'
      d='m447.847 36.651l15.74 15.741l-47.149 47.147l45.699 45.701l-15.741 15.741l-45.7-45.699l-45.701 45.699l-15.74-15.741l45.695-45.701l-47.146-47.147l15.74-15.741l47.152 47.146z'
    />
  </svg>
);

export const MongoDb: Icon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' {...props}>
    <path
      d='M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z'
      fill='#599636'
    />
    <path
      d='M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z'
      fill='#6cac48'
    />
    <path
      d='M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z'
      fill='#c2bfbf'
    />
  </svg>
);

export const Nextjs: Icon = (props) => (
  <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fill='currentColor'
      d='M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z'
    />
  </svg>
);

export const PayloadCms: Icon = (props) => (
  <svg
    viewBox='0 0 256 305'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <g>
      <path
        d='M116.204338,0 L256,84.0314829 L256,243.530232 L150.735428,304.426681 L150.735428,144.927526 L10.7718249,61.0076104 L116.204338,0 Z M105.488528,171.121391 L105.488528,295.584108 L0,232.129462 L105.488528,171.121391 Z'
        fill='currentColor'
      ></path>
    </g>
  </svg>
);

export const Paypal: Icon = (props) => (
  <svg role='img' viewBox='0 0 24 24' {...props}>
    <path
      d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z'
      fill='currentColor'
    />
  </svg>
);

export const Postgresql: Icon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.6 25.6' {...props}>
    <g fill='none' stroke='#fff'>
      <path
        d='M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81'
        fill='#000'
        stroke='#000'
        strokeLinecap='butt'
        strokeWidth='2.149'
      />
      <path
        d='M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z'
        fill='#336791'
        stroke='none'
      />
      <g>
        <g>
          <path d='M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687' />
          <path
            d='M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196'
            strokeLinejoin='bevel'
          />
        </g>
        <g>
          <path d='M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z' />
          <path d='M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733' />
        </g>
      </g>
      <g fill='#fff'>
        <path
          d='M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z'
          strokeWidth='.239'
        />
        <path
          d='M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z'
          strokeWidth='.119'
        />
      </g>
      <path d='M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68' />
    </g>
  </svg>
);

export const Prisma: Icon = (props) => (
  <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fill='currentColor'
      d='M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z'
    />
  </svg>
);

export const React: Icon = (props) => (
  <svg viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'
    />
  </svg>
);

export const System: Icon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <path
      d='m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497z'
      fillRule='nonzero'
      fill='currentColor'
    />
  </svg>
);

export const Supabase: Icon = (props) => (
  <svg
    {...props}
    width='109'
    height='113'
    viewBox='0 0 109 113'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
      fill='url(#paint0_linear)'
    />
    <path
      d='M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z'
      fill='url(#paint1_linear)'
      fillOpacity='0.2'
    />
    <path
      d='M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z'
      fill='#3ECF8E'
    />
    <defs>
      <linearGradient
        id='paint0_linear'
        x1='53.9738'
        y1='54.974'
        x2='94.1635'
        y2='71.8295'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#249361' />
        <stop offset='1' stopColor='#3ECF8E' />
      </linearGradient>
      <linearGradient
        id='paint1_linear'
        x1='36.1558'
        y1='30.578'
        x2='54.4844'
        y2='65.0806'
        gradientUnits='userSpaceOnUse'
      >
        <stop />
        <stop offset='1' stopOpacity='0' />
      </linearGradient>
    </defs>
  </svg>
);

export const Tailwind: Icon = (props) => (
  <svg viewBox='0 0 24 24' {...props}>
    <path
      fill='currentColor'
      d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'
    />
  </svg>
);

export const TRPC: Icon = (props) => (
  <svg
    width='512'
    height='512'
    viewBox='0 0 512 512'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='512' height='512' rx='150' fill='currentColor' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      className='fill-background'
      d='M255.446 75L326.523 116.008V138.556L412.554 188.238V273.224L435.631 286.546V368.608L364.6 409.615L333.065 391.378L256.392 435.646L180.178 391.634L149.085 409.615L78.0538 368.538V286.546L100.231 273.743V188.238L184.415 139.638L184.462 139.636V116.008L255.446 75ZM326.523 159.879V198.023L255.492 239.031L184.462 198.023V160.936L184.415 160.938L118.692 198.9V263.084L149.085 245.538L220.115 286.546V368.538L198.626 380.965L256.392 414.323L314.618 380.712L293.569 368.538V286.546L364.6 245.538L394.092 262.565V198.9L326.523 159.879ZM312.031 357.969V307.915L355.369 332.931V382.985L312.031 357.969ZM417.169 307.846L373.831 332.862V382.985L417.169 357.9V307.846ZM96.5154 357.9V307.846L139.854 332.862V382.915L96.5154 357.9ZM201.654 307.846L158.315 332.862V382.915L201.654 357.9V307.846ZM321.262 291.923L364.6 266.908L407.938 291.923L364.6 316.962L321.262 291.923ZM149.085 266.838L105.746 291.923L149.085 316.892L192.423 291.923L149.085 266.838ZM202.923 187.362V137.308L246.215 162.346V212.377L202.923 187.362ZM308.015 137.308L264.723 162.346V212.354L308.015 187.362V137.308ZM212.154 121.338L255.446 96.3231L298.785 121.338L255.446 146.354L212.154 121.338Z'
    />
  </svg>
);
