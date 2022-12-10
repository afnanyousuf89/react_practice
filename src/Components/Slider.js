import slider from './images/slider.jpg'
import './css/Slider.css'

function Slider(){
    return(
        <div className="slider">
            <img src={slider} className="slider-img" />
        </div>
    )
}

export default Slider;