import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AllVenues = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://sis.materdeicollege.com/api/venues")
            .then((res) => res.json())
            .then((data) => {
                const { venues } = data;
                setData(venues);
            })
    }, []);

    const viewVenueSched = (venue) => {
        navigate(`/sis.materdeicollege.com/api/venues/${venue}`);
    };

    return (
        <div className="container">
            <div className="card bg-light col-md-11 mx-auto mt-2">
                <div className="venue">
                    <h1 className="text-center">Mater Dei College </h1>
                    <p className="title_venues text-center">List of All Venues/Rooms</p>
                </div>
               
                    <table className="table table-striped">
                        <thead className="text-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Building</th>
                                <th scope="col">Capacity</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {Object.keys(data)?.map((venue, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{data[venue].id}</td>
                                        <td>{data[venue].name}</td>
                                        <td>{data[venue].building}</td>
                                        <td>{data[venue].capacity}</td>
                                        <td><a className="btn btn-sm bg-warning"
                                        onClick={() => {
                                            viewVenueSched(data[venue].id);
                                        }}>Open</a></td>
                                        
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}
export default AllVenues;