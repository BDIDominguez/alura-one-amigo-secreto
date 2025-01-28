Amigo secreto para el curso de One y Alura

# Amigo Secreto 🎁

**Amigo Secreto** es un juego interactivo desarrollado en JavaScript que permite gestionar una lista de personas para luego sortear de forma aleatoria un nombre y mostrarlo en una lista de resultados. Este sistema está diseñado para ser sencillo y fácil de usar, con opciones para agregar, eliminar nombres y limpiar los resultados del sorteo.

---

## 🚀 Funcionalidades

1. **Agregar Nombres**:
   - Los nombres de los participantes se cargan en una lista interactiva.
   - Cada nombre aparece en la lista con un botón de eliminación (`-`) que permite eliminarlo individualmente si se cometió un error al ingresarlo.
   - La lista se ordena alfabeticamente. 

2. **Sortear Nombres**:
   - Un botón de **"Sortear amigo secreto"** elige de forma aleatoria un nombre de la lista y lo muestra en una segunda sección.
   - se quita este Amigo del listado de disponibles para evitar que se repita en el sorteo.

3. **Limpiar Resultados**:
   - Un botón adicional permite **limpiar todo el listado de resultados** en una sola acción, facilitando que el secretismo de que amigo le toco a quien, asi el siguiente en jugar no sabra que amigo le toco al que estubo antes que el.

---

## 🛠️ Cómo usar el sistema

### 1. **Cargar nombres**
   - Escribe el nombre de un participante en el campo de texto, preciona la tecla Enter o
   - Presiona el botón **"Agregar"** para añadirlo a la lista.
   - Si necesitas eliminar un nombre de la lista, haz clic en el botón **" - "** junto al nombre correspondiente.

### 2. **Sortear un nombre**
   - Una vez que tengas al menos un nombre en la lista, presiona el botón **"Sortear"**.
   - Un nombre se seleccionará de forma aleatoria y se añadirá al listado de resultados.
   - Cada nombre sorteado permanecerá en el resultado hasta que decidas limpiarlo.

### 3. **Limpiar resultados**
   - Si deseas eliminar todos los nombres sorteados, presiona el botón **"Limpiar Resultados"**.
   - Esto no afectará a la lista original de participantes.

---

## 📂 Estructura del proyecto

```plaintext
.
├── assets             # Carpeta que contiene las Imagenes. 
├── index.html         # Página principal con la interfaz del juego.
├── styles.css         # Estilos de la página para una mejor apariencia.
├── script.js          # Lógica del juego (agregar, eliminar, sortear, limpiar).
└── README.md          # Explicación del proyecto (este archivo).

---

## 🌟 Funcionalidad destacada: Botones interactivos

- Cada nombre en la lista tiene un botón para eliminarlo de manera individual.
- La sección de resultados tiene el mismo botón adicional pero este limpiar todo los sorteados.

---

## 🔗 Enlace al repositorio

Puedes acceder al código fuente de este proyecto en el siguiente enlace:

[**Repositorio en GitHub**](https://github.com/BDIDominguez/alura-one-amigo-secreto.git)

---

## 📋 Requisitos técnicos

Para usar este juego solo necesitas un navegador web moderno como:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Simplemente abre el archivo `index.html` en tu navegador y disfruta.

---

## 🖼️ Vista previa

A continuación, una captura de cómo se ve el sistema:

![Vista previa del juego Amigo Secreto](https://via.placeholder.com/800x400.png?text=Vista+previa+del+juego)

---

## 👩‍💻 Autor

Creado por [BDIDominguez](https://github.com/BDIDominguez) como parte del programa educativo **Alura ONE**.

---
