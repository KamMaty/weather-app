import './weather-detail-cart.styles.css'

const DetailCard = ({ isCurrent, icon: Icon, title, value, unit }) => {
    return(
        <div className="weather-detail-card">
            <Icon/>
            <span>{value} {unit}</span>
        </div>)
    }
;

export default DetailCard;
