import React, { useState, useEffect, useRef } from 'react';
import { useForm, router } from '@inertiajs/react';

const SliderCard = ({brands,categories}: any) => {

  const [showResults, setShowResults] = useState(false);
  const [location, setlocation] = useState('');
  const [wait, setWait] = useState(false);
  const [suggestion, setSuggestion] = useState([]);

  const handleInputChange = () => {
    setShowResults(true);
  };

  const handleOutsideClick = (event: any) => {
    if (!event.target.closest("#searchLocation")) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };

  }, []);

  const handleSuggestions = (value: any) => {
    setlocation(value)
    if(!wait){
      setWait(true);

      const response = router.visit('/', {data:{q:location}, preserveState: true,
        preserveScroll: true,
        replace: true, onSuccess: (res)=>{
          const s:any = res.props?.suggestions;
          setSuggestion(s)
        } });
        
      setTimeout(()=>{
        setWait(false);
      },500)

    }
    console.log(wait)
  };

  const { data, setData, errors, get } = useForm({
    location: '',
    min: 0,
    max: 0,
    brand: '',
    category:''
  })

  const handlePrice = (min: number, max: number) => {
    setData({ ...data, 'min': min, 'max': max });
  }
  const priceGroups = [
    {
      name: 'Under 3M',
      min: 0,
      max: 3000000
    }, {
      name: '3M-6M',
      min: 3000000,
      max: 6000000
    },
    {
      name: '6M-10M',
      min: 6000000,
      max: 10000000
    },
    {
      name: '10M-15M',
      min: 10000000,
      max: 15000000
    },
    {
      name: 'Above 15M',
      min: 15000000,
      max: 0
    },

  ]

  const handleSearch = () => {
    get(route('search'));
  }

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-gray-50 bg-opacity-70 shadow-xl  rounded-lg  sm:p-6 md:p-8 ">
        <h1 className="text-center text-2xl font-bold mb-4 text-gray-950">Find Your Ideal Car</h1>
        <div className="flex items-center relative">
          <input id='searchLocation' type="search" placeholder="Search location..." value={location} onChange={(e) => handleSuggestions(e.target.value)} className="relative border border-gray-300 rounded-lg py-2 px-4 w-full shadow-md" onClick={handleInputChange} />

          {showResults && (<ul className="absolute top-8 left-0 z-10 w-full mt-2  bg-white rounded-lg shadow-lg ">
            { suggestion?.map((sitem: any, index:any) => (
              <li key={sitem + index} className='px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => { setData('location', sitem); setlocation(sitem); }}>{sitem}</li>
            ))}
          </ul>)}
        </div>
          <div className='mt-3 h-40 overflow-y-scroll custom-scrollbar'>    
        <h3 className='font-extrabold text-xl mt-4 text-gray-950'>By Category:</h3>
        <div className="mb-3 mt-2">
          {categories?.map((category: any, categoryindex: any) => (
            <button key={categoryindex} type="button"
              onClick={() => setData('category', category?.id)}
              className="border mx-1 mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ">
              {category?.title+ '(' +category?.car_count+ ')'}
            </button>
          ))
          }
        </div>
        <h3 className='font-extrabold text-xl mt-1 text-gray-950'>By Price:</h3>
        <div className="mb-3 mt-2">
          {priceGroups?.map((pg: any, pgindex: any) => (
            <button key={pgindex} type="button"
              onClick={() => handlePrice(pg.min, pg.max)}
              className="border mb-3 text-sm focus:bg-emerald-500 font-extrabold bg-white-400 border-gray-900 rounded-lg py-1 px-2 shadow-md mr-1 text-gray-950 ">
              {pg?.name}
            </button>
          ))
          }
        </div>
        <h3 className='font-extrabold text-xl text-gray-950'>By Brand:</h3>
        <div className="grid grid-cols-6 gap-0 mt-2">
          {
            brands?.map((brand: any) => (
              <button key={brand.id} className="border pt-1  pl-1 bg-white-400 focus:bg-emerald-500" onClick={() => setData('brand', brand?.id)}>
                <img src={"/storage/" + brand?.image} alt="Image 1" className="w-10 h-10 object-contain" />
              </button>
            ))
          }
        </div>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={() => handleSearch()} className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold w-full py-2 px-4 rounded" type="button">Search</button>
        </div>
      </div >

    </>
  )
}

export default SliderCard


