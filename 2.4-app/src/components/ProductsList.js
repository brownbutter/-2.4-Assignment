const products = [
  {
    id: 1,
    name: "Banana",
    price: 2.99,
    pic: "🍌",
  },
  {
    id: 2,
    name: "Apple",
    price: 1.99,
    pic: "🍎",
  },
  {
    id: 3,
    name: "Orange",
    price: 3.99,
    pic: "🍊",
  },
  {
    id: 4,
    name: "Pineapple",
    price: 5.99,
    pic: "🍍",
  },
  {
    id: 5,
    name: "Mango",
    price: 4.99,
    pic: "🥭",
  },
  {
    id: 6,
    name: "Coconut",
    price: 6.99,
    pic: "🥥",
  },
];

// map
// display all the products
// reduce
// sum up the total cost of the products
// filter
// filter based on some max price e.g. list products <= $4
function ProductsList() {
  // const[ products, setProducts] = useState([])

  // reduce will reduce an array to a single value
  // it takes a callback fn and an initial value
  // the callback takes 2 args: accumulator, current value
  const total = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  // filter
  const filteredProducts = products.filter((product) => product.price <= 2);

  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: 10,
        margin: 10,
        borderRadius: 5,
      }}
    >
      <h2>Products List</h2>
      {/* Display the total sum of the products */}
      <p>Total: ${total.toFixed(2)}</p>
      {/* Display the list products */}
      {filteredProducts.length} products found.
      {filteredProducts.map((product) => (
        <div key={product.id}>
          {product.pic} {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
