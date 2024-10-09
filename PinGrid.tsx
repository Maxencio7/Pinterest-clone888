import { useState, useEffect } from "react";
import axios from "axios";
//import "pinterest-clone/app/components/Images/ImageGrid.css";
import "/home/king888/Desktop/First Fix/pinterest-clone/pinterest-clone/app/globals.css";

const ACCESS_KEY = "cfJA_AYNQSYiM0UUyEc3cSjWn-wQ8_MOXLtAsnM77e8";

interface Pin {
  id: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  description: string;
}

const PinGrid = () => {
  const [pins, setPins] = useState<Pin[]>([]);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              client_id: ACCESS_KEY,
              count: 30,
            },
          }
        );
        const pins = response.data as Pin[];

        setPins(pins);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPins();
  }, []);

  return (
    <div className="container">
      <div className="card-container">
        {pins.map((pin) => (
          <div key={pin.id} className="card">
            <img
              src={pin.urls.regular}
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">{pin.user.name}</h5>
              <p className="card-text">{pin.description}</p>
              <div className="btn-group">
                <button className="btn btn-primary">See Profile</button>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinGrid;
