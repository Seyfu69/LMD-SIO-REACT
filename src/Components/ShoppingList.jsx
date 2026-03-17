import { useState } from 'react';
import { sneakersList } from "../datas/sneakersList";
import SneakerItem from './SneakerItem';
import '../styles/ShoppingList.css';

const brands = [...new Set(sneakersList.map(sneaker => sneaker.marque))];

function ShoppingList() {
    const [activeBrand, setActiveBrand] = useState('');

    const filteredSneakers = sneakersList.filter(
        (sneaker) => !activeBrand || activeBrand === sneaker.marque
    );

    return (
        <div className="shopping-list">
            <h2>Nos Sneakers (Adem Zentici)</h2>

            <div className="filter-container">
                <button 
                    className={`filter-btn ${activeBrand === '' ? 'active' : ''}`}
                    onClick={() => setActiveBrand('')}
                >Tout</button>
                {brands.map((brand) => (
                    <button 
                        key={brand} 
                        className={`filter-btn ${activeBrand === brand ? 'active' : ''}`}
                        onClick={() => setActiveBrand(brand)}
                    >{brand}</button>
                ))}
            </div>
            
            <div className="sneakers-grid">
                {filteredSneakers.map((sneaker) => (
                    <SneakerItem
                        key={sneaker.id}
                        nom={sneaker.nom}
                        marque={sneaker.marque}
                        prix={sneaker.prix}
                        style={sneaker.style}
                        esthetique={sneaker.esthetique}
                        confort={sneaker.confort}
                        image={sneaker.image}
                        bestSeller={sneaker.bestSeller}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;