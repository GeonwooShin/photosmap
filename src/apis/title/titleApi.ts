import instance from '@apis/instance';

class TitleApi {
  getUserTitle = async (id: number): Promise<MemberTitle> => {
    const { data } = await instance.get(`/member-titles/${id}`);
    return data;
  };

  getAllTitles = async (): Promise<MemberTitle> => {
    const { data } = await instance.get(`/member-titles`);
    return data;
  };

  getShopTitles = async (shopId: number): Promise<ShopTitle[]> => {
    const { data } = await instance.get(`/shop-title-logs/${shopId}`);
    return data;
  };
}

const titleApi = new TitleApi();

export default titleApi;
