export const deleteUser = async (_, args, { model }) => {
  const deleteUser = await model.User.query().deleteById(args.id);
  if (!deleteUser) throw new Error("user deletion failed");
  return "user deletion successfully";
};
