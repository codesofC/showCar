"use client";

import { Dialog, Transition } from "@headlessui/react";
import { CarPropertiesProps } from "@/types";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  car: CarPropertiesProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="car-details-dialog-panel">
                  <button
                    type="button"
                    className="car-details-btn-close"
                    onClick={closeModal}
                  >
                    <IoClose />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="car-details-main-image">
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        alt="car"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-gray-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '29')}
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-gray-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '33')}
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-gray-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '13')}
                          fill
                          priority
                          alt="car"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      { car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div key={key} className="flex-between gap-5 w-full text-right">
                            <h4> { key.replace("_", " ") } </h4>
                            <p> { value } </p>
                        </div>
                      ))}  
                    </div>                  
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
