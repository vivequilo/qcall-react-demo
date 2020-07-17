import React, { useState, useEffect, useRef } from 'react';

export default function Video({ srcObject, ...props }) {
    const refVideo = useRef(null)

    useEffect(() => {
        if (!refVideo.current) return
        console.log(srcObject)
        refVideo.current.srcObject = srcObject
    }, [srcObject])

    return <video ref={refVideo} {...props} />
}