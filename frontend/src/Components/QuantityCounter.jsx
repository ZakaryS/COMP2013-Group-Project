export default function QuantityCounter({
  productQuantity,
  handleAddQuantity,
  handleRemoveQuantity,
  id,
  mode,
}) {
  return (
    <div className="ProductQuantityDiv">
      <div>
        <button onClick={() => handleRemoveQuantity(id, mode)}>-</button>
      </div>
      <p>{productQuantity}</p>
      <div>
        <button onClick={() => handleAddQuantity(id, mode)}>+</button>
      </div>
    </div>
  );
}
