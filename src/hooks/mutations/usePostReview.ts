import reviewApi from '@apis/review/reviewApi';
import { queryClient } from 'pages/_app';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

type Data = (number | ReviewInfoProps)[];

const usePostReview = () => {
  const router = useRouter();
  return useMutation<void, Error, Data>(
    'usePostReview',
    (formData: any) => reviewApi.postReview(formData[0], formData[1]),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['useGetShopDetail'],
        });
        router.back();
      },
    },
  );
};

export default usePostReview;
