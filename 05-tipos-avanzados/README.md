# PostEditor

Dado una serie de POSTS y un listado de usuario, validar/editar un post **siempre y cuando el autor de dicho post sea un admin** y almacenar el post editado en un objeto `postLog` que guardará el `id` del post editado junto a los valores `oldPost` (BlobPost), `edittedBy` (Person Type), `edittedAt` (number) y `newPost` (BlogPost).

## Características

Tenemos 3 tipos de usuarios en nuestro blog: `Admin`, `Developer`, `Editor` que comparten características de una `Persona` (name, lastName) y una serie de `roles`.

Los **roles** deben ser una **tupla** compuesta por un **número** _(id del rol)_ y un **nombre** descriptivo del id del rol.

Ejemplo:

```javascript
const admin: Person = {
  name: 'Jhon',
  lastName: 'Smith',
  role: [1, 'Admin'],
};
```

## Requerimientos

1. Definir tipo Person que comparten Admin, Developer y Editor
2. Definir tipo BlogPost con las características de un post
3. Definir el tipo de postLog
4. Definir el tipo EditedPost con la características `oldPost` `edittedBy` `edittedAt` `newPost`
5. Tipar los parámetros de las funciones (por ej: `notHasPermissionLog`)
6. Tipar todas la variables que la requieren
7. Eliminar todo aquel código innecesario
