// import { useCart } from '../context/CartContext';

const Checkout = () => {
  // const { cartItems, subtotal } = useCart();

  return (
    <div>
      <h1>Resumo da Compra</h1>
      {/* {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
      ) : (
          <div>
              {cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <img src={item.images.main} alt={item.name} width={50} />
                      <span style={{ margin: '0 10px' }}>{item.name}</span>
                      <span style={{ margin: '0 10px' }}>Quantidade: {item.quantity}</span>
                      <span style={{ margin: '0 10px' }}>${item.price.toFixed(2)}</span>
                  </div>
              ))}
              <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
              <button>Finalizar Compra</button>
          </div>
      )} */}
    </div>
  );
};

export default Checkout;
