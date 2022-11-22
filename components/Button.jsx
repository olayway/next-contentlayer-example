import Link from 'next/link'
import React from 'react'

export function Button(props) {
    return (
        <div style={{ padding: 10, backgroundColor: '#333', color: '#fff', display: 'inline-block', borderRadius: 4 }} onClick={() => alert('Hi')}>
            <Link
                href="#"
                className="text-blue-700 hover:text-blue-900"
                legacyBehavior>
                {props.title}
            </Link>
        </div>
    )
}
