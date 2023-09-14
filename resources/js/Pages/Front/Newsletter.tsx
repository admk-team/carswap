import { useForm } from '@inertiajs/inertia-react';
import React from 'react'

function Newsletter( {errors }: any) {
    const {data, setData,post} = useForm({
        email: '',
    
      });
    
      // Function to handle form field changes 
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      // Function to handle form submission
      const handleSubmit = (e:any) => {
        e.preventDefault();
        post(route('subcribe.store'))
        // You can use the formData object to send the data to the server using axios or any other method.
        // For example:
        // const response = await axios.post('/api/your-endpoint', formData);
    };
  return (
    <form method='post' onSubmit={handleSubmit} >
    <div className="w-full p-5">
    <div className="container flex flex-col xl:flex-row mx-auto px-5 py-8 xl:py-14 text-gray-900 bg-gray-200 rounded-2xl">
        <div className="w-full mb-6 xl:mb-0 text-center"> 
            <div className="mb-1 text-3xl font-extrabold text-gray-900">Subcribe to our newsletter</div>
            <div className="text-lg">get the latest information,updates and more </div>
        </div>
        
        <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input  placeholder="Enter your email" className="w-full sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  required/>
                <button type="submit" className="w-full sm:w-1/4 h-12 text-white bg-emerald-600 rounded-lg shadow  duration-300 ease-in-out hover:bg-purple-700">Subscribe</button>
            </div>
            {errors.email && <div className='text-danger'>{errors.email}</div>}
            </div>
    
        </div>
    </div>
    </form>


  )
}

export default Newsletter