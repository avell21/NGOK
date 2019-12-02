const user = async (_, args, { model }) => {
  return await model.User.query().findById(args.id);
};

const users = async (_, args, { model }) => {
  return await model.User.query().orderBy("created_at", "desc");
};

const createUser = async (_, args, { req, model }) => { 
  const createUser = await model.User.query().insertAndFetch({
    ...args.data
  });
  return createUser;
};

const updateUser = async (_, args, { req, model }) => { 
  const user = await model.User.query().findById(args.id);
  const updatedUser = await user.$query().updateAndFetch({ ...args.data });
  return updatedUser;
};

const deleteUser = async (_, args, { model }) => { 
  const deleteUser = await model.User.query().deleteById(args.id);
  if (!deleteUser) return "user deletion failed";
  return "user deletion successfully";
};

export default {
  Query: {
    user,
    users
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser
  }
};
