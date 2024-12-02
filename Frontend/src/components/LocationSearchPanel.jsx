const LocationSearchPanel = (props) => {
  const location = [
    "kaljsdflkasdflkasdlkf",
    "kaljsdflkasdflkasdlkf",
    "kaljsdflkasdflkasdlkf",
    "kaljsdflkasdflkasdlkf"
  ];

  return (
    <div>
      {location.map(function (elem, index) {
        return (
          <div 
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
          >
            <div className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center justify-start my-4">
              <h2 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full">
                <i className="ri-map-pin-fill text-xl"></i>
              </h2>
              <h4 className="font-medium">{elem} klajfd</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;