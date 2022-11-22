import React from 'react'

export function Button(props) {
    return (
        <div style={{ padding: 10, backgroundColor: '#333', color: '#fff', display: 'inline-block', borderRadius: 4 }} onClick={() => alert('Hi')}>
            {props.title}
        </div>
    )
}
