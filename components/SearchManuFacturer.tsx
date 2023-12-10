import { useState, Fragment } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import { TbBrandVolkswagen } from "react-icons/tb";
import { manufacturers } from "@/constants";

const SearchManuFacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer.toLocaleLowerCase().replace(/\s+/g, "").includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <TbBrandVolkswagen className="text-xl ml-4 text-gray-500" />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer-input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="search-manufacturer-options z-10">
              {filteredManufacturers.map((item) => (
                        <Combobox.Option
                          key={item}
                          value={item}
                          className={({ active }) => `
                          relative search-manufacturer-option 
                          ${ active ? 'bg-red-700 text-white' : 'text-gray-900'}
                          `}
                        >
                          {({ selected, active }) => (
                            <>
                              <span className={`block ${selected ? 'font-lg' : 'font-md'}`}>
                                {item}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3
                                   ${active ? 'text-white' : 'text-teal-600'}`}
                                >
                                  
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManuFacturer;
