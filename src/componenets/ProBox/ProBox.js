import React from "react";
import {
  ProBox,
  ProInfo,
  TitleBox,
  ProPic,
  Name,
  Role,
  Role2,
  Bio,
  BioTitle,
  ProBio,
  Quote,
} from "../styledComponents/aboutPageElements";

function ProBoxPage({ name, role, role2, bioTitle, bio, quote, pic }) {
  return (
    <>
      <ProBox>
        <TitleBox>
          <ProPic src={pic} />
          <ProInfo>
            <Name>{name}</Name>
            <Role>{role}</Role>
            <Role2>{role2}</Role2>
          </ProInfo>
        </TitleBox>
        <ProBio>
          <BioTitle>{bioTitle}</BioTitle>
          <Bio>{bio}</Bio>
          <Quote>{quote}</Quote>
        </ProBio>
      </ProBox>
    </>
  );
}

export default ProBoxPage;
