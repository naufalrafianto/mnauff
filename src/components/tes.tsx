'use client'
import React, { useEffect, useState } from 'react'

const Tes = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('api/posts')
                if (response.ok) {
                    const newData = await response.json()
                    setData(newData)
                } else {
                    throw new Error('Failed to fetch data')
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    console.log(data)

    return (
        <div>
            {data ? (
                <div>
                    <h1>Data from API:</h1>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    )
}

export default Tes
