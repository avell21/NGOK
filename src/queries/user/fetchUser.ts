export const user = async (_, args, { model }) => {
  return await model.User.query().findById(args.id);
};
