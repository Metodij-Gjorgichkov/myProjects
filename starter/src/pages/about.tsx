import CameraComponent from "@/components/CameraComponent";
import CurlyNavigation from "@/components/CurlyNavigation";
import Header from "@/components/Header";
import { GetStaticProps, NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="about-wrapper">
      <div className="hero-section">
        <Header
          image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
          leftIcon="fas fa-chevron-left"
        />
        <h2>About us</h2>
        <div className="img-container">
          <img src="images/pollution.jpeg" style={{ height: `80vh` }} alt="" />
        </div>
      </div>

      <div className="container p-3">
        <h3 className="text-right">The mission</h3>
        <p className="text-right">At Breathe.mk, our mission is to tirelessly work towards a cleaner and healthier Skopje by addressing the critical issue of air quality</p>

        <div className="img-container">
          {/* <img src="images/982.png" alt="image-placeholder" /> */}
        </div>

        <h3>The Dedication</h3>
        <p>We are dedicated to implementing innovative solutions, raising awareness, and collaborating with stakeholders to reduce air pollution, ensuring that every citizen can breathe fresh, clean air and enjoy a better quality of life.</p>

        <div className="img-container">
          {/* <img src="images/982.png" alt="image-placeholder" /> */}
        </div>

        <h3 className="text-right">The Commitement</h3>
        <p className="text-right">Our commitement is rooted in the belief that cleaner air is not just a goal but a fundamental right, and we strive to make Skopje a shining example of environmental stewardship for generations to come.</p>
      </div>

      <div className="container about-support">
        <h3>The support</h3>

        <div className="d-flex align-items-center">
          <div className="img-container mb-4 mr-4">
            <img src="../images/frontwise.png" alt="" />
          </div>
          <h2 className="h6"><span style={{ color: "#343a40", fontWeight: "700" }}>frontwise</span><span style={{ color: "#525659", fontWeight: "700" }}> group</span></h2>
        </div>
        <h3 className="h5">Frontwise group</h3>
        <p className="mb-5"><q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error impedit obcaecati ad quia nemo distinctio.</q></p>

        <div className="img-container mb-4 mr-4">
          <img src="../images/skopjePin.jpg" alt="" />
        </div>
        <h3 className="h5">Skopje City</h3>
        <p className="pb-5"><q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error impedit obcaecati ad quia nemo distinctio.</q></p>
      </div>

      <CurlyNavigation />
    </div>
  )
}
export default About;
