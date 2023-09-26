import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const menuItems = [
    {
      name: 'Dish 1',
      description: 'Pasta bolognesa',
    },
    {
      name: 'Dish 2',
      price: '$12.99',
    },
    {
      name: 'Soups',
      description: 'Soup.',
      price: '$18.99',
    },
  ]

   return (
     <div>
       <header>
         <h1>Welcome to Tortilla Restaurant</h1>
         
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