import styled from "styled-components";

export const BrandsBox = styled.div`
  width: 79.778vw;
  height: 46.037vw;
  margin-left: 7vw;
  padding-top: 9vw;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: auto;
`;
export const BrandPic = styled.img`
  border-radius: 20px;
  width: 16.889vw;
  height: 16.889vw;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    -webkit-box-shadow: 2px 3px 19px 5px rgba(0, 0, 0, 0.54);
    box-shadow: 2px 3px 19px 5px rgba(0, 0, 0, 0.54);
  }
`;
