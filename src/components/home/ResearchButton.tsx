import Image from 'next/image';
import tw from 'tailwind-styled-components';

type ResearchButtonProps = {
  onClick: () => void;
};

const ResearchButton = ({ onClick }: ResearchButtonProps) => {
  return (
    <ResearchContainer onClick={onClick}>
      <button className="flex items-center rounded-[100px] bg-primary-normal py-[8px] px-[16px] text-label2 text-white">
        <Image
          src="/svg/home/refresh.svg"
          width={16}
          height={16}
          alt="refresh"
          className="mr-[2px]"
        />
        현재 지도에서 지점 검색
      </button>
    </ResearchContainer>
  );
};

const ResearchContainer = tw.div`
mt-[8px] flex items-center justify-center
`;

export default ResearchButton;
