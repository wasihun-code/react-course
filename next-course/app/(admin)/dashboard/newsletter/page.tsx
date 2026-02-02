
'use client';

import SubmitButton from './submit-button';
import subscribeAction from './action';
import { useActionState } from 'react';

const initialState = { error: '' };

export default function NewsletterPage() {
    const [state, formAction] = useActionState(subscribeAction, initialState);


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Newsletter</h1>
            {/* TODO: 4. Connect action */}
            <form className="flex flex-col gap-2" action={formAction}>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Enter email"
                    className="border p-2 rounded"
                />
                { state.error && <p className='text-red-500'>{state.error}</p> }

                <SubmitButton />
            </form>
        </div>
    )
}