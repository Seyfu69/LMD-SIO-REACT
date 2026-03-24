import { useState } from 'react';
import '../styles/SneakerItem.css'
import CustomerReview from './CustomerReview';

function SneakerItem({ sneakerData, onAddToCart })
{
    const [showReviews, setShowReviews] = useState(false);
    const { nom, marque, prix, style, esthetique, confort, image, bestSeller = false} = sneakerData;

    const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === 'confort' ? '😌': '💖';
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };

    const handleToggleAvis = () => {
        setShowReviews(!showReviews);
    };
    
    const handleAddToCart = () => {
        console.log("Données transmises: ", sneakerData)
        onAddToCart(sneakerData);
    };


    return (
        
            <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
                <br />
                <h3>{nom}</h3>
                {bestSeller && <span className="best-seller-badge">Top vente</span>}
                <img className='sneaker-image' alt='' src={image} />
                <div className="card-content">
                    <p className="sneaker-brand">{marque}</p>
                    <p className="sneaker-price">{prix} €</p>
                    <p className="sneaker-style">{style}</p>
                    <div className="sneaker-actions">
                        <button onClick={handleAddToCart} className="add-to-cart-btn">
                            🛒 Ajouter au panier
                        </button>
                    </div>
                    <div className="sneaker-review">
                        <button className='button' onClick={handleToggleAvis}>{showReviews ? 'masquer les avis' : 'voir les avis'}</button>
                        {showReviews && (
                            <div className="avis-details">
                                <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                                <CustomerReview reviewType='confort' scaleValue={confort} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        
    );
}

export default SneakerItem;