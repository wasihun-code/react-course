import { revalidatePath} from 'next/cache'
import { redirect } from 'next/navigation';
export default function NewsletterPage() {

    // TODO: 1. Create Server Action
    async function subscribe(formData: FormData) {
        // TODO: 2. Add directive
        'use server'

        // TODO: 3. Log the email (formData.get('email'))
        console.log("Subscribe [", formData.get('email'), "]");

        redirect('/thank-you');
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Newsletter</h1>
            {/* TODO: 4. Connect action */}
            <form action={subscribe} className="flex gap-2">
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Enter email"
                    className="border p-2 rounded"
                />
                <button className="bg-blue-500 text-white p-2 rounded">
                    Subscribe
                </button>
            </form>
        </div>
    )
}