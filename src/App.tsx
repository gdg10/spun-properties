import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Property } from "./Property";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
//import Archived from './Property/Archived';
import Active from "./Property/Active";
import { Container, Row, Col } from "react-bootstrap";
import "./app.css";
import { SpunProperties, SpunProperty } from "./Property";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MasterWrapper = styled.div`
  background-color: white;
`;

const conSty = {
  backgroundColor: "white"
};

const isActive = (sp: SpunProperty) => {
  return sp.active === true;
};

const isArchived = (sp: SpunProperty) => {
  return sp.archived === true;
};

const CreateFeaturedPropertyComponent = (sps: SpunProperty[]) => {
  const isFeatured = (sp: SpunProperty) => {
    return sp.featured === true;
  };
  const ftProp: SpunProperty = sps.filter(isFeatured)[0];
  return CreatePropertyComponent(ftProp);
};

const CreatePropertyComponent = (sp: SpunProperty) => {
  console.log("called");
  return (
    <Property
      price={sp.price}
      details={sp.details}
      address={sp.address}
      listingAgent={sp.listingAgent}
      description={sp.description}
      propImages={sp.imageGallery}
      listingAgentsPhone={sp.listingAgentsPhone}
    />
  );
};

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      {CreateFeaturedPropertyComponent(SpunProperties)}
      <Active />
      <Contact />
    </React.Fragment>
  );
};
const goBackCopy = "< Home";

const backToActiveProps = () => {
  return (
    <Row>
      <Col style={{ height: "20px", marginBottom: "25px"}} lg={12} md={12} sm={12}>
        <Link to="/#active">{goBackCopy}</Link>
      </Col>
    </Row>
  );
};

const App = () => {
  return (
    <Router>
      <MasterWrapper>
        <NavBar />
        <Container style={conSty}>
          <Switch>
            <Route path={"/" + SpunProperties[0].route} key="1_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[0].price}
                details={SpunProperties[0].details}
                address={SpunProperties[0].address}
                listingAgent={SpunProperties[0].listingAgent}
                description={SpunProperties[0].description}
                propImages={SpunProperties[0].imageGallery}
                listingAgentsPhone={SpunProperties[0].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[1].route} key="2_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[1].price}
                details={SpunProperties[1].details}
                address={SpunProperties[1].address}
                listingAgent={SpunProperties[1].listingAgent}
                description={SpunProperties[1].description}
                propImages={SpunProperties[1].imageGallery}
                listingAgentsPhone={SpunProperties[1].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[2].route} key="2_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[2].price}
                details={SpunProperties[2].details}
                address={SpunProperties[2].address}
                listingAgent={SpunProperties[2].listingAgent}
                description={SpunProperties[2].description}
                propImages={SpunProperties[2].imageGallery}
                listingAgentsPhone={SpunProperties[2].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[3].route} key="3_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[3].price}
                details={SpunProperties[3].details}
                address={SpunProperties[3].address}
                listingAgent={SpunProperties[3].listingAgent}
                description={SpunProperties[3].description}
                propImages={SpunProperties[3].imageGallery}
                listingAgentsPhone={SpunProperties[3].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path={"/" + SpunProperties[4].route} key="4_uni">
              {backToActiveProps()}
              <Property
                price={SpunProperties[4].price}
                details={SpunProperties[4].details}
                address={SpunProperties[4].address}
                listingAgent={SpunProperties[4].listingAgent}
                description={SpunProperties[4].description}
                propImages={SpunProperties[4].imageGallery}
                listingAgentsPhone={SpunProperties[4].listingAgentsPhone}
              />
              <Active />
            </Route>
            <Route path="/" key="0_uni">
              <HomePage />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </MasterWrapper>
    </Router>
  );
};

export default App;
