// Components start around line 404
import ProfilePic from './../images/profile.jpg'
import Profile from './Profile'
import NewActivity from './NewActivity'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from '@heroicons/react/solid'

const navigation = [
  { name: 'Home', to: 'profile', icon: HomeIcon, current: true },
  { name: 'New Activity', to: '/newactivity', icon: ClockIcon, current: false },
  { name: 'All Activities', to: '/activities', icon: ClockIcon, current: false },
  { name: 'Featured', to: '/featured', icon: UserGroupIcon, current: false },
  { name: 'Goals', to: '/goals', icon: CreditCardIcon, current: false },
//   { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
//   { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Settings', to: '/settings', icon: CogIcon },
//   { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
//   { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
      <Router>
            <div className="relative h-screen flex overflow-hidden bg-gray-100">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                as="div"
                static
                className="fixed inset-0 flex z-40 lg:hidden"
                open={sidebarOpen}
                onClose={setSidebarOpen}
                >
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-700">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 flex items-center px-4">
                        {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                        alt="Easywire logo"
                        /> */}
                        <span className="text-white text-2xl font-bold">Fitness Tracker</span>
                    </div>
                    <nav className="mt-5 flex-shrink-0 h-full divide-y divide-blue-500 overflow-y-auto" aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                            <NavLink
                            key={item.name}
                            to={item.to}
                            activeClassName="bg-blue-800 text-white"
                            className= 'text-blue-100 hover:text-white hover:bg-blue-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                            
                            >
                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-blue-200" aria-hidden="true" />
                            {item.name}
                            </NavLink>
                        ))}
                        </div>
                        <div className="mt-6 pt-6">
                        <div className="px-2 space-y-1">
                            {secondaryNavigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                activeClassName="bg-blue-800 text-white"
                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 hover:text-white hover:bg-blue-600"
                            >
                                <item.icon className="mr-4 h-6 w-6 text-blue-200" aria-hidden="true" />
                                {item.name}
                            </NavLink>
                            ))}
                        </div>
                        </div>
                    </nav>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-col flex-grow bg-blue-700 pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                    {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                        alt="Easywire logo"
                    /> */}
                    <span className="text-white text-2xl font-bold">Fitness Tracker</span>
                    </div>
                    <nav className="mt-5 flex-1 flex flex-col divide-y divide-blue-800 overflow-y-auto" aria-label="Sidebar">
                    <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            activeClassName="bg-blue-800 text-white"
                            className= 'text-blue-100 hover:text-white hover:bg-blue-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                            
                        >
                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-blue-200" aria-hidden="true" />
                            {item.name}
                        </NavLink>
                        ))}
                    </div>
                    <div className="mt-6 pt-6">
                        <div className="px-2 space-y-1">
                        {secondaryNavigation.map((item) => (
                            <NavLink
                            key={item.name}
                            to={item.to}
                            className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-blue-100 hover:text-white hover:bg-blue-600"
                            activeClassName="bg-blue-800 text-white"
                            >
                            <item.icon className="mr-4 h-6 w-6 text-blue-200" aria-hidden="true" />
                            {item.name}
                            </NavLink>
                        ))}
                        </div>
                    </div>
                    </nav>
                </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto focus:outline-none">
                <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                <button
                    className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Search bar */}
                <div className="flex-1 px-4 flex justify-end sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    {/* <div className="flex-1 flex">
                    <form className="w-full flex md:ml-0" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">
                        Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                            id="search-field"
                            name="search-field"
                            className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search transactions"
                            type="search"
                        />
                        </div>
                    </form>
                    </div> */}
                    <div className="ml-4 flex items-center md:ml-6">
                    {/* <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                        <>
                            <div>
                            <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                <img
                                className="h-8 w-8 rounded-full"
                                src={ProfilePic}
                                alt=""
                                />
                                <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                <span className="sr-only">Open user menu for </span>CJ Roberts
                                </span>
                                <ChevronDownIcon
                                className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                aria-hidden="true"
                                />
                            </Menu.Button>
                            </div>
                            <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="/profile"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Your Profile
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="/settings"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Settings
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="/logout"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                    Logout
                                    </Link>
                                )}
                                </Menu.Item>
                            </Menu.Items>
                            </Transition>
                        </>
                        )}
                    </Menu>
                    </div>
                </div>
                </div>
                <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                {/* Page header */}
                <div className="bg-white shadow">
                    <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                    <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                        <div className="flex-1 min-w-0">
                        {/* Profile */}
                        <div className="flex items-center">
                            <img
                            className="hidden h-16 w-16 rounded-full sm:block"
                            src={ProfilePic}
                            alt=""
                            />
                            <div>
                            <div className="flex items-center">
                                <img
                                className="h-16 w-16 rounded-full sm:hidden"
                                src={ProfilePic}
                                alt=""
                                />
                                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                Good morning, CJ Roberts
                                </h1>
                            </div>
                            <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                <dt className="sr-only">Company</dt>
                                <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                                <OfficeBuildingIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                Royal Oak, MI
                                </dd>
                                <dt className="sr-only">Account status</dt>
                                <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                Verified account
                                </dd>
                            </dl>
                            </div>
                        </div>
                        </div>
                        <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Add money
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Send money
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* THIS IS WHERE WE RUN THE COMPONENTS */}
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/newactivity">
                        <NewActivity />
                    </Route>
                    {/* <Route path="/dashboard">
                        <Dashboard />
                    </Route> */}
                </Switch>


                </main>
            </div>
        </div>
    </Router>
  )
}
