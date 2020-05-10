export const users = async (_, args, { model }) => {
  return await model.User.query().orderBy("createdAt", "desc");
};
