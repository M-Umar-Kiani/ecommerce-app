import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (

        <footer className="bg-secondary page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <Link href="/"> ecommerece.com</Link>
            </div>
        </footer>

    )
}
