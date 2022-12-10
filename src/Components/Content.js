import './css/Content.css'


function Content({articleheaing,imgz,description}) {
    return (
        <article>
            <h3>{articleheaing}</h3>
            <div className='dd'>
            <img src={imgz} className="article-img" />
            <p>{description}</p>
            </div>
        </article>
    )
}

export default Content;