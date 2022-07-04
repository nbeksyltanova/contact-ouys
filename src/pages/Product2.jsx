import React from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard2 from "../components/ProductCard2";
import ProductView2 from "../components/ProductView2";

import productData2 from "../assets/fake-data/ases";

const Product2 = (props) => {
  const ases = productData2.getProductBySlug(props.match.params.slug);

  const relatedProducts2 = productData2.getProducts(8);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [ases]);

  return (
    <Helmet title="">
      <Section>
        <SectionBody>
          <ProductView2 product={ases} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle> Загляните</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts2.map((items, index) => (
              <ProductCard2
                key={index}
                img01={items.image01}
                img02={items.image02}
                name={items.title}
                price={Number(items.price)}
                slug={items.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product2;
