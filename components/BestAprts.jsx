import Image from 'next/image';
import bestImg from "/public/assets/images/best-apartments.jpg";

const BestAprts = () => {
    return ( 
        <section className="best-apartments">
            {/* <img src="images/best-apartments.jpg" alt="" class="best-apartments__img"> */}
            <Image 
                src={bestImg}
                className='best-apartments__img'
                alt=''
            />
            <div className="container">
                <h2 className="best-apartments__heading">BEST APARTMENTS</h2>
                <p className="best-apartments__caption">ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE MARTERIALS.</p>
            </div>
        </section>
     );
}
 
export default BestAprts;