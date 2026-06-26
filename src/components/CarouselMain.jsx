import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

function CarouselMain() {
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img1}
          title="Agrochemicals & Inorganic"
          desc="A.I. Content of Pesticides, Toxicological Data Generation, Physico-chemical studies as per OECD, CIB guidelines, BIS/CIPAC guidelines. Residual and Persistent studies on Crop, Water, Soil, Shelf Life Studies, Container Content Compatibility (CCC) studies."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img2}
          title="Food & Beverages"
          desc="Studies to ascertain products complying to FSSAI and other national & International standards, Nutritional Facts, Alcoholic and Non Alcoholic Beverages studies for product registration and quality checks, Food Grade Certifications."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img3}
          title="Healthcare"
          desc="Studies to strengthen the healthcare practices in hospitals like water testing for different usages as per AAMI/ IS:10500. Checking the Drugs quality, Air quality Monitoring in various sections. Microbial Enumeration Studies of various Medical Devices."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img4}
          title="Infrastructure"
          desc="Calibration of various laboratory accounterments for Fluid Flow, Electrotechnical, Volumetric & Gravimetry. Quality Evaluation of Construction Material (Raw & Finished products), Job Mix Formula, Concrete Mix Design."
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={img5}
          title="Textile, Paper & Leather"
          desc="Quality Control Testing, Projects, Third Party Quality Inspections (TPI), Supplier Quality Assessment, Mechanical, Physical, Chemical, Weathering Tests (Colour Fastness, Change in Physico-Mechanical properties)."
        />
      ),
    },
  ];

  return (
    <div style={{ marginBottom: 350 }}>
      <Carousel
        cards={cards}
        height="500px"
        width="70%"
        margin="auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CarouselMain;
