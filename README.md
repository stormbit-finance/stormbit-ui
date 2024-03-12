
```markdown
# Project Scripts

This project uses a monorepo and utilizes the Yarn package manager to handle dependencies and scripts. Below, the most important scripts are described:

## nest:start:dev

```
"nest:start:dev": "yarn workspace @se-2/nestjs start:dev"
```

This script is responsible for starting the NestJS development server. It executes the `start:dev` command within the `@se-2/nestjs` workspace.

To use this script, simply run the following command at the root of the project:

```
yarn nest:start:dev
```

This will start the NestJS development server and allow for dynamic changes to the source code without the need to manually restart the server.

## nest:lint

```
"nest:lint": "yarn workspace @se-2/nestjs lint"
```

This script is responsible for running the static code linter for the NestJS project. It executes the `lint` command within the `@se-2/nestjs` workspace.

To use this script, simply run the following command at the root of the project:

```
yarn nest:lint
```

This will analyze the entire source code of the NestJS project and report any code style issues, syntax errors, or practices not recommended according to the configured linting rules.

It's a good practice to run this script regularly during development to maintain clean and consistent code.

## Using Yarn workspaces

As can be seen, both scripts use the `workspace` property of Yarn. This allows for executing specific commands within a subdirectory of the project, in this case, the `@se-2/nestjs` subdirectory.

To see all the routes, enter the swagger documentation:

localhost:3000/apidocs

```