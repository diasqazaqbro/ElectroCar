import { connect } from "react-redux";
import CarAbout from "./CarAbout";
import { calculatorProduct } from "../../state/carReducer";
debugger;
const mapStateToProps = (state, props) => ({
  onShowItem: props.onShowItem,
  car: props.car,
  currentPrice: state.cars.currentPrice,
});
export default connect(mapStateToProps, { calculatorProduct })(CarAbout);
