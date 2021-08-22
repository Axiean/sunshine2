import React from "react";
import styled from "styled-components";

const FirstPara = styled.p``;

const QuoteContainer = styled.div``;

const QuoteTitle = styled.h3``;

const Quote = styled.p``;

function BrandsData(props) {
  return (
    <div style={{ width: "200px" }}>
      <FirstPara>{props.firstPa}</FirstPara>
      <QuoteContainer>
        <QuoteTitle>{props.quoteTitle}</QuoteTitle>
        <Quote>{props.quote}</Quote>
      </QuoteContainer>
    </div>
  );
}

export default BrandsData;
