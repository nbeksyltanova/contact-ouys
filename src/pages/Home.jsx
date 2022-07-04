import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import SimpleAccordion from "../components/SimpleAccordion";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCart2";
import policy from "../assets/fake-data/policy";
import productData2 from "../assets/fake-data/ases";
import productData from "../assets/fake-data/products";
import ProductView2 from "../components/ProductView2";
const Home = () => {
  return (
    <Helmet title="Главная">
      {/* hero slider */}
      {/* <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      /> */}
      {/* end hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/catalog">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* end policy section */}
      <Section>
        <div className="slider">
          <ProductView2 />
        </div>
      </Section>

      <h1 className="welcom">Добро пожаловать в магазин OuyFashion!</h1>
      <p className="welcom__p"></p>
      {/* best selling section */}
      <Section>
        <Section>
          <SimpleAccordion />
        </Section>
        <SectionTitle>Новые колекции </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>
          <hr />
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}
      <Section>
        <SectionTitle>
          <hr />
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData2.getProducts(8).map((item, index) => (
              <ProductCard2
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* banner */}
      <Section>
        <SectionBody className="vid">
          {/* <Player
            className="vid"
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product section */}

      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
