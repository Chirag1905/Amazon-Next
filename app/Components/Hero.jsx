import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-msg">
          <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local
            delivery. <a>Click here to go to amazon.com</a></p>
        </div>
      </div>

      <div className="shop-section">

        <div className="box1 box">
          <div className="box-content">
            <h2>Clothes</h2>
            <Image src="/box1_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box2 box">
          <div className="box-content">
            <h2>Health &amp; Personal Care</h2>
            <Image src="/box2_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box3 box">
          <div className="box-content">
            <h2>Furniture</h2>
            <Image src="/box3_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box4 box">
          <div className="box-content">
            <h2>Eelectronics</h2>
            <Image src="/box4_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box5 box">
          <div className="box-content">
            <h2>Beauty Picks</h2>
            <Image src="/box5_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box6 box">
          <div className="box-content">
            <h2>Pet Care</h2>
            <Image src="/box6_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box7 box">
          <div className="box-content">
            <h2>New Arrival in Toys</h2>
            <Image src="/box7_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

        <div className="box8 box">
          <div className="box-content">
            <h2>Discover Fashion Trends</h2>
            <Image src="/box8_image.jpg" width={300} height={350} alt="" />
            <p>See More</p>
          </div>
        </div>

      </div>
    </>
  );
}