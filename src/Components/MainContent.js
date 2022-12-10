import Content from "./Content";
import SideBar from "./SideBar";
import aimg from './images/slider.jpg'

let blogs = [
	{
		articleheaing: 'Heading 1',
		imgz: { aimg },
		description: 'thiws is lkjsadflkj lkjsdfl skdjf'
	},
	{
		articleheaing: 'Heading 2',
		imgz: { aimg },
		description: ' sadfsdf thiws is lkjsadflkj lkjsdfl skdjf'
	},
	{
		articleheaing: 'Heading 3',
		imgz: { aimg },
		description: 'thiws is lkjsadflkj lkjsdfl skdjf'
	}
];


function MainContent() {

	return (
		<div className="main-content">


			<div className="sideArea">
				{
					blogs.map((x) => <SideBar key={x.articleheaing} {...x} />)
				}
			</div>

			<div></div>

			<div className="ContentArea">
				{
					blogs.map(
						(x) =>
							<Content key={x.articleheaing} articleheaing={x.articleheaing} imgz={aimg} description={x.description} />
					)
				}
			</div>
		</div>
	)
}

export default MainContent;