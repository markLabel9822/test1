import { prisma } from 'libs/prisma';


class userService {
  public getAll = async () => {
    const result = await prisma.user.findMany({
      where: {
        status: 'ACTIVE',
      }})

    return result;
  };

}

export default userService;
