import gif from "../assets/Running dog.gif";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={gif} alt="spinner" />
    </div>
  );
};

export default LoadingSpinner;
