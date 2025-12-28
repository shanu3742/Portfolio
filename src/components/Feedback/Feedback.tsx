import { useActionState } from 'react';
import { userFeedback } from '../../server-action/user.feedack';
import './feedback.css';

function Feedback() {
    const [state, formAction, isPending] = useActionState(userFeedback, {
        errors: {},
        enteredValues: {}
    });

    // Common styling for inputs to keep code DRY
    const inputStyles = (fieldName) => `
    w-full px-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm transition-all duration-200 outline-none text-gray-900 placeholder:text-gray-400
    ${state?.errors?.[fieldName]
            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
            : 'border-gray-200 focus:border-teal-600 focus:ring-4 focus:ring-teal-100'}
  `;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 px-1 font-sans">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-teal-600/50 overflow-hidden">

                {/* Header Section */}
                <div className="bg-teal-600 p-4 text-white">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-blue-100 mt-2">I'd love to hear from you. Send me a message!</p>
                </div>

                <form action={formAction} className="p-4 space-y-6">

                    {/* Name Field */}
                    <div className="space-y-1">
                        <label htmlFor='name' className="text-sm font-semibold text-gray-700 ml-1 cursor-pointer">Full Name</label>
                        <input
                            placeholder='Jane Doe'
                            name="name"
                            id='name'
                            defaultValue={state?.enteredValues?.name || ""}
                            className={inputStyles('name')}
                        />
                        {state?.errors?.name && (
                            <p className="text-red-500 text-xs mt-1 animate-pulse">{state.errors.name[0]}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                        <label htmlFor='email' className="text-sm font-semibold text-gray-700 ml-1 cursor-pointer">Email Address</label>
                        <input
                            placeholder='jane@example.com'
                            name="email"
                            id='email'
                            type="email"
                            defaultValue={state?.enteredValues?.email || ""}
                            className={inputStyles('email')}
                        />
                        {state?.errors?.email && (
                            <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>
                        )}
                    </div>

                    <div className="space-y-1">
                        {/* Phone Number */}
                        <div className="space-y-1">
                            <label htmlFor='number' className="text-sm font-semibold text-gray-700 ml-1 cursor-pointer">Phone Number</label>
                            <input
                                placeholder='1234567890'
                                type="text"
                                name="number"
                                id='number'
                                defaultValue={state?.enteredValues?.number || ""}
                                className={inputStyles('number')}
                            />
                            {state?.errors?.number && (
                                <p className="text-red-500 text-xs mt-1">{state.errors.number[0]}</p>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1">
                        <label htmlFor='message' className="text-sm font-semibold text-gray-700 ml-1 cursor-pointer">Message</label>
                        <textarea
                            placeholder='Tell me about your project...'
                            name="message"
                            id='message'
                            rows={4}
                            defaultValue={state?.enteredValues?.message || ""}
                            className={`${inputStyles('message')} resize-none`}
                        />
                        {state?.errors?.message && (
                            <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full h-[50px] bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 shadow-lg shadow-teal-200 transition-all active:scale-[0.98] disabled:bg-teal-300 flex justify-center items-center gap-2 fb-button"
                    >
                        {isPending ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : "Send Message"}
                    </button>

                    {/* Success Message Popup */}
                    {state?.success && (
                        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center animate-bounce">
                            ✨ Message sent successfully!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Feedback;