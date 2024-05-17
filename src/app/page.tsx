import client from '../lib/shopify';
import { Product } from 'shopify-buy';

export default async function Home() {
  const products = await client.product.fetchAll() as Product[];

  return (
    <div>
      <h1>Moon Shine Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* <img src={product.images[0].src} alt={product.title} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}



// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
//     </main>
//   );
// }
