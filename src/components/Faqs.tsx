import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
const faqs = [
    [
        {
            question: 'Do you offer COVID-19 vaccinations?',
            answer: 'Yes, we provide COVID-19 vaccinations. Please contact us to schedule your appointment or to learn more about the vaccine availability and eligibility.',
        },
        {
            question: 'Can I get my lab results online?',
            answer: 'Absolutely, our patient portal provides access to your lab results as soon as they are available. You can log in with your credentials to view your medical information securely.',
        },
        {
            question: 'How do I make an appointment?',
            answer: 'You can make an appointment by calling our front desk or by using our online scheduling system available on our website.',
        },
    ],
    [
        {
            question: 'What insurance plans do you accept?',
            answer: 'We accept most major insurance plans. Please check our website for a detailed list or contact our billing department for confirmation.',
        },
        {
            question: 'What are your operating hours?',
            answer: 'Our clinic is open Monday to Friday from 8 am to 6 pm. We also offer emergency services on weekends.',
        },
        {
            question: 'Do you have pediatric services?',
            answer: 'Yes, we have a dedicated pediatric department to cater to the medical needs of children from infancy through adolescence.',
        },
    ],
    [
        {
            question: 'Can I refill my prescription online?',
            answer: 'Yes, you can request a prescription refill through our patient portal or by contacting our pharmacy directly during working hours.',
        },
        {
            question: 'Do you offer telemedicine consultations?',
            answer: 'Yes, we offer telemedicine services for a variety of healthcare needs. You can book a virtual visit through our patient portal or by calling our office.',
        },
        {
            question: 'What should I bring to my first appointment?',
            answer: 'Please bring a photo ID, your insurance card, any medical records that may be relevant, and a list of any medications you are currently taking.',
        },
    ],
]

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative my-12 overflow-hidden bg-slate-50 py-20 sm:py-40"
        >
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can’t find what you’re looking for, email our support team and if you’re lucky someone
                        will get back to you.
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="pt-20">
                    <label htmlFor="message" className="block text-lg font-semibold leading-6 text-slate-900">
                        Submit a question
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            rows={1}
                            className="block w-full rounded-md border-0 bg-white/50 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#9C27B0] sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                    >
                        Send Question
                    </button>
                </div>
            </Container>
        </section>
    )
}
