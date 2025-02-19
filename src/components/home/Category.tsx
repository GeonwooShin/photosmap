import React, { Dispatch, SetStateAction, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type CategoriesProps = {
  id: number;
  name: string;
  state: string;
};

type CategoryData = {
  setBrd: Dispatch<SetStateAction<string>>;
  className?: React.ComponentProps<'div'>['className'];
};

const Categories: CategoriesProps[] = [
  { id: 1, name: '전체', state: '' },
  { id: 2, name: '인생네컷', state: '인생네컷' },
  { id: 3, name: '하루필름', state: '하루필름' },
  { id: 4, name: '포토이즘', state: '포토이즘' },
  { id: 5, name: '포토그레이', state: '포토그레이' },
];

const Category = ({ setBrd, ...rest }: CategoryData) => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [swiper, setSwiper] = useState<any>(null);

  const handleCatBtn = (id: number, state: string) => {
    setCategoryId(id);
    setBrd(state);
    swiper.slideTo(id - 3);
  };

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
    swiper.slideTo(categoryId - 3);
  };

  return (
    <CategoryBar {...rest}>
      <ItemsWrapper>
        <Swiper
          scrollbar={{ draggable: true }}
          slidesPerView="auto"
          spaceBetween={4}
          onSwiper={handleSwiper}
        >
          {Categories.map(({ id, name, state }) => (
            <SwiperSlide key={id}>
              <li key={id}>
                <Button
                  className={`${
                    id === categoryId
                      ? 'bg-black text-white shadow-category'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => handleCatBtn(id, state)}
                >
                  {name}
                </Button>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ItemsWrapper>
    </CategoryBar>
  );
};

const CategoryBar = tw.div`
mt-[68px] overflow-x-hidden max-w-[375px] relative
`;
const ItemsWrapper = tw.ul`
flex items-center pl-[16px] my-[8px]
`;
const Button = tw.button`
rounded-[99px] px-[16px] py-[6px] text-label1 whitespace-nowrap border border-solid border-black
`;

export default Category;
