import { ProductList } from "@/components/product-list";
import { Suspense } from "react";

function App() {
  return (
    <div className="p-4">
      <h1 className="font-semibold">Mint Commerce</h1>
      <p className="mb-8">Welcome to the Mint Commerce store!</p>
      <Suspense fallback="Loading...">
        <ProductList />
      </Suspense>
    </div>
  );
}

export default App;
