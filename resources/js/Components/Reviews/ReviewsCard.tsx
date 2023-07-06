
import React from 'react';

const ReviewsCard = () => {
    return (
        <>

            <a href="#" className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-5">
                <blockquote className="  mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."</p>
                </blockquote>
                <figcaption className="flex items-center space-x-3">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption>
            </a>

            <a href="#" className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-5">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                    <p className="my-4">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver!"</p>
                </blockquote>
                <figcaption className="flex items-center  space-x-3">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Roberta Casas</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                    </div>
                </figcaption>
            </a>

            <a href="#" className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                    <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                </blockquote>
                <figcaption className="flex items-center  space-x-3">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                    </div>
                </figcaption>
            </a>

        </>
    );
};

export default ReviewsCard;
