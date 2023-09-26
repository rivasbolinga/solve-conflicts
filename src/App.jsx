import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const menuItems = [
    {
      name: 'Dish 1',
      description: 'Pasta bolognesa',
      price: '$15.99',
    },
    {
      name: 'Dish 2',
      description: 'Pizza Margharita',
      price: '$12.99',
    },
    {
      name: 'Dish 3',
      description: 'Soup.',
      price: '$18.99',
    },
  ]

   return (
     <div>
       <header>
         <h1>Welcome to Tortilla Restaurant</h1>
         <p>Delicious dishes just a click away!</p>
       </header>

       <nav>
         <ul>
           <li>
             <a href="#">Home</a>
           </li>
           <li>
             <a href="#">Menu</a>
           </li>
           <li>
             <a href="#">Contact</a>
           </li>
         </ul>
       </nav>

       <main>
         <section>
           <h2>Our Menu</h2>
           <p>Explore our delicious menu offerings.</p>
           <ul>
             {menuItems.map((item, index) => (
               <li key={index}>
                 <h3>{item.name}</h3>
                 <p>{item.description}</p>
                 <p>
                   <strong>Price:</strong> {item.price}
                 </p>
               </li>
             ))}
           </ul>
         </section>

         <section>
           <h2>About Us</h2>
           <p>Learn more about our restaurant and story.</p>
         </section>
       </main>

       <footer>
         <p>&copy; 2023 Tortilla Restaurant. All rights reserved.</p>
       </footer>
     </div>
   )
}

export default App
