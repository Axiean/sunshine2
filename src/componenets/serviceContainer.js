import styled from "styled-components";

export const Srv_container = styled.div`
  width: 89.333vw;
  height: auto;
  padding-bottom: 4vw;
  background: #ffffff;
  margin-left: 7vw;
  margin-bottom: 4vw;
  box-shadow: -7px 20px 49px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;
export const Srv_container_title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 3.704vw;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
  margin-left: 4.296vw;
  padding-top: 5.037vw;
`;
export const Srv_container_info = styled.div`
  ${({ right }) =>
    right ? "  display: flex; flex-direction: row; align-items: center;" : null}
`;
export const Srv_container_des = styled.p`
  display: inline-block;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 2.37vw;
  line-height: 4.444vw;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
  width: ${({ right }) => (right ? "50.370vw" : "90%")};
  margin: ${({ right }) => (right ? null : "auto")};
  margin-left: 4.296vw;
  margin-top: 4.667vw;
`;
export const Srv_container_chart = styled.div`
  display: ${({ right }) => (right ? "inline-block" : "block")};
  width: ${({ right }) => (right ? "27.852vw" : "80.741vw")};
  height: 27.704vw;
  margin: auto;
  margin-top: 2vw;
  background-color: pink;
  border-radius: 10px;
`;
