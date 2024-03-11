
```markdown
# Scripts del Proyecto

Este proyecto utiliza un monorepo y emplea el gestor de paquetes Yarn para manejar las dependencias y los scripts. A continuación, se describen los scripts más importantes:

## nest:start:dev

```
"nest:start:dev": "yarn workspace @se-2/nestjs start:dev"
```

Este script se encarga de iniciar el servidor de desarrollo de NestJS. Ejecuta el comando `start:dev` dentro del espacio de trabajo (`workspace`) `@se-2/nestjs`.

Para utilizar este script, simplemente ejecuta el siguiente comando en la raíz del proyecto:

```
yarn nest:start:dev
```

Esto iniciará el servidor de desarrollo de NestJS y permitirá realizar cambios en el código fuente de manera dinámica, sin necesidad de reiniciar el servidor manualmente.

## nest:lint

```
"nest:lint": "yarn workspace @se-2/nestjs lint"
```

Este script se encarga de ejecutar el linter de código estático para el proyecto NestJS. Ejecuta el comando `lint` dentro del espacio de trabajo (`workspace`) `@se-2/nestjs`.

Para utilizar este script, simplemente ejecuta el siguiente comando en la raíz del proyecto:

```
yarn nest:lint
```

Esto analizará todo el código fuente del proyecto NestJS y reportará cualquier problema de estilo de código, errores de sintaxis o prácticas no recomendadas según las reglas de linting configuradas.

Es una buena práctica ejecutar este script de forma regular durante el desarrollo para mantener un código limpio y consistente.

## Uso de workspaces en Yarn

Como se puede observar, ambos scripts utilizan la propiedad `workspace` de Yarn. Esto permite ejecutar comandos específicos dentro de un subdirectorio del proyecto, en este caso, el subdirectorio `@se-2/nestjs`.

De esta manera, se pueden manejar múltiples proyectos o paquetes dentro de un mismo monorepo, manteniendo una estructura organizada y evitando la duplicación de dependencias.

```