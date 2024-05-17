declare module 'shopify-buy' {
    interface ClientConfig {
      domain: string;
      storefrontAccessToken: string;
    }
  
    interface Image {
      src: string;
    }
  
    interface Product {
      id: string;
      title: string;
      description: string;
      images: Image[];
    }
  
    interface Checkout {
      id: string;
      webUrl: string;
    }
  
    interface LineItem {
      variantId: string;
      quantity: number;
    }
  
    interface CheckoutResource {
      create(): Promise<Checkout>;
      addLineItems(checkoutId: string, lineItems: LineItem[]): Promise<Checkout>;
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
  