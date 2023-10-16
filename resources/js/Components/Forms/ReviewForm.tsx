import { useForm } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import Avatar from "@/Assets/user-icon.jpg";

function ReviewForm({ auth,car,review }: any) {
  const dateString = review&&review.created_at?review.created_at:null;
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const starLength = review&&review.rating?new Array(review.rating).fill(null):0;
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [IsEditMode, setIsEditMode] = useState(true);

  const handleRatingChange = (event: any) => {
    setRating(Number(event.target.value));
  };

  const handleMessageChange = (event: any) => {
      setMessage(event.target.value);
  };
  const { data, setData, post, processing, errors} = useForm({
    star: review&&review.rating || '',
    car_id: car.id || '',
    user_id: auth&&auth.user?auth.user.id:'',
    message: review&&review.message || '',
  });
  const handleSubmit = () => {
    post(route('user.ratings.store'))
    setIsEditMode(true);
  };
  const handleEdit = () => {
    setIsEditMode(false);
  };
  const closeEdit = () => {
    setIsEditMode(true);
    setData('message',review&&review.message || '')
  };
  return (
    <div>
      <form className="row g-3" method='post'>
        <div className='p-4'>
          <h3 className="font-bold text-gray-900 text-2xl">Reviews:</h3>
          <div className="bg-white border  border-gray-300 p-4 rounded-lg mt-3 shadow-md">
            <>
              {
                auth&&review
                ?
                <>
                  {
                    IsEditMode?
                      <>
                        <div className="mt-3 flex justify-between"> {/* Remove the extra 'justify-' prefix */}
                          <div className="flex">
                            <img src={auth && auth.user&&auth.user.image  ? '/storage/' + auth.user.image : Avatar} alt="" className="rounded-full w-12 h-12 mt-1" />
                            <div className="grid">
                              <span className=" ms-2 max-w-lg text-lg font-semibold leading-relaxed text-gray-900 dark:text-white">
                                {
                                  auth?.user&&auth.user.first_name&&auth.user.last_name ?
                                    auth.user.first_name + ' ' + auth.user.last_name
                                  : 
                                    auth?.user?.first_name
                                }
                              </span>
                              <span className="ms-2 mt-0 text-md font-small text-gray-900 dark:text-white">{formattedDate ? formattedDate : 'N/A'}</span>
                            </div>
                          </div>
                          <div className="text-end">
                            <div className='flex cursor-pointer space-x-0.5'  onClick={handleEdit}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#22C488" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                              <button className=" text-emerald-500 underline">
                                  Edit
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex space-x-1">
                          {
                            Array.from({ length: 5 }, (_, index) => index + 1).map((star,index) => (
                              <label key={index}>
                                  <input
                                      key={star}
                                      type="radio"
                                      name="rating"
                                      value={star}
                                      onClick={handleRatingChange}
                                      onChange={(e) => setData('star', e.target.value)}
                                      checked={rating === data.star}
                                      className="hidden"
                                  />
                                  {errors.star && <div className='text-danger'>{errors.star}</div>}
                                  <svg className={`w-8 h-8 cursor-pointer ${star <= data.star ? 'text-emerald-400' : 'text-gray-400'}`}
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20">
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                  </svg>
                              </label>
                          ))}
                          </div>
                          <p className='text-gray-950 text-md mt-2'>{review&&review.message?review.message:'N/A'}</p>
                        </div>
                      </>
                    :
                      <>
                      <div className="flex mt-3">
                          <div className="flex space-x-1">
                              {Array.from({ length: 5 }, (_, index) => index + 1).map((star,index) => (
                                  <label key={index}>
                                      <input
                                          key={star}
                                          type="radio"
                                          name="rating"
                                          value={star}
                                          onClick={handleRatingChange}
                                          onChange={(e) => setData('star', e.target.value)}
                                          checked={rating === data.star}
                                          className="hidden"
                                      />
                                      {errors.star && <div className='text-danger'>{errors.star}</div>}
                                      <svg className={`w-8 h-8 cursor-pointer ${star <= data.star ? 'text-emerald-400' : 'text-gray-400'}`}
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          viewBox="0 0 22 20">
                                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                      </svg>
                                  </label>
                              ))}
                          </div>
                      </div>
                      <div className='mt-3'>
                        <textarea id="message" name="message" rows={4} value={data.message} onChange={(e) => setData('message', e.target.value)}
                          className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        {errors.message && <div className='text-red-500'>{errors.message}</div>}
                        <div className="flex justify-between">
                          <button type="button" onClick={() => handleSubmit()} className='bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600'>Submit</button>
                          <button type="button" onClick={closeEdit} className='bg-gray-400 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-gray-400'>Cancel</button>
                        </div>
                      </div>
                      </>
                  }
                </>
                :
                <>
                  <div className="flex mt-3">
                    <div className="flex space-x-1">
                        {Array.from({ length: 5 }, (_, index) => index + 1).map((star,index) => (
                            <label key={index} >
                                <input
                                    key={star}
                                    type="radio"
                                    name="rating"
                                    value={star}
                                    onClick={handleRatingChange}
                                    onChange={(e) => setData('star', e.target.value)}
                                    checked={rating === data.star}
                                    className="hidden"
                                />
                                {errors.star && <div className='text-danger'>{errors.star}</div>}
                                <svg className={`w-8 h-8 cursor-pointer ${star <= data.star ? 'text-emerald-400' : 'text-gray-400'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </label>
                        ))}
                    </div>
                  </div>
                  <div className='mt-3'>
                    <textarea id="message" name="message" rows={4} value={data.message} onChange={(e) => setData('message', e.target.value)}
                      className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    {errors.message && <div className='text-red-500'>{errors.message}</div>}
                    <div className="flex justify-between">
                      <button type="button" onClick={() => handleSubmit()} className='bg-emerald-500 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-emerald-600'>Submit</button>
                      {
                        IsEditMode?
                          ''
                        :
                          <button type="button" onClick={closeEdit} className='bg-gray-400 text-white px-3 py-2.5 rounded-md mt-3 hover:bg-gray-400'>Cancel</button>
                      }
                    </div>
                  </div>
                </>
              }
            </>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
