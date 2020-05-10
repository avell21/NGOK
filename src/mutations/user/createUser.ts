export const createUser = async (_, args, { req, model }) => {
  const createUser = await model.User.query().insertAndFetch({
    ...args.data
  });
  return createUser;
};
