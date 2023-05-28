import ListItem from './ListItem';

export default function List() {
  const product = ['Tomato', 'Pasta', 'Coconut'];
  return (
    <div>
      <h2>Products</h2>
      {product.map((el, idx) => (
        <ListItem key={idx} item={el} idx={idx} />
      ))}
    </div>
  );
}
