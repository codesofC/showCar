"use client"

import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {

    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", newLimit.toString())

        router.push(newPathname)
    }


  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
                title='Show More'
                btnType='button'
                containerStyles='bg-red-700 rounded-full text-white py-3 px-6'
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore