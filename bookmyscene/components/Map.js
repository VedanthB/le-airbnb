import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";

function Map({ searchResults, rating, viewLocation }) {
  // Get coordinates from search results
  const coords = searchResults.map((result) => {
    return {
      longitude: result.long,
      latitude: result.lat,
    };
  });

  // Use coordinates from results to get center location for mapbox
  const center = getCenter(coords);

  // State for mapbox info
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  // State for displaying location popup on map
  const [selectedLocation, setSelectedLocation] = useState({});

  // Check for any location being sent in via props. Set location on map.
  useEffect(() => {
    setSelectedLocation(viewLocation);
  }, [viewLocation]);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/vedanthb/cks9eiuaf85rj18kcjfizgbu2"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Marker>

          {/* Display popup on map for selected location */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnclick={false}
              closeButton={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-40"
            >
              <div>
                <div className="relative w-full h-44">
                  <Image
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <h3 className="absolute bottom-0 right-0 font-semibold text-white text-sm px-3 py-1 bg-gray-700">
                    {result.price}
                  </h3>
                </div>

                <div className="border-b py-2 w-10 border-gray-400 mx-auto" />

                <div className="px-3 pb-3">
                  <h2 className="font-semibold pt-2">{result.title}</h2>
                  <p className="text-sm font-light">{result.location}</p>
                  <div className="flex items-center pt-4">
                    <p className="w-3">{Math.floor(result.star)}</p>
                    {rating(parseInt(result.star))}
                    <div className="relative ml-auto hover:opacity-90">
                      <Image
                        src="/get-directions-button.svg"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
