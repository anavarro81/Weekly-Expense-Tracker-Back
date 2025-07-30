# Documentación de validator.ts

Este módulo contiene funciones y esquemas para validar los datos de usuario en operaciones de registro y login usando Joi.

## Esquemas de validación

### userSchema
Valida los datos para el registro de usuario.
- **Campos requeridos:**
  - `user`: string, alfanumérico, 3-30 caracteres, obligatorio.
  - `email`: string, formato email válido, obligatorio.
  - `password`: string, 6-10 caracteres alfanuméricos, obligatorio.
- **Mensajes de error:** Todos los mensajes están en español y detallan el motivo del fallo.

### authrSchema
Valida los datos para el login de usuario.
- **Campos requeridos:**
  - `email`: string, formato email válido, obligatorio.
  - `password`: string, 6-30 caracteres alfanuméricos, obligatorio.
- **Mensajes de error:** Mensajes en español para formato y obligatoriedad.

## Funciones

### validateUserRegister(payload: Partial<IUser>): ValidationResult
Valida los datos de registro de usuario.
- **Parámetro:**
  - `payload`: Objeto parcial de tipo `IUser`.
- **Retorno:**
  - `{ valid: boolean, errors: { field: string, message: string }[] }`
  - Si la validación es exitosa, `valid` es `true` y `errors` es un array vacío.
  - Si hay errores, `valid` es `false` y `errors` contiene los detalles de cada error.

### validateUserLogin(payload: Partial<IUser>): ValidationResult
Valida los datos de login de usuario.
- **Parámetro:**
  - `payload`: Objeto parcial de tipo `IUser`.
- **Retorno:**
  - `{ valid: boolean, errors: { field: string, message: string }[] }`
  - Si la validación es exitosa, `valid` es `true` y `errors` es un array vacío.
  - Si hay errores, `valid` es `false` y `errors` contiene los detalles de cada error.

## Ejemplo de uso

```typescript
const result = validateUserRegister({ user: 'juan', email: 'juan@mail.com', password: 'abc123' });
if (!result.valid) {
  // Manejar errores de validación
  console.log(result.errors);
}
```

## Dependencias
- Joi: Librería para validación de esquemas.
- IUser: Interfaz de usuario importada desde `../models/user.model`.
