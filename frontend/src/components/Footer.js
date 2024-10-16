import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo and Description */}
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold">LR<sub className='text-sm'>Akash <span className="text-red-500">&hearts;</span></sub></h1>
      <p className="mt-2 text-gray-400">
        Your one-stop solution for all your shopping needs. Quality products at the best prices.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-xl font-semibold">Quick Links</h2>
      <ul className="mt-4">
        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
      </ul>
    </div>

    {/* Social Media Links */}
    <div>
      <h2 className="text-xl font-semibold">Follow Us</h2>
      <div className="flex mt-4 space-x-4">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/luminarakash" target="_blank" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.23 0H1.77C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.77 24h20.457C23.207 24 24 23.23 24 22.277V1.723C24 .77 23.208 0 22.23 0zM7.092 20.452H3.656V9.453h3.436v10.999zm-1.718-12.6c-1.1 0-1.987-.9-1.987-1.997 0-1.097.887-1.997 1.987-1.997s1.987.9 1.987 1.997c0 1.097-.887 1.997-1.987 1.997zM20.452 20.452h-3.436v-5.714c0-1.364-.025-3.117-1.902-3.117-1.904 0-2.195 1.486-2.195 3.016v5.815h-3.436V9.453h3.298v1.501h.048c.459-.87 1.582-1.789 3.256-1.789 3.484 0 4.127 2.29 4.127 5.264v6.023z" />
          </svg>
        </a>
        {/* GitHub */}
        <a href="https://github.com/luminarakash" target="_blank" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.304 3.438 9.8 8.205 11.387.6.112.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.757-1.332-1.757-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.805 1.305 3.492.998.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.223-.123-.304-.536-1.527.117-3.182 0 0 1.008-.323 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.656 1.655.243 2.878.12 3.182.77.841 1.234 1.913 1.234 3.223 0 4.61-2.804 5.624-5.476 5.92.43.369.823 1.097.823 2.213v3.285c0 .32.217.694.824.577C20.565 21.798 24 17.303 24 12 24 5.372 18.627 0 12 0z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/luminarakash" target="_blank" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.993 4.388 10.968 10.125 11.846v-8.385H7.078v-3.46h3.047v-2.635c0-3.007 1.79-4.666 4.533-4.666 1.313 0 2.687.235 2.687.235v2.97h-1.514c-1.492 0-1.954.928-1.954 1.878v2.218h3.328l-.532 3.46h-2.796v8.385C19.612 23.042 24 18.067 24 12.073z" />
          </svg>
        </a>
        <a href="https://www.twitter.com/luminarakash" target="_blank" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.926 4.926 0 002.163-2.724 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.37 4.482A13.938 13.938 0 011.671 3.15a4.904 4.904 0 001.523 6.557A4.902 4.902 0 01.96 9.47v.06a4.917 4.917 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.918 4.918 0 004.596 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.788-.023-1.177-.068a13.934 13.934 0 007.548 2.212c9.056 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.637a9.935 9.935 0 002.458-2.549z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/luminarakash" target="_blank" className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C8.741 0 8.332.014 7.052.072 5.768.13 4.873.373 4.106.643c-.828.273-1.496.637-2.166 1.307S.917 2.791.644 3.618C.373 4.387.13 5.282.072 6.568.014 7.848 0 8.257 0 11.517s.014 3.668.072 4.948c.058 1.286.301 2.181.571 2.948.273.828.637 1.496 1.307 2.166s1.338 1.034 2.166 1.307c.767.27 1.662.513 2.948.571 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.286-.058 2.181-.301 2.948-.571.828-.273 1.496-.637 2.166-1.307s1.034-1.338 1.307-2.166c.27-.767.513-1.662.571-2.948.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.286-.301-2.181-.571-2.948-.273-.828-.637-1.496-1.307-2.166s-1.338-1.034-2.166-1.307c-.767-.27-1.662-.513-2.948-.571C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 016.162 6.162A6.162 6.162 0 0112 18.162 6.162 6.162 0 015.838 12 6.162 6.162 0 0112 5.838zm0 1.735a4.426 4.426 0 100 8.853 4.426 4.426 0 000-8.853zm6.406-.833a1.035 1.035 0 110 2.07 1.035 1.035 0 010-2.07z" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-8 text-center text-gray-500">
    © 2024 LR<sub>Akash</sub><span className="text-red-500">&hearts;</span> All rights reserved.
  </div>
</footer>

  )
}

export default Footer