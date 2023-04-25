import NavBar from '@components/common/NavBar';
import PageLayout from '@components/layout/PageLayout';

const Location = () => {
  return (
    <PageLayout>
      <NavBar leftTitle="지도 지역명" isRight={true} />
      Location
    </PageLayout>
  );
};

export default Location;
