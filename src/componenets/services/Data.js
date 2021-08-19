import { Fade } from "react-reveal";

export const Data = (props) => {
  return (
    <Fade bottom>
      <div id="data-container">
        <img src={props.img} alt="" />

        <h3>{props.name}</h3>
        <p>{props.des}</p>
      </div>
    </Fade>
  );
};
