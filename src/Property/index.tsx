import Property from "./Property";
import bushkillImages from "./bushkill";
import barnsdaleImages from "./barnsdale";
import riverImages from "./river";
import martinsImages from "./martins";
import bobalewImgages from "./bobalew";

export type SpunProperty = {
  route: string,
  active: boolean,
  archived: boolean,
  featured: boolean,
  address: string,
  price: string,
  details: string,
  listingAgent: string,
  listingAgentsPhone: string,
  description: string,
  cardImage: string,
  imageGallery: string[]
};

const SpunProperties: SpunProperty[] = [
  {
    route: '1508Bushkill',
    active: false,
    archived: true,
    featured: true,
    address: "1508 Bushkill St, Easton, PA 18042",
    price: "$250,000",
    details: "3 bd | 1.5 ba | 1,734 sq. ft.",
    listingAgent: "Brendan Grube",
    listingAgentsPhone: "9083295619",
    description:
      "Move-in ready, this newly renovated and updated classic colonial is located on a highly desirable, tree-lined side street. Some of the outstanding finishes include a totally new kitchen, updated bathrooms, refinished hardwood floors, new central air system, furnace and water heater. Large bedrooms, brick fireplace, first floor laundry room, den and a freshly painted basement makes this an attractive home. The property has off-street parking, a covered patio and a large back yard for pets or gardening. Owner may help with closing costs.",
    cardImage: bushkillImages[12],
    imageGallery: bushkillImages
  },
  {
    route: '805Barnsdale',
    active: true,
    archived: false,
    featured: false,
    address: "805 Barnsdale Rd, Bethlehem, PA 18017",
    price: "$250,000",
    details: "4 bd | 3 ba | 2,314 sq. ft.",
    listingAgent: "Michael Volpone",
    listingAgentsPhone: "5702691930",
    description: "",
    cardImage: barnsdaleImages[1],
    imageGallery: barnsdaleImages
  },
  {
    route: "3480River",
    active: true,
    archived: false,
    featured: false,
    address: "3480 River Rd, Mount Bethel, PA 18343",
    price: "$429,900",
    details: "3 bd | 2 ba | 1,200 sq. ft.",
    listingAgent: "Alexis Geleta-Oakley",
    listingAgentsPhone: "610428-2952",
    description: "",
    cardImage: riverImages[10],
    imageGallery: riverImages
  },
  {
    route: "641Martins",
    active: true,
    archived: false,
    featured: false,
    address: "641 Martins Ln, Bethlehem, PA 18018",
    price: "$125,000",
    details: "3 bd | 1 ba | 820 sq. ft.",
    listingAgent: "Eric Huber",
    listingAgentsPhone: "4843757592",
    description: "",
    cardImage: martinsImages[0],
    imageGallery: martinsImages
  },
  {
    route: "1660Bobalew",
    active: true,
    archived: false,
    featured: false,
    address: "1660 Bobalew Trail Allentown, PA 18103",
    price: "$529,000",
    details: "4 bd | 2.5 ba | 5,764 sq. ft.",
    listingAgent: "Eric Huber",
    listingAgentsPhone: "4843757592",
    description: "",
    cardImage: bobalewImgages[0],
    imageGallery: bobalewImgages
  }
];

export { Property };
export { SpunProperties };
