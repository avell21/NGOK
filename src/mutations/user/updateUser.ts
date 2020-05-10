export const updateUser = async (_, args, { req, model }) => {
  const user = await model.User.query().findById(args.id);
  if (!user) throw new Error("user doesn't exist");
  const updatedUser = await user.$query().updateAndFetch({ ...args.data });
  return updatedUser;
};
