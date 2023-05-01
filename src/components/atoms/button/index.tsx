import './style.css';

export const Button = ({ ...props }) => {
  return (
    <div>
      {props && props.ok}
      <button
        className="btn-container"
        onClick={() => console.log("I'v been clicked")}
      >
        Button
      </button>
    </div>
  );
};
