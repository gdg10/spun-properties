import Property from "./Property";
import bushkillImages from "./bushkill";
import barnsdaleImages from "./barnsdale";

export type SpunProperty = {
  active: boolean;
  archived: boolean;
  featured: boolean;
  address: string;
  price: string;
  details: string;
  listingAgent: string;
  listingAgentsPhone: string;
  description: string;
  cardImage: string;
  imageGallery: string[];
};

const SpunProperties: SpunProperty[] = [
  {
    active: true,
    archived: false,
    featured: true,
    address: "1508 Bushkill St, Easton, PA 18042",
    price: "$250,000",
    details: "$250,000 | 3 bd | 1.5 ba | 1,734 sqft",
    listingAgent: "Brendan Grube",
    listingAgentsPhone: "9083295619",
    description:
      "Move-in ready, this newly renovated and updated classic colonial is located on a highly desirable, tree-lined side street. Some of the outstanding finishes include a totally new kitchen, updated bathrooms, refinished hardwood floors, new central air system, furnace and water heater. Large bedrooms, brick fireplace, first floor laundry room, den and a freshly painted basement makes this an attractive home. The property has off-street parking, a covered patio and a large back yard for pets or gardening. Owner may help with closing costs.",
    cardImage: bushkillImages[12],
    imageGallery: bushkillImages
  },
  {
    active: true,
    archived: false,
    featured: true,
    address: "805 Barnsdale Rd, Bethlehem, PA 18017",
    price: "$250,000",
    details: "$389,000 | 4 bd | 3 ba | 2,314 sqft",
    listingAgent: "Michael Volpone",
    listingAgentsPhone: "5702691930",
    description:
      "",
    cardImage: barnsdaleImages[1],
    imageGallery: barnsdaleImages
  }
];

export { Property };
export { SpunProperties };
