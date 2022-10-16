import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ViewVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { venue } = data;
        setVenue(venue);
        setSchedule(data.schedules);
      })
  }, []);

  return (
    <div className="container col-md">
        <h1 className="title">Mater Dei College {venue.building}</h1>
        <p className="text-center">Classroom Class Schedules</p>
        <div className="justify-content-center">
        </div>

        <table className="table table-striped">
          <thead className="text-white">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Building</th>
              <th scope="col">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
          
        </table>
        <Link to="/" className="btn btn-sm btn-primary mb-4">
                    back
                </Link>
          <div className="col-md-12">
              <div className="card-body bg-light">
                <table className="table table-striped">
                  <thead className="text-white">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Course No.</th>
                      <th scope="col">Description</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">Size</th>
                      <th scope="col">Schedule</th>
                    </tr>
                  </thead>

                  <tbody className="text-light">
                    {Object.keys(schedule)?.map((sched, index) => {
                      return (
                        <tr key={index}>
                          <td>{schedule[sched].id}</td>
                          <td>{schedule[sched].course_no}</td>
                          <td>{schedule[sched].description}</td>
                          <td>{schedule[sched].teacher}</td>
                          <td>{schedule[sched].size}</td>
                          <td>{schedule[sched].schedule}</td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
          </div>
        </div>

  );
};

export default ViewVenue;