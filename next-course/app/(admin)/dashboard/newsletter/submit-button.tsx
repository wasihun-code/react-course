'use client'

import { useFormState, useFormStatus } from "react-dom"

export default function SubmitButton() {
    
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className="bg-blue-500 text-white p-2 rounded">
            {pending ? 'Submitting....' : 'Subscribe'}
        </button>
    )
}