This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Tasks
El proyecto debe contener las siguientes características:

**Inicio de sesión** 
[ x ] 1. Implementar inicio de sesión, está será la pantalla inicial (para probar el login utilizar los usuarios y contraseñas que están disponibles en la documentación). 
[ x ] 2. Cuando hagas el inicio de sesión, guarda el token generado por la API en el local storage.

**Menú una vez que tengas la sesión activa** 
[ x ] 3. Una vez que se inicie sesión aparecerá una pantalla que permitirá elegir entre usuarios y productos.

**Lista de usuarios** 
[ x ] 4. La data generada por la fake API por defecto trae las contraseñas de los usuarios, filtrarlas para que en el lado del cliente no aparezcan. 
[ x ] 5. En el caso que se seleccionen los usuarios aparecerá una lista/tabla con cada uno de los usuarios, se debe mostrar el **nombre de usuario, el correo y el id, así como el respectivo nombre y apellido y un botón de ver más.**
[ x ] 6. La lista de usuarios se puede ordenar de manera ascendente o descendente por el campo de id o correo electrónico. 
[ x ] 7. Tener un botón para eliminar un usuario de la lista/tabla, no es necesario mandar a la API para hacerlo, solo quitarlo de la lista. 
[ x ] 8. Agregar un botón para resetear a los usuarios que había inicialmente, de tal modo que si se han borrado usuarios de la lista estos vuelvan a aparecer. 
[ ]9. En la misma página, agregar un botón para agregar un usuario, en este caso utilizar la API para ello, el usuario agregado debe añadirse a la lista/tabla de usuarios, Nota: la fake API no agrega el usuario a la base de datos por lo que no te preocupes si recargas la página y no se muestra el registro del usuario agregado. 
[ x ] 10. En la lista cuando se haga click en el botón ver más, este debe redirigir a una página que contendrá los datos del usuario ya completos.

**Lista de productos** 
[ x ] 11. Mostrar la lista de los productos, conteniendo su id, precio, título y el botón de ver más.
[ x ] 12. La lista de productos se puede ordenar por id y precio, tanto de manera ascendente como descendente. 
[ x ] 13. 13.Al hacer click en el botón ver más este debe redirigir a una página en la que se podrán ver todos los datos del producto.

**Página de producto con los datos completos** 
[ x ] 14. Tener un botón para actualizar los datos del producto, para ello utilizar la API. Nota: La API no actualizará el producto en la base de datos por lo que no te preocupes si al recargar la página los datos vuelven a su estado anterior.

**Todas las páginas** 
[ x ] 15. Agregar un botón para cerrar sesión, este debe redirigir al formulario de inicio de sesión y limpiar el storage que contenía el token.


### Known bugs
#### Add User Modal
- Currently the Add User modal isn't working properly.
- Adding a user besides doing properly the call to the API doesn't add it to the table of users.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
