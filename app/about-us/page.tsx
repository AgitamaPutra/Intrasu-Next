
import HeroPrograms from "../programs/components/HeroPrograms";
import ProgData from "../programs/components/ProgData";
import { AboutContents } from "./components/contents";


export default async function AboutUs() {

  return (
    <div>
      <HeroPrograms heading="About Us" message="We are a team with more than 15 years experience in hospitality internship, training and manpower placement" bg="about-img" />
      <AboutContents />
    </div>
  )
}