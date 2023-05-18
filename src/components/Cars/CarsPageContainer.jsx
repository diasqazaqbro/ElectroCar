import { connect } from "react-redux";
import CarsPage from "./CarsPage";

let mapStateToProps = (state) => {
  return {
    cars: state.cars.cars
  };
};

export default connect(mapStateToProps, {})(CarsPage);
