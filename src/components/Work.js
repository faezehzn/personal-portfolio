
const Work = (props) => {
  return (
      <div className="proj-imgbox">
        <img src={props.imgUrl} alt="ImageUrl" />
        <div className="proj-text">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
  );
};

export default Work;
