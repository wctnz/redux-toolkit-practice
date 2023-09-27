import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsList from "./components/CarsList";
import { carsSlice } from "./store/cars.slice";

function App() {
  const [allList, setAllList] = useState([])

const getId = () => Math.trunc(Math.random()*1000)

  const data = [
    { id: getId(), model: "MAZDA", year: 2004, color: "YELLOW", added: false},
    { id: getId(), model: "TOYOTA", year: 2023, color: "WHITE", added: false},
    { id: getId(), model: "LEXUS", year: 2017, color: "GREY", added: false},
    { id: getId(), model: "ACURA", year: 2021, color: "NAVY", added: false}
  ]

  const cars = useSelector(state => state.cars.cars)
  // console.log("cars в компоненте App", cars)
  // console.log("carsSlice.actions", carsSlice.actions)

  const { removeFromCars } = carsSlice.actions
  // console.log("removeFromCars", removeFromCars())

  const dispatch = useDispatch()

  useEffect(() => {
    setAllList(data)
  }, [])

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "150px" }}>
          <h1>Избранное</h1>
          {cars.length === 0
            ? <p>Нет выбранных объектов</p>
            : cars.map((car, index) =>
              <div key={car.id}>
                <h3>{index + 1}. {car.model}</h3>
                <p>{car.color}, {car.year}</p>
                <button onClick={() => dispatch(removeFromCars(car))}>Удалить</button>
              </div>
            )}
        </div>
        <div>
          <CarsList allList={allList} />
        </div>
      </div>
    </>
  );
}

export default App;
