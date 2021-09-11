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
import Pro1 from "../../Images/ProfilePic/pro1.png";

function ProBoxPage({ name, role, role2, bioTitle, bio, quote }) {
  return (
    <>
      <ProBox>
        <TitleBox>
          <ProPic src={Pro1} />
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
