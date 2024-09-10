import { useEffect } from "react";

import { Fragment } from "react";
import { useHttp } from "../../services/http.hooks";
import { useDispatch, useSelector } from "react-redux";
import { userFetchCounter } from "../../actions";

//этот компонент в будущем будет сравнивать количество пользователей каждый месяц, может потом сделать визуализацию в виде графика
function UserCounter() {
  const { count } = useSelector((state) => state.userFetchCounter);
  const { request } = useHttp();
  const dispatch = useDispatch();
  useEffect(() => {
    request("http://localhost:5000/user-count")
      .then((data) => {        
        dispatch(userFetchCounter(data))})
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <h2 className="user-counter__counter main__title">user count: {count}</h2>
    </Fragment>
  );
}

export default UserCounter;
