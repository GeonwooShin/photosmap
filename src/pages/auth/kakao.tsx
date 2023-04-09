import authApi from '@apis/auth/authApi';
import PageLayout from '@components/layout/PageLayout';
import { setToken } from '@utils/token';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Kakao = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(true);
  }, []);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    async function login() {
      const { access_token, refresh_token } = await authApi.kakaoLogin(code);
      const token = {
        accessToken: access_token,
        refreshToken: refresh_token,
      };
      if (token) {
        setToken(token);
        router.push('/home');
      } else {
        router.push('/auth/login');
      }
    }
    if (isLogin) {
      login();
    }
  }, [isLogin]);
  return <PageLayout>Kakao</PageLayout>;
};

export default Kakao;
