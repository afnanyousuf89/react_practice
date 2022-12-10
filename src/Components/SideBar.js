import './css/Sidebar.css'

function SideBar( props ) {
    return (

        <aside>

            <div className="sideblog">

                <h3>{props.articleheaing}</h3>
                <div className='dd'>
                    <img src={props.imgz} className="article-img" />
                    <p>{props.description}</p>
                </div>
            </div>

        </aside>
    )
}

export default SideBar;