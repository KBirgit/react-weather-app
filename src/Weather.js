import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h3>Tallinn</h3>
      <h1>-7°C|F</h1>
      <h3>Monday 08:00</h3>
      <h3>Mostly Cloudy</h3>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        alt="Mostly Cloudy"
      />
      <div className="row">
        <div className="col-sm">Precipitation: 15%</div>
        <div className="col-sm">Humidity: 60%</div>
        <div className="col-sm">Wind: 12 km/h</div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <li>MON</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </li>
            <li>-7° -16°</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>MON</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </li>
            <li>-7° -16°</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>MON</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </li>
            <li>-7° -16°</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>MON</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </li>
            <li>-7° -16°</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>MON</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </li>
            <li>-7° -16°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
