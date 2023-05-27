export default function List() {
  const product = ['Tomato', 'Pasta', 'Coconut'];
  return (
    <div>
      <h2>Products</h2>
      {product.map((el, idx) => (
        <div ket={el + idx} className='food'>
          <img src={`/images/food${idx}.png`} className='food-img' />
          <h3>{el}</h3>
        </div>
      ))}
    </div>
  );
}
