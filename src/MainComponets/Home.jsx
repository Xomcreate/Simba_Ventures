import React from 'react'
import HomeA from '../HomeComponents/HomeA'
import HomeB from '../HomeComponents/HomeB'
import HomeC from '../HomeComponents/HomeC'
import HomeD from '../HomeComponents/HomeD'
import Hommy from '../HomeComponents/Hommy'
import HomeF from '../HomeComponents/HomeF'

function Home() {
  return (
    <div className="relative">
      <HomeA />
       <Hommy />
      <HomeB />

      {/* Hero (HomeC) */}
      <HomeC />

      {/* Float HomeD into HomeC area like AboutE example */}
      <div
        className="
          flex justify-center
          lg:-mt-32   /* overlap nicely on large screens */
          md:-mt-20
          sm:mt-6     /* normal on small screens */
          mt-6
          relative z-20
        "
      >
        <div className="w-full max-w-6xl">
          <HomeD />
        </div>

      </div>

     <HomeF/>
    </div>
  )
}

export default Home
