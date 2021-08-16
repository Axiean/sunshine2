export const Data = (props) => {
  return (
    <div id="data-container">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.des}</p>
    </div>
  );
};
