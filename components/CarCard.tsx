"use client"

import { useState } from 'react';
import { CarPropertiesProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import { FaGasPump } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { CarDetails, CustomButton } from './';

interface CarProps{
  car: CarPropertiesProps
}

const CarCard = ({ car }: CarProps) => {

  const [isOpen, setIsOpen] = useState(false)

  const { city_mpg, year, make, model, transmission, drive } = car
  
  return (
    <div className='car-card group'>
      <div className="car-card-content">
        <h2 className="car-card-content-title">
          {make.toUpperCase()} {model.charAt(0).toUpperCase() + model.slice(1)}
        </h2>
      </div>
      <div className='car-card-icon-container'>
        <div className="car-card-icon-content">
          <GiSteeringWheel className='text-purple-600 car-card-icon' />
          <span className='car-card-icon-text'>
            { transmission === 'a' ? 'Automatic' : 'Manual' }
          </span>
        </div>
        <div className="car-card-icon-content">
          <IoSettings className='text-orange-400 car-card-icon' />
          <span className='car-card-icon-text'>
            { drive.toUpperCase() }
          </span>
        </div>
        <div className="car-card-icon-content">
          <FaGasPump className='text-green-700 car-card-icon' />
          <span className='car-card-icon-text'>
            { city_mpg } MPG
          </span>
        </div>
      </div>

      <div className="car-card-image">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          alt={make}
          className="object-contain"
        />
      </div>

      <div className='relative flex justify-between items-center w-full gap-2'>
        <div className="car-card-price">
            <span className='car-card-price-dollar'> $ </span>
            <span> { calculateCarRent(city_mpg, year) } </span>
            <span className='car-card-price-day'> /day </span>
        </div>
        <div className="car-card-btn-container">
          <CustomButton 
            title='More info' 
            btnType='button' 
            containerStyles='bg-blue-500 text-white text-[14px] rounded-full py-1 px-3'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  )
}

export default CarCard