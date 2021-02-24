import { deleteProductOperation } from "../../redux/operations/diaryOperations";
import { Component } from "react";
import { connect } from "react-redux";
import DelIcon from "../icons/DelIcon";
import DiaryStyled from "./DiaryListStyled";

class DiaryList extends Component {
  onClickDelete = (id) => {
    this.props.deleteProductOperation({
      dayId: this.props.dayId,
      eatenProductId: id,
    });
    //console.log(event.target);
  };

  render() {
    return (
      <DiaryStyled>
        <ul className="diary-list_ul">
          {this.props.eatenProducts.map((eatenProduct) => (
            <li className="diary-list_li" key={eatenProduct.id}>
              <span className="diary-list_name">{eatenProduct.title}</span>
              <span className="diary-list_gramm">{eatenProduct.weight} г</span>
              <span className="diary-list_kkal">
                {Math.round(eatenProduct.kcal)} ккал
              </span>
              <button
                onClick={() => this.onClickDelete(eatenProduct.id)}
                data-id={eatenProduct.id}
              >
                <DelIcon height="16" width="16" fill="#9B9FAA" />
              </button>
            </li>
          ))}
        </ul>
      </DiaryStyled>
    );
  }
}

const mapStateToPtops = (state) => ({
  eatenProducts: state.userDiary.user.eatenProducts,
  dayId: state.userDiary.user.dayId,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProductOperation: (prodOfDay) =>
    dispatch(deleteProductOperation(prodOfDay)),
});

export default connect(mapStateToPtops, mapDispatchToProps)(DiaryList);
