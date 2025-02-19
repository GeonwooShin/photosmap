import reviewApi from '@apis/review/reviewApi';
import { useMutation } from 'react-query';
import { queryClient } from 'pages/_app';

export const useDeleteReview = () => {
  return useMutation<void, Error, number>(
    ['useDeleteReview'],
    (shopId) => reviewApi.deleteReview(shopId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['useGetAllUserReviews'],
        });
        queryClient.invalidateQueries({
          queryKey: ['useGetShopDetail'],
        });
      },
    },
  );
};
