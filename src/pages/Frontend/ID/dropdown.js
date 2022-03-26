import React from "react"
import { createPopper } from "@popperjs/core"

const Dropdown = ( { color } ) => {
  
  const filterResult = ( catItem ) => {
    // const result = card.filter
  }
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState( false )
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    createPopper( btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    } )
    setDropdownPopoverShow( true )
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow( false )
  }
  // bg colors
  let bgColor
  color === "white"
    ? ( bgColor = "bg-blueGray-700" )
    : ( bgColor = "bg-" + color + "-500" )
  return (
    <>
      <div className="flex container mx-auto w-1/2 justify-center">
        <div className="  px-4">
          <div className="relative inline-flex align-middle">
            <button
              className={
                "text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg border-solid border-2 border-gray-400 focus:ring focus:border-blue-300 mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            >
              dropDOWN
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                ( dropdownPopoverShow ? "block " : "hidden " ) +
                ( color === "white" ? "bg-white " : bgColor + " " ) +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  ( color === "white" ? " text-blueGray-700" : "text-black" )
                }
                onClick={() =>
                  closeDropdownPopover() && filterResult('1')
              }
              >
                Satu
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  ( color === "white" ? " text-blueGray-700" : "text-black" )
                }
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown