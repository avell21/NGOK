# a script to copy non ts files to the build directory

cd src
cp schema.graphql ../dist/src
mkdir ../dist/src/graphql
cp graphql/user.graphql ../dist/src/graphql
