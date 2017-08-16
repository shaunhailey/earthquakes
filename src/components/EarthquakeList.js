import React, { Component } from 'react'
import moment from 'moment'
import earthquakes from '../Data/earthquakes'

export default class EarthquakeList extends Component {
  render() {
    let quakes = earthquakes.features.map(quakes => {
      return (
        <div className="col-sm-6" key={quakes.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">
                {quakes.properties.title}
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Magnitude: {quakes.properties.mag}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                Time: {moment(quakes.time).format('llll')}
              </h6>
              <p className="card-text">
                Coordinates: {quakes.geometry.coordinates}
              </p>

              <a href={quakes.properties.url} className="card-link">
                USGS Event Link
              </a>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="row">
        {quakes}
      </div>
    )
  }
}
