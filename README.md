Here's an improved version of your README:

```markdown
# Project Setup

To use this code, you first need an `.env` file with the following structure:

DB_NAME
DB_DATABASE
DB_USERNAME
DB_PASSWORD
DB_ROOT_PASSWORD
DB_PORT
DB_HOST
DB_PORT_ADMIN=
DB_PGADMIN_DEFAULT_EMAIL=
DB_PGADMIN_DEFAULT_PASSWORD=
API_KEY_CENTIC=
API_KEY_ROCIFI=
SCORE_ID=
TOKEN_CRED_PROTOCOL=
 
later use the next script:

### `nest:docker:db:up`

## Project Scripts

This project uses a monorepo structure and utilizes the Yarn package manager to handle dependencies and scripts. Below are the most important scripts:

### `nest:start:dev`

```
"nest:start:dev": "yarn workspace @se-2/nestjs start:dev"
```

This script is responsible for starting the NestJS development server. It executes the `start:dev` command within the `@se-2/nestjs` workspace. To use this script, simply run the following command at the root of the project:

```
yarn nest:start:dev
```

This will start the NestJS development server and enable dynamic changes to the source code without the need to manually restart the server.

### `nest:lint`

```
"nest:lint": "yarn workspace @se-2/nestjs lint"
```

This script is responsible for running the static code linter for the NestJS project. It executes the `lint` command within the `@se-2/nestjs` workspace. To use this script, run the following command at the root of the project:

```
yarn nest:lint
```

This will analyze the entire source code of the NestJS project and report any code style issues, syntax errors, or practices not recommended according to the configured linting rules. It's a good practice to run this script regularly during development to maintain clean and consistent code.

## Using Yarn Workspaces

As can be seen, both scripts use the `workspace` property of Yarn. This allows for executing specific commands within a subdirectory of the project, in this case, the `@se-2/nestjs` subdirectory.

## Swagger Documentation

To view all the available routes, visit the Swagger documentation at:

```
http://localhost:3000/apidocs
```

This will provide an interactive interface to explore and test the API endpoints.
```

