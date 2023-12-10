"use client"

import { Fragment, useState } from 'react'
import { CustomFilterProps } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import { HiChevronUpDown } from "react-icons/hi2";
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {

  const [selected, setSelected] = useState(options[0])

  const router = useRouter()

  const handleUpdateParams = (e: { title: string, value: string }) => {

    const newPathname = updateSearchParams(title, e.value.toLowerCase())

    router.push(newPathname)

  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={e => {
          setSelected(e)
          handleUpdateParams(e)
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter-btn">
            <span className='block truncate'> { selected.title } </span>
            <HiChevronUpDown className='text-lg text-gray-400' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter-options">
              {options.map(option => (
                <Listbox.Option 
                  key={option.value} 
                  value={option}
                  className={({ active }) => `relative cursor-default select-none px-4 py-2 ${active ? 'bg-red-700 text-white' : 'text-gray-900'}`}
                >
                  { ({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>
                      { option.title }
                    </span>
                  ) }
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter