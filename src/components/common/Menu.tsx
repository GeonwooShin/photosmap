import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components';

const Menu = () => {
  const router = useRouter();
  return (
    <MenuBox>
      <div className="flex h-full items-center justify-center space-x-16 px-[20px] text-[10px]">
        <Link href="/home">
          <MenuItemContainer>
            <Image
              src={
                router.pathname.includes('/home')
                  ? '/svg/menu/filled-home.svg'
                  : '/svg/menu/lined-home.svg'
              }
              width={24}
              height={24}
              alt="home"
            />
            <p
              className={`whitespace-nowrap text-[10px] font-normal leading-[10px] ${
                router.pathname.includes('/home')
                  ? 'text-black'
                  : 'text-text-assitive'
              }`}
            >
              홈
            </p>
          </MenuItemContainer>
        </Link>
        <Link href="/location">
          <MenuItemContainer>
            <Image
              src={
                router.pathname.includes('/location')
                  ? '/svg/menu/filled-location.svg'
                  : '/svg/menu/lined-location.svg'
              }
              width={24}
              height={24}
              alt="location"
            />
            <p
              className={`whitespace-nowrap text-center text-[10px] font-normal leading-[10px] ${
                router.pathname.includes('/location')
                  ? 'text-black'
                  : 'text-text-assitive'
              }`}
            >
              내 주변
            </p>
          </MenuItemContainer>
        </Link>
        <Link href="/wish">
          <MenuItemContainer>
            <Image
              src={
                router.pathname.includes('/wish')
                  ? '/svg/menu/filled-bookmark.svg'
                  : '/svg/menu/lined-bookmark.svg'
              }
              width={24}
              height={24}
              alt="bookmark"
            />
            <p
              className={`whitespace-nowrap text-[10px] font-normal leading-[10px] ${
                router.pathname.includes('/wish')
                  ? 'text-black'
                  : 'text-text-assitive'
              }`}
            >
              찜 목록
            </p>
          </MenuItemContainer>
        </Link>
        <Link href="/my">
          <MenuItemContainer>
            <Image
              src={
                router.pathname.includes('/my')
                  ? '/svg/menu/filled-mypage.svg'
                  : '/svg/menu/lined-mypage.svg'
              }
              width={24}
              height={24}
              alt="mypage"
            />
            <p
              className={`whitespace-nowrap text-[10px] font-normal leading-[10px] ${
                router.pathname.includes('/my')
                  ? 'text-black'
                  : 'text-text-assitive'
              }`}
            >
              마이
            </p>
          </MenuItemContainer>
        </Link>
      </div>
    </MenuBox>
  );
};

const MenuItemContainer = tw.div`
flex flex-col items-center gap-y-1
`;

const MenuBox = tw.div`
fixed bottom-0 z-[900] w-full max-w-[375px] overflow-hidden border-t-[1px] border-line-normal bg-bg-secondary py-[10px]
`;

export default Menu;
