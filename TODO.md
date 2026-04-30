Nuevo:
1) Reemplazar todas las acciones para que en lugar de ser por el array sea para la db.
2) Agregar una 2a DB No relacional para cachear (Redis?)
3) Opcional (agregarlo a un imagen docker compose)
AWS

Anterior:
### Vamos a crearlo en función de los modulos drawio:
* Usuarios
* Billeteras
* Transacción
* Categorias

##### *User*:
* arreglo de usuarios
* getUser, updateUser, newUser, deleteUser

##### *Category*:
* arreglo de categorias
* getCategory, updateCategory, newCategory deleteCategory

#### Wallets:
Hacer walletService.getBalance
Preguntar:
* ~Las wallets deberían tener userOwner?~ -> Si

##### *Transactions*:
~~walletFrom~~
~~walletTo~~
~~Currency~~ -> Corresponde a la wallet en si, no a la transacción ->
Amount

*Methods*:
checkBalance

* arreglo de transacciones
* getTransaction, updateTransaction, newTransaction, deleteTransaction

#### Categoria:
* Básico