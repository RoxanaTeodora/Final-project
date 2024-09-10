## React + Vite

npm run dev

### The site uses local storage for the Cart and Admin functionalities. For every modification in the Admin page is mandatory to Delete browsing history and cookies.

The website was created using tailwindcss components.

##### The site has five main pages: About, Products, Cart, Contact and Admin. It is created using Vite.js based on the prototype in Figma:

![Group 9 (1)](https://github.com/user-attachments/assets/3b0001ba-f7ba-4ded-9c75-22b39b3ac353)

- About
  Presents the description of the website
  It has a carousel component for a preview of the products
  The main advantages of using the products
  Links connected to other pages on the website

- Products
  Every product has a card component with an "Add to cart" button and a link for more details

- Details
  Every product has a pop-up detailed page implemented using useParams

- Cart
  In the cart, the user can see the name and the image of the product they chose
  It has an icon for deleting, increasing, and decreasing the quantity of the chosen objects

- Contact
  It has a form component with other links for social contact
  It is a functional component using Email.js

- Admin
  It has a section for adding, editing, and deleting the products using mock API
  MockAPI is a simple tool that generates custom data and performs operations using RESTful interface.

https://github.com/RoxanaTeodora/Sustainable_furniture_market/assets/142969879/4baf8d6e-5a06-46eb-8a57-32c117a9db50

- Deploy
  npm run buil
  deploy dist file
