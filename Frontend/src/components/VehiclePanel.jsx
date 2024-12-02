const VehiclePanel = (props) => {
  return (
    <div>
        <h5
          onClick={() => {
           props.setVehiclePanel(false);
          }}
          className="p-1 text-center absolute top-0 w-[93%] "
        >
          <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={() => {props.setConfirmRidePanel(true)}} className="mb-2 w-full px-3 py-4  flex border-2 active:border-black rounded-xl items-center justify-between">
          <img
            className="h-12 "
            src="https://th.bing.com/th/id/OIP.W6LhzRy6IUhggr57cAZsmgHaHp?rs=1&pid=ImgDetMain "
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Uber Go{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 minus away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , compact rides
            </p>
          </div>
          <h2 className="test-xl font-semibold">₹193.20</h2>
        </div>
        <div onClick={() => {props.setConfirmRidePanel(true)}} className="mb-2 w-full px-3 py-4  flex border-2 active:border-black rounded-xl items-center justify-between">
          <img
            className="h-12 "
            src="https://th.bing.com/th/id/OIP.W6LhzRy6IUhggr57cAZsmgHaHp?rs=1&pid=ImgDetMain "
            alt=""
          />
          <div className="w-1/2 ml-2">
            <h4 className="font-medium text-base">
              Uber Go{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 minus away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable , compact rides
            </p>
          </div>
          <h2 className="test-xl font-semibold">₹193.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel