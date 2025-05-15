// app/contact/page.tsx (for App Router) or pages/contact.tsx (for Pages Router)

const Page = () => {
    return (
        <main className="bg-[#FAFAF5] text-black">
  
            {/* Hero */}
            <section className="text-center py-24">
            <h1 className="text-[72px] leading-none font-[500] tracking-wide font-serif">CONTACT US</h1>
            </section>
    
            {/* Contact Info */}
            <section className="max-w-3xl mx-auto px-6 pb-24">
            <h2 className="uppercase text-sm font-bold tracking-widest mb-2">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
                For inquiries, assistance, or to request a catalogue, <br /> reach out—we’re here for you.
            </p>
    
            <div className="text-sm space-y-4">
                <div>
                <p className="font-bold tracking-widest">Customer Service</p>
                <p>Call: +234 814 307 7480</p>
                </div>
                <div>
                <p>Opening/Closing hours</p>
                <p>Monday to Friday: 9am – 5pm (GMT+0)</p>
                <p>Saturday: 10am – 2pm (GMT+1)</p>
                </div>
                <div>
                <p>Have a question? You can also contact us:</p>
                <p className="text-blue-700">Service@littlethingsforher.com</p>
                </div>
            </div>
            </section>
  
        
        </main>
    );
}

export default Page;