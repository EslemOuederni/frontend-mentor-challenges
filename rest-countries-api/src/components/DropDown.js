import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine as ChevronDownIcon } from "react-icons/ri";
export const DropDown = ({ dark }) => {
  return (
    <Menu as="div" className={`relative inline-block text-left mr-12`}>
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center rounded-md bg-lightMode-200 px-9 py-4 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md ${dark}`}
        >
          Filter By Region
          <ChevronDownIcon
            className="ml-4 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 mt-2 w-full origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dark}`}
        >
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-darkMode-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Africa
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-darkMode-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  America
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-darkMode-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Asia
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-darkMode-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Europe
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-darkMode-100"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Oceania
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
