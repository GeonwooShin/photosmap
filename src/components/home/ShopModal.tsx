import tw from 'tailwind-styled-components';
import Image from 'next/image';
import BrandTag from '@components/common/BrandTag';
import { useDeleteFavorite } from '@hooks/mutations/useDeleteFavorite';
import { usePostFavorite } from '@hooks/mutations/usePostFavorite';
import { useRouter } from 'next/router';
import { useGetShopDetail } from '@hooks/queries/useGetShop';
import { Dispatch, SetStateAction } from 'react';

type ShopModalProps = {
  id: number;
  place_name: string;
  distance: string;
  star_rating_avg: number;
  review_cnt: number;
  isLogin: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

const ShopModal = ({
  id,
  place_name,
  distance,
  star_rating_avg,
  review_cnt,
  isLogin,
  setIsModal,
}: ShopModalProps) => {
  const router = useRouter();

  const { data: shopInfo } = useGetShopDetail(id, distance);
  const { mutate: add } = usePostFavorite();
  const { mutate: del } = useDeleteFavorite('/home');

  const handleFavorite = (id: number) => {
    if (!isLogin) {
      setIsModal(true);
    } else {
      if (shopInfo?.favorite) {
        del(id);
      } else {
        add(id);
      }
    }
  };

  return (
    <div className="mx-6 h-[98px] cursor-pointer rounded-[8px] bg-bg-secondary shadow-shopModal">
      <div className="p-4">
        <BrandTag name={place_name} />
        <div className="flex justify-between pt-1 pb-2">
          <span
            className="text-label1"
            onClick={() =>
              router.push(`/shopDetail?shopId=${id}&distance=${distance}`)
            }
          >
            {place_name}
          </span>
          {shopInfo?.favorite ? (
            <Image
              src="/svg/wish/filled-bookmark.svg"
              width={24}
              height={24}
              alt="wish"
              onClick={() => {
                handleFavorite(id);
              }}
            />
          ) : (
            <Image
              src="/svg/wish/lined-bookmark.svg"
              width={24}
              height={24}
              alt="wish"
              className="cursor-pointer"
              onClick={() => handleFavorite(id)}
            />
          )}
        </div>
        <div className="flex justify-between text-caption1">
          <div className="flex items-center">
            <span className="flex pr-2">
              <Image src="/svg/star.svg" width={16} height={16} alt="star" />
              {star_rating_avg}({review_cnt})
            </span>
            <div className="border-l pl-2">
              <span className="pr-1">찜</span>
              <span className="font-semibold">{shopInfo?.favorite_cnt}</span>
            </div>
          </div>
          <span>{distance}</span>
        </div>
      </div>
    </div>
  );
};

const ModalLayout = tw.div`
absolute top-0 left-0 w-full h-full z-[999]
`;

export default ShopModal;
