import * as request from '~/utils/request';

export const profile = async (nickname) => {
  try {
    const res = await request.get(`users/@${nickname}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
