import HeroPrograms from "../programs/components/HeroPrograms";
import ProgData from "../programs/components/ProgData";
import { ContactContents } from "./components/contents";


export default async function Contact() {

  return (
    <div>
      <HeroPrograms heading="Contact Us" message="Get us for general inquiries or further information about Intern and Training programs." bg="contact-img" />
      <ContactContents />
    </div>
  )
}