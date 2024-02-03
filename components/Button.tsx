'use client'
import React from 'react'
import {useFormStatus} from 'react-dom'

const Button = () => {
    const {pending} = useFormStatus();
  return (
        <button id='btn' type='submit' aria-disabled={pending}>
            {
                pending ? 'Submitting...' : 'Submit'
            }
        </button>
    )
}

export default Button