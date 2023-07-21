import React from 'react'
import { useRouter } from 'next/router'

export default function Title() {
    const router = useRouter()
    const { title } = router.query
    return (
        <div>
            <h1>Edit Page</h1>
        </div>
    )
}
