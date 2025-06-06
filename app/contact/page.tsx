// app/contact/page.tsx (for App Router) or pages/contact.tsx (for Pages Router)

const Page = () => {
    return (
        <main className="bg-[#FAFAF5] text-black" style={{
    background: `linear-gradient(to bottom, #fefffa 30%, white 40%)`,
  }}>
  
            {/* Hero */}
            <section className="text-center py-24">
            <h1 className="text-[52px] md:text-[72px] leading-none font-[500] tracking-wide font-serif" style={{fontFamily: "Belgan Aesthetic"}}>CONTACT US</h1>
            </section>
    
            {/* Contact Info */}
            <section className="max-w-3xl mx-auto px-6 pb-24 font-light" >
            <h2 className="uppercase text-sm font-bold tracking-widest mb-2">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
                For inquiries, assistance, or to request a catalogue, <br /> reach out—we’re here for you.
            </p>
    
            <div className="text-sm space-y-4">
                <div>
                <p className="font-bold tracking-widest">Customer Service</p>
                <p>Call: +234 201 330 6336</p>
                </div>
                <div>
                <p>Opening/Closing hours</p>
                <p>Monday to Friday: 9am – 5pm (GMT+1)</p>
                <p className="mb-3">Saturday: 10am – 9pm (GMT+1)</p>
                <p className="mb-3">Have a question? You can also contact us:</p>

                <p>Services@littlethingsforher.com</p>
                </div>
                <div>
                </div>
            </div>
            </section>
  
        
        </main>
    );
}

export default Page;