"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const {data: session} = useSession()
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [router , session])

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-center my-5 text-3xl font-bold">Welcome to your Dashboard</h1>

      <form className="max-w-2xl mx-auto">

        <div className="my-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input value={form.email?form.email: ""} onchange={handleChange} type="email" name='email' id='email' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        {/* input forusername */}
        <div className="my-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input value={form.username?form.username: ""} onchange={handleChange} type="text" name='username' id='username' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        {/* input for profile picture of input type text */}
        <div className="my-2">
          <label htmlFor="profile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
          <input value={form.profile?form.profile: ""} onchange={handleChange} type="text" name='profile' id='profile' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        {/* input for cover pic */}
        <div className="my-2">
          <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
          <input value={form.cover?form.cover: ""} onchange={handleChange} type="text" name='cover' id='cover' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        {/* input razorpay id */}
        <div className="my-2">
          <label htmlFor="razorpay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Credentials</label>
          <input value={form.razorpay?form.razorpay: ""} onchange={handleChange} type="text" name='razorpay' id='razorpay' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
          {/* input razorpay secret */}
        <div className="my-2">
          <label htmlFor="razorpay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Credentials</label>
          <input value={form.razorpay?form.razorpay: ""} onchange={handleChange} type="text" name='razorpay' id='razorpay' className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        {/* Submit Button */}
        <div className="my-6">
          <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 foucs:ring-blue-300 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm">Save</button>
        </div>
        </form> 
    </div>
  )
}

export default Dashboard
