import styled from "styled-components";

export const ProBox = styled.section`
  width: 85%;
  height: fit-content;
  margin: auto;
  margin-bottom: 3vw;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const ProPic = styled.img`
  width: 530px;
  border-radius: 10px;
  filter: drop-shadow(19px 19px 34px rgba(0, 0, 0, 0.25));
`;
export const ProInfo = styled.div`
  padding: 3.7vw;
  text-transform: capitalize;
`;
export const Name = styled.div`
  font-size: 2.92vw;
  font-weight: bold;
`;
export const Role = styled.div`
  font-style: italic;
  font-size: 2.33vw;
`;
export const Role2 = styled.div`
  font-size: 2.5vw;
`;

export const ProBio = styled.div`
  text-transform: capitalize;
  line-height: 60px;
  position: relative;
`;

export const BioTitle = styled.h2`
  font-size: 5.839vw;
  margin-top: 5vw;
`;

export const Bio = styled.p`
  font-size: 2.336vw;
  margin-top: 4vw;
  font-weight: 300;
`;

export const Quote = styled.p`
  font-size: 2.336vw;
  width: 65.912vw;
  margin-top: 6vw;
  font-weight: 300;

  position: absolute;
  right: 0;

  &::after,
  &::before {
    content: "”";
    margin: 1vw;
    font-size: larger;
    font-weight: 600;
  }
`;
