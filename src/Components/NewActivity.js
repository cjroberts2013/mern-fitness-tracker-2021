/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function NewActivity() {
    return (
        <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <form className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add Activity</h3>
                    <p className="mt-1 text-sm text-gray-500">Fill out the form below to add a new activity to your profile.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                    <div className="sm:col-span-3">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Activity Type
                        </label>
                        <div className="mt-1">
                        <select
                            id="type"
                            name="type"
                            autoComplete="type"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                            <option>Run</option>
                            <option>Bike</option>
                        </select>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date of Activity (mm/dd/yyyy)
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="date"
                            id="date"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Activity Time
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="time"
                            id="time"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="pace" className="block text-sm font-medium text-gray-700">
                        Pace
                        </label>
                        <div className="mt-1">
                        <input
                            type="text"
                            name="pace"
                            id="pace"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div className="mt-1">
                            <textarea
                            id="description"
                            name="description"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                            defaultValue={''}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Write a few sentences about your activity.</p>
                    </div>
        
                    
                    </div>
                </div>
        
                <div className="pt-5">
                <div className="flex justify-end">
                    <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                    Submit
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
    )
  }
  