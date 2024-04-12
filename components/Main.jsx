import About from "./About.jsx";
import Rooms from "/components/Rooms.jsx"
import Facilities from "/components/Facilities.jsx"
import BestAprts from "/components/BestAprts.jsx"
import Gallery from "./Gallery.jsx";
import GetInTouch from "./GetInTouch.jsx";

const Main = () => {

    return (
        <main className="main">
            <div className="container">
                <About />
            </div>
            <Rooms />
            <Facilities />
            <BestAprts />
            <Gallery />
            <GetInTouch />
        </main>
    );
}
 
export default Main;