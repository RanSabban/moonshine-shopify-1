import ProductCard from '@/components/Products/ProductCard';
import client from '../../lib/shopify';
import { Product } from 'shopify-buy';
import Image from 'next/image';

export default async function Home() {
  const products = await client.product.fetchAll() as Product[];

  console.log('I am a PRODCUT',products)
  

  return (
    <div>
      <h1>Moon Shine Products</h1>
      <ul>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
