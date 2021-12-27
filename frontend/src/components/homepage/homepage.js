import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [workingtimes, setWorkingtimes] = useState([]);

  let get_data = () => {
    const config = {
      headers: { Authorization: `JWT ${localStorage.getItem("access_token")}` },
    };
    axios
      .get(
        "http://activitytracker/api/workingtimes/?worker__name=Tomas",
        config
      )
      .then((res) => {
        setWorkingtimes(res.data);
      });
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div>
      {workingtimes.map((e) => (
        <div key={e.id}>
          {e.worker} + {e.order} + {e.work_day}
        </div>
      ))}
      HomePage
    </div>
  );
};

export default HomePage;
