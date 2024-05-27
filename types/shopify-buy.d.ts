declare module 'shopify-buy' {
  interface ClientConfig {
    domain: string;
    storefrontAccessToken: string;
  }

  interface Image {
    id: string;
    altText?: string;
    src: string;
  }

  interface Variant {
    id: string;
    title: string;
    price: string;
    available: boolean;
  }

  interface Product {
    id: string;
    title: string;
    description: string;
    images: Image[];
    variants: Variant[];
  }

  interface Checkout {
    id: string;
    webUrl: string;
    lineItems: LineItem[];
  }

  interface LineItem {
    id: string;
    title: string;
    variantId: string;
    quantity: number;
    price: string;
  }

  interface CheckoutResource {
    create(): Promise<Checkout>;
    addLineItems(checkoutId: string, lineItems: Omit<LineItem, 'id'>[]): Promise<Checkout>;
  }

  interface ProductResource {
    fetchAll(): Promise<Product[]>;
    fetch(id: string): Promise<Product>;
  }

  interface Client {
    product: ProductResource;
    checkout: CheckoutResource;
  }

  function buildClient(config: ClientConfig): Client;
}
