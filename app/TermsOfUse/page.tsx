import PatternLayout from '@/components/PatternLayout';
import React from 'react';

const TermsOfUse = () => {
  return (
    <PatternLayout>
    <div className="flex flex-col min-h-screen bg-white relative sm:h-[420vh] mb-[10vh]" style={{ background: `linear-gradient(to bottom, #fefffa 10%, white 20%)`, fontFamily: "BLmelody" }}>

      {/* Main Content */}
      <main className="flex-grow flex flex-col relative z-10">
        {/* Title */}
        <div className="text-center pt-16 pb-12 text-black">
          <h1 className="text-2xl font-medium tracking-wider">TERMS OF USE</h1>
        </div>
        
        
        {/* Terms Content */}
        <div className="max-w-3xl mx-auto py-16 px-6 text-black text-justify">
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">General Terms and Conditions of Use for LittleThingsforHer.com</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              Welcome to &quot;Little Things for Her&quot; (LTFH). By using our website, you agree to comply with 
              these Terms and Conditions. Please read them carefully, as they govern your access to 
              and use of our Site, as well as any services, products, and content provided therein.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-light mb-2">1. Personal Data &amp; Privacy Policy</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              We have a separate Privacy Policy (&quot;Privacy Policy&quot;) that describes how we collect, use, and 
              protect your personal information. By using this Site, you consent to the collection and 
              processing of your information as outlined in our Privacy Policy.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">2. Intellectual Property</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              All materials on this Site, including logos, designs, images, graphics, and text, are the 
              exclusive property of LTFH or licensed to us and are protected by applicable copyright, 
              trademark, and intellectual property laws. Reproduction, distribution, or unauthorized use 
              of these materials is prohibited without our explicit permission.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">3. Links to Third-Party Sites</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              This Site may contain links to third-party websites for your convenience. LTFH has no 
              control over and is not responsible for the content, privacy policies, or practices of any 
              third-party sites. Linking does not imply endorsement by LTFH.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">4. User Conduct</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              You agree not to use the Site in any way that may disrupt, damage, or interfere with other 
              users&apos; experience. This includes but is not limited to transmitting harmful, offensive, or 
              otherwise inappropriate content.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">5. Limitation of Liability</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
              LTFH is not liable for any direct, indirect, incidental, special, or consequential damages 
              arising from your use of, inability to use the Site or any services or products provided 
              through it. This limitation applies to any claim related to the use of our Site or services, 
              even if we have been advised of such damages.
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">6. Disclaimer of Warranty</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                The Site and all content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. LTFH does not warrant that the Site will be uninterrupted, secure, or error-free
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">7. Governing Law &amp; Dispute Resolution</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
            These Terms and Conditions are governed by Nigerian law. Any disputes related to these Terms or the Site will be resolved exclusively in the courts of Nigeria
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">8. Waiver</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
            Failure by LTFH to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing to be effective
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-sm font-medium mb-2">9. Severability</h2>
            <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
            If any provision of these Terms is deemed unlawful or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions will continue in full force and effect
            </p>
        </div>
                  
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">General Terms and Conditions of Sale for 
                LittleThingsForHer.com</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                If any provision of these Terms is deemed unlawful or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions will continue in full force and effect
                </p>
            </div>
            
                  
            <div className="mb-8">
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                These Terms and Conditions of Sale apply to all purchases made on *LittleThingsForHer.com* (referred to as the “Site”) and constitute a legally binding agreement between you and LTFH
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">1. Order Acceptance</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                All orders are subject to acceptance and availability. We reserve the right to cancel or refuse orders at our discretion. You will receive a confirmation email once your order is accepted
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">2. Pricing & Payment</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                All prices are in Nigerian Naira (NGN) and are subject to change without notice. Payment must be made at the time of order placement. We accept various payment methods, including credit/debit cards and bank transfersPrices listed on the Site are in USD (or specified currency) and are subject to change. Payment must be received in full before your order is shipped. We accept major credit cards and other payment methods as specified on the Site
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">3. Shipping & Delivery</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                Delivery times are estimates and are not guaranteed. LTFH is not responsible for delays due to external factors. For more details, refer to our [Shipping Policy](#)
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">4. Return & Refund Policy</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                If you are not satisfied with your purchase, you may return eligible items within the return period specified in our [Return Policy]. Items must be unused, in original packaging, and accompanied by a receipt. Refunds will be issued to the original payment method.
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">5. Risk of Loss</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                All items purchased from LTFH are made under a shipment contract. The risk of loss and title for such items pass to you upon our delivery to the carrier
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">6. Product Descriptions & Accuracy</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                LTFH strives to provide accurate descriptions and images of our products. However, we do not warrant that product descriptions or other content on the Site are accurate, complete, or free from errors
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">7. Limitation of Liability</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                LTFH’s liability to you for any direct or indirect damages related to the purchase or use of our products is limited to the total amount of your order. We are not liable for incidental or consequential damages under any circumstances.
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">8. Disclaimer of Warranties</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                Our products are provided “as is,” without any warranties, either express or implied. LTFH disclaims any and all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">9. Governing Law & Dispute Resolution</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                These Terms of Sale are governed by Nigerian law. Any disputes arising from purchases made on our Site will be exclusively resolved in Nigerian courts
                </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-sm font-medium mb-2">10. Changes to Terms of Sale</h2>
                <p className="text-sm leading-4.5" style={{ fontFamily: "BLmelody-Light"}}>
                LTFH reserves the right to modify these Terms of Sale at any time without prior notice. Continued use of the Site constitutes your acceptance of the revised terms
                </p>
            </div>
        
        </div>
      </main>
      </div>
      </PatternLayout>
  );
};

export default TermsOfUse;
