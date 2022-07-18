import React from 'react'
import StepOne from './BookingForm/Component/StepOne'

const Bookingpage = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        <div className='hidden lg:block'>
          <img className='w-full h-full object-cover' src="../../assets/Booking Page/Marly_BookingPage.jpg" alt="" srcset="" />
        </div>
        <div className='lg:col-span-2 px-69px pt-84px'>
          <div className='grid grid-cols-2 mb-21px'>
            <h1 className='font-Gilroy font-light text-40px leading-80px text-blackshade-0'>Traveller Enquiry</h1>
            <div className='flex justify-end'>
              <div className='MarlyLogo'>
                <img src="../../assets/Booking Page/svg/MarlyLogo.svg" alt="" />
              </div>
            </div>
          </div>
          <StepOne />
          {/* <BookingForm /> */}
        </div>
      </div>
    </div>
  )
}

export default Bookingpage