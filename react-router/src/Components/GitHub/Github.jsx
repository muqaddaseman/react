import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1>Github Followers: {data.followers}</h1>

      <img
        src={data.avatar_url}
        alt="GitHub Profile"
        width={300}
        className="mx-auto mt-4 rounded-full"
      />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/muqaddaseman"
  )

  return response.json()
}