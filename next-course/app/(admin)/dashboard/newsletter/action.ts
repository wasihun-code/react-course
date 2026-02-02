'use server'

import { redirect } from "next/navigation";


export default function subscribeAction(
    prevState: any,
    formData: FormData,
) {
    const email = formData.get('email');

    if (!email || email == '')
        return {"error": "email is incorrect"};

    console.log("Subscribed", email);

    redirect('/thank-you');
}