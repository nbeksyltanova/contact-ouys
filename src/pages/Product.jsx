import React, { useContext } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";
import { AppContext } from "../AppContext";

const Product = (props) => {
  const { seach } = useContext(AppContext);
  const product = productData.getProductBySlug(props.match.params.slug);

  const relatedProducts = productData.getProducts(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="">
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Новые тк3аепуькр</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts
              .filter((item) =>
                item.title.toLowerCase().includes(seach.toLowerCase())
              )
              .map((item, index) => (
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
    </Helmet>
  );
};

export default Product;
