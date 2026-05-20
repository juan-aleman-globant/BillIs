Nuevo: 
    Una vez terminado transaction:
        Validaciones: no se puede tener saldo negativo en la wallet.
        Que pasa si se falla (transaction pero de DB?)
        Completar escenarios de success y error
        Que pasa si tienes una transacción +100 y dps una -50 pero la primera falla (encolar), eventos de colas?.

Nuevo:
1) Reemplazar todas las acciones para que en lugar de ser por el array sea para la db.
2) Agregar una 2a DB No relacional para cachear (Redis?) // Lo vamos a usar para no ir a la DB
    Existen 2 estrategias:
    - Lectura: Cuando vas a leer vas al cache, preguntas, si no esta vas a la DB, isno retornas ese valor, a menos que sea un endpoint con filtros y sea mas demandante
    - Escritura: Nuevo registro no esta en el cache, primero guardo en la DB y dps en la DB, sino se guarda no actualizo el cache
    cuando haya alguna operacion en la DB tmb hacerla en el cache.

    Usuarios tambíen en ésta tarea van a ir a la cache.

Implementar bien todo en la DB y dps implememntar en redis.
    Agregar redis en los imports del modulo en la DB.
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