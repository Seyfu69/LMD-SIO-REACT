function Cart({ cartItems }) {
    const totalItems = cartItems.reduce((sum, item) =>
        sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) =>
        sum + (item.prix * item.quantity),0);

    if (cartItems.lenght === 0) {
    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Votre panier </h2>
            </div>
            <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <h3>Votre panier est vide</h3>
                <p>Découvreé notre collection de sneaker et ajoutez vos modèle préférés !</p>
            </div>
        </div>
    );
    }

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Votre panier ({totalItems})</h2>
            </div>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>{item.marque}</p>
                            <p>Quantité: {item.quantity}</p>
                            <p className="cart-item-price">{item.prix * item.quantity} €</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <p>Total: {totalPrice} €</p>
            </div>
        </div>

    );


}
export default Cart;