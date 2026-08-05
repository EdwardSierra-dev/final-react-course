# final-react-course

### 24/07/2026

- First commit

This repo was created to learn react watching this video https://www.youtube.com/watch?v=TtPXvEcE11E

### Tasks

- Agregar un texto que aparezca cuando se envien las notas vacias. [✅]
- Agregar un botón para completar las tareas. [✅]
- Agregar un botón para eliminar las tareas. [✅]
- Que no se agregue la tarea vacía, actualmente dice que no se puede pero la agrega. []

## SuperSimple Dev

- Buy 1 pack of socks for $10 and 2 t-shirts for $8 each, calculate de total cost and save in a var name productCost and display in the console. [✅]
- Continuing with the previous excersice, insert the product cost in a paragraph and display in website. [✅]
- Add a new variable shipping cost ($5) save as shippingCost calculate (shippingCost + productCost) and display de result in the website.[✅]
- Add DayJS https://unpkg.com/supersimpledev/dayjs.js. [✅]
- Use dayjs().format('MMMM D') to get current date, display it in the console. [✅]
- Insert the date in a paragraph. [✅]
- https://youtu.be/TtPXvEcE11E?t=2408

## ChatBot 03/08/2026

- Create ```<App>``` that returns a paragraph "Hello, welcome to my website"
- Add two buttons "Login", "SignUp"
  - user a fragment to group them together.
  - use ```()```to write the jsx on multiple lines.
- Add two input
  - Email and password. Add the attribute password.
- Create a component called LoginForm and move the textboxes and buttons into this component and render in ```<App>```.
- Create an empty react website.
- Create 3 products (cotton socks, tennis balls, Plan t-shirt).
  - Using a component to not duplicating code ```<ProductDetails>``` and you must to user props.
  - Add the prop ```discountPrice``` if ```discountPrice``` exist, display it under the original price.
  - Add a cross out the original price with the element ```<del></del>```
  - Don´t cross original price if there is not discount. You can use ```!discountPrice```
  - Check this part of the [video](https://youtu.be/TtPXvEcE11E?t=5804).