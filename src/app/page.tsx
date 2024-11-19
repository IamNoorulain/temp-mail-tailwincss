'use client'

import { useState } from 'react'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Image from "next/image"

export default function Home() {
  const [email, setEmail] = useState("abc@xyz.com")
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 5000)
      })
      .catch((error) => console.error("Failed to copy text: ", error))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border border-dashed border-gray-600 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-extrabold font-mono mb-4">Your Temporary Email Address</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="bg-gray-700 rounded-full py-2 px-4 w-full sm:w-auto">
                  <p className="truncate">{email}</p>
                </div>
                <button 
                  onClick={handleCopy}
                  className="bg-amber-700 hover:bg-amber-800 focus:ring-2 focus:ring-amber-600 rounded-full px-6 py-2 transition duration-150 ease-in-out w-full sm:w-auto"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-300 text-center">
              Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.
            </p>
          </div>
        </section>

        <section className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
            {["Copy", "Refresh", "Change", "Delete"].map((action) => (
              <button key={action} className="bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 px-6 py-2 rounded-full transition duration-150 ease-in-out">
                {action}
              </button>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl overflow-hidden">
            <div className="bg-gray-700 py-2 px-4 flex justify-between">
              <span className="font-semibold">Sender</span>
              <span className="font-semibold">Subject</span>
              <span className="font-semibold">View</span>
            </div>
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin mb-4">
                <Image 
                  src="/waiting.svg"
                  width={100}
                  height={100}
                  alt="Loading"
                />
              </div>
              <h5 className="font-extrabold tracking-wider font-mono text-xl text-gray-300">Your inbox is empty</h5>
              <h6 className="font-light tracking-tight">Waiting for incoming emails</h6>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">What is Disposable Temporary E-mail?</h2>
            <p className="text-gray-300 mb-8">
              Disposable email - is a free email service that allows to receive email at a temporary address that self-destructed after a certain time elapses. It is also known by names like : tempmail, 10minutemail, 10minmail, throwaway email, fake-mail , fake email generator, burner mail or trash-mail. Many forums, Wi-Fi owners, websites and blogs ask visitors to register before they can view content, post comments or download something. Temp-Mail - is most advanced throwaway email service that helps you avoid spam and stay safe.
            </p>

            <h2 className="text-2xl font-bold mb-4">The Tech behind Disposable Email Addresses</h2>
            <p className="text-gray-300 mb-8">
              Everyone owns an email address each and every hour, for everything from connecting at work, with business prospects, reaching out to friends and colleagues using the email address as an online passport. Nearly 99% of all apps and services we sign-up today required an email address, likewise to most shoppers loyalty cards, contest and offer entries, and more.
            </p>

            <h2 className="text-2xl font-bold mb-4">So, What Is A Disposable Email Address?</h2>
            <p className="text-gray-300 mb-8">
              Disposable email address (DEA) technically means an approach where a user's with a unique email address gets a temporary email address for your current contact. The DEA allow the creation of an email address that passes validity need to sign-up for services and website without having to show your true identity.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why would you need a fake email address?</h2>
            <ul className="list-disc pl-5 text-gray-300 mb-8">
              <li className="mb-2">
                <strong>Sign-Up For Store Loyalty Card:</strong> If you don't want to get promotional emails from the store adverting new products, use a disposable email address instead of your business email address, and you rule out spam emails.
              </li>
              <li className="mb-2">
                <strong>Test Your App:</strong> You just completed coding a web app, and you want to test it comprehensively before releasing it for sale, you can easily get 100 disposable emails, create dummy accounts and test it yourself.
              </li>
              <li className="mb-2">
                <strong>Sign-Up For Double Account With A Web App:</strong> You need another IFTTT account to program a second Twitter account run for your marketing site.
              </li>
              <li>
                <strong>Eliminate Spam:</strong> A Disposable email address is a very useful tool against spam, especially, for users who consistently access web forms, forums and discussion groups.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How to Choose a Disposable Email?</h2>
            <p className="text-gray-300 mb-4">The best fake email provider should:</p>
            <ul className="list-disc pl-5 text-gray-300 mb-8">
              <li>Allow users create temporary emails address at the click of a button.</li>
              <li>No registration is registration or identity information about the user.</li>
              <li>The email address should remain anonymous.</li>
              <li>Offer more than one email address (as many as you may want).</li>
              <li>Offers temporarily email stored (temporal email inbox at user's disposal).</li>
              <li>Straightforward and functional design to get a mundane email.</li>
              <li>Provider random account and users can choose an address of choice.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">To Conclude:</h2>
            <p className="text-gray-300">
              Have a disposable mail address system set up in a fantastic way to make sure when you participate in online wikis, chat rooms, and file sharing services and bulletin boards forums your real identity is never disclosed and never sold to anyone to avoid mail spam with Temp-mail.org.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  
  );
}
