import { ProductItem } from './components/ProductItem';
import { productsData } from './productsData';

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto text-center mb-10 lg:mb-14">
        <h1 className="headline">Our Products</h1>
        <p className="mt-1">Explore our products with a lot more coming soon.</p>
      </div>

      {/* Products */}
      <section className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {productsData.map((item) => (
          <ProductItem key={item.name} {...item} />
        ))}
      </section>
      {/* Products */}
    </div>
  );
}
