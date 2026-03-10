import '../styles/SneakerItem.css'
import CustomerReview from './CustomerReview';

function SneakerItem({nom, image, marque, prix, style, esthetique, confort, bestSeller=false})
{
    const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === 'confort' ? '😌': '💖';
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType}: ${icons} (${scaleValue}/5)`;
    };

    const handleClickAvis = () => {
        const esthetismeText = formatReview('esthétisme', esthetique);
        const confortText = formatReview('confort', confort);
        alert(`Avis pour ${nom} :\n${esthetismeText}\n${confortText}`);
    };
    return (
        <a href="/">
            <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
                <br />
                <h3>{nom}</h3>
                {bestSeller && <span className="best-seller-badge">Top vente</span>}
                <img className='sneaker-image' alt='' src={image} />
                <div className="card-content">
                    <p className="sneaker-brand">{marque}</p>
                    <p className="sneaker-price">{prix} €</p>
                    <p className="sneaker-style">{style}</p>
                    <div className="sneaker-review">
                        <button className="button-review" onClick={handleClickAvis}>Voir les avis</button>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default SneakerItem;