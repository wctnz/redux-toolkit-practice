import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsSlice } from "../store/cars.slice";

const CarsList = ({ allList }) => {
  const [isAdded, setIsAdded] = useState()

const {addToCars} = carsSlice.actions
const dispatch = useDispatch()
const cars = useSelector(state => state.cars.cars)
console.log("cars", cars)

  return (
    <div style={{ minWidth: "700px" }}>
      <h3 style={{ textAlign: "center" }}>ОБЩИЙ СПИСОК</h3>
      {allList &&
        allList.map((item) => (
          <div key={ item.id } style={{display: "flex", justifyContent: "space-between", border: "1px solid black"}}>
            <p>{item.id}. {item.model} {item.color} {item.year} </p>
            <button disabled={JSON.stringify(cars).includes(JSON.stringify(item))} onClick={ () => dispatch(addToCars(item)) } style={{height: "30px", margin: "10px 5px"}}>Добавить</button>
          </div>
        ))}
    </div>
  );
};

export default CarsList;
