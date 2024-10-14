"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Coffee, Monitor, Shield, Users, Wifi, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'



export default function Homepage() {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
				<div className="container mx-auto px-6 py-6 flex justify-between items-center">
					<Link href="/" className="text-3xl font-extrabold text-white tracking-tight">
						<Image
							src="/logo.png"
							alt="CoWorkSpace Logo"
							width={120}
							height={40}
							priority
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
						/>
					</Link>
					{/* <nav className="hidden md:flex space-x-8">
						<Link href="#" className="text-white text-sm font-light hover:text-blue-400 transition-colors duration-300 border-b border-transparent hover:border-blue-400 px-2 py-1 font-sans">Locations</Link>
						<Link href="#" className="text-white text-sm font-light hover:text-blue-400 transition-colors duration-300 border-b border-transparent hover:border-blue-400 px-2 py-1 font-sans">Solutions</Link>
						<Link href="#" className="text-white text-sm font-light hover:text-blue-400 transition-colors duration-300 border-b border-transparent hover:border-blue-400 px-2 py-1 font-sans">Enterprise</Link>
						<Link href="#" className="text-white text-sm font-light hover:text-blue-400 transition-colors duration-300 border-b border-transparent hover:border-blue-400 px-2 py-1 font-sans">Contact</Link>
					</nav> */}
					<Button className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/30 font-medium px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-opacity-50">
						<span className="mr-2 mt-0.5">Sign Up</span>
						<ArrowRight className="inline-block w-4 h-4" />
					</Button>
				</div>
			</header>

			<main className="flex-grow">
				{/* Hero Section */}
				<section className="relative h-screen flex items-center justify-center overflow-hidden">
					<video
						autoPlay
						loop
						muted
						playsInline
						className="absolute w-full h-full object-cover"
					>
						<source src={[
							"/hero-video-1.mp4",
							"/hero-video-2.mp4",
							"/hero-video-3.mp4",
						][Math.floor(Math.random() * 3)]} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<div className="absolute inset-0 bg-black bg-opacity-50"></div>
					<div className="relative container mx-auto px-4 text-center text-white z-10">
						<h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
							<span className="block font-sans text-6xl md:text-9xl font-thin pb-2">your new space.</span>
							<TypeAnimation
								sequence={[
									'anytime.',
									2000,
									'anywhere.',
									2000,
									'now.',
									2000
								]}
								wrapper="span"
								speed={30}
								className="text-blue-300 font-normal"
								repeat={Infinity}
								cursor={true}
								style={{ minWidth: '150px', display: 'inline-block' }}
							/>
						</h1>
						<p className="text-xl mb-8 max-w-2xl mx-auto font-light opacity-70">Come find your new vibrant workspace. Whether you're a digital nomad, startup, or company - we've got your perfect spot! (now.)</p>
						<div className="max-w-md mx-auto">
							<form className="flex flex-col sm:flex-row gap-2">
								<Input
									type="email"
									placeholder="enter your email"
									className="bg-gray-700 text-white placeholder:text-white placeholder:font-thin border-0 hover:bg-gray-600 transition-colors duration-300"
								/>
								<Button type="submit" className="bg-blue-400 text-white hover:bg-blue-600 font-thin font-mono">
									Join Waitlist
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</form>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 py-16">
					<div className="container mx-auto px-4">
						<div className="text-6xl text-left mb-2 text-white font-sans font-extralight">What do our spaces offer?</div>
						<div className="text-xl text-left mb-20 text-white/70 font-sans font-extralight">We've got you covered.</div>
						<div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
							<div className="md:w-1/3">
								<Image
									src="/feature.jpg"
									alt="A woman in a coworking space"
									width={600}
									height={800}
									className="w-full h-full object-cover rounded-xl opacity-50"
								/>
							</div>
							<div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
								<FeatureCard
									icon={<Coffee className="h-16 w-16 text-blue-400 stroke-1" />}
									title="Premium Amenities"
									description="Fully-stocked kitchens and ergonomic furniture."
								/>
								<FeatureCard
									icon={<Wifi className="h-16 w-16 text-blue-400 stroke-1" />}
									title="High-Speed Internet"
									description="Lightning-fast, reliable WiFi everywhere."
								/>
								<FeatureCard
									icon={<Users className="h-16 w-16 text-blue-400 stroke-1" />}
									title="Vibrant Community"
									description="Network with diverse professionals."
								/>
								<FeatureCard
									icon={<Calendar className="h-16 w-16 text-blue-400 stroke-1" />}
									title="Flexible Booking"
									description="Book spaces hourly, daily, or monthly."
								/>
								<FeatureCard
									icon={<Shield className="h-16 w-16 text-blue-400 stroke-1" />}
									title="24/7 Security"
									description="Safe and secure workspaces always."
								/>
								<FeatureCard
									icon={<Zap className="h-16 w-16 text-blue-400 stroke-1" />}
									title="Power Backup"
									description="Uninterrupted power supply guaranteed."
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Instant Meeting Section */}
				<section className="py-20 bg-gradient-to-b from-zinc-900 to-black text-white min-h-screen flex items-center">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row items-stretch justify-between">
							<div className="md:w-1/2 mb-12 md:mb-0 flex flex-col justify-center">
								<h2 className="text-4xl md:text-6xl mb-8 font-sans font-extralight">Ready for an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Instant</span> Meeting?</h2>
								<p className="text-xl mb-12 max-w-md font-mono font-light">Walk in, sit down, and start collaborating. No setup required.</p>
								
							</div>

							<div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>

							<div className="md:w-1/2 space-y-16 md:pl-8">
								<div>
									<h3 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2 font-light" style={{ lineHeight: '1.2' }}>Seamless</h3>
									<p className="text-xl text-gray-300 font-sans font-extralight">Book a room and start your meeting within minutes.</p>
								</div>
								<div>
									<h3 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2	font-light" style={{ lineHeight: '1.2' }}> {/* Adjusted line height */}
										High-Tech
									</h3>
									<p className="text-xl text-gray-300 font-sans font-light">State-of-the-art video conferencing at your fingertips.</p>
								</div>
								<div>
									<h3 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2 font-light" style={{ lineHeight: '1.2' }}>Energized</h3>
									<p className="text-xl text-gray-300 font-sans font-light">Complimentary coffee and snacks to fuel your ideas.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Call to Action Section
				<section className="bg-yellow-500 py-20">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Transform Your Workday?</h2>
						<p className="text-xl mb-8 text-gray-700">Join thousands of professionals who have already discovered the CoWorkSpace difference.</p>
						<Button className="bg-gray-800 text-white hover:bg-gray-700">
							Book a Tour
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</div>
				</section>*/}
			</main>

			{/* Footer */}
			<footer className="bg-gray-800 text-white py-12 bg-gradient-to-b from-black to-transparent backdrop-blur-sm">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
						<div>
							<h3 className="text-lg font-light mb-4 font-sans">Company</h3>
							<ul className="space-y-2 font-extralight font-sans">
								<li><Link href="#" className="hover:text-blue-300">About</Link></li>
								<li><Link href="#" className="hover:text-blue-300">Careers</Link></li>
								{/* <li><Link href="#" className="hover:text-blue-300">Press</Link></li> */}
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-light mb-4 font-sans">Locations</h3>
							<ul className="space-y-2 font-extralight font-sans">
								<li><Link href="#" className="hover:text-blue-300">Boston</Link></li>
								{/* <li><Link href="#" className="hover:text-blue-300">San Francisco</Link></li>
								<li><Link href="#" className="hover:text-blue-300">London</Link></li> */}
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-light mb-4 font-sans">Solutions</h3>
							<ul className="space-y-2 font-extralight font-sans">
								{/* <li><Link href="#" className="hover:text-blue-300">Individuals</Link></li> */}
								<li><Link href="#" className="hover:text-blue-300">Startups</Link></li>
								<li><Link href="#" className="hover:text-blue-300">Enterprise</Link></li>
							</ul>
						</div>
						{/* <div>
							<h3 className="text-lg font-light mb-4">Resources</h3>
							<ul className="space-y-2 font-extralight">
								<li><Link href="#" className="hover:text-blue-300">Blog</Link></li>
								<li><Link href="#" className="hover:text-blue-300">Events</Link></li>
								<li><Link href="#" className="hover:text-blue-300">Partners</Link></li>
							</ul>
						</div> */}
					</div>
					<div className="border-t border-gray-700 mt-8 pt-8 text-center font-extralight font-sans">
						<p>&copy; 2024 NowSpace. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
	return (
		<div className="p-10 text-center flex items-center justify-center border border-white/10 rounded-xl relative">
			<div className="absolute left-4 bottom-3 opacity-10 text-6xl">
				{icon}
			</div>
			<div className="flex flex-col items-center justify-center z-10">
				<div className="text-2xl mb-6 text-white font-sans font-extralight">{title}</div>
				<div className="text-gray-300 text-lg font-sans font-extralight">{description}</div>
			</div>
		</div>
	)
}

function LocationCard({ image, name, address }) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<Image src={image} alt={name} width={600} height={400} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="text-xl font-semibold mb-2">{name}</h3>
				<p className="text-gray-600">{address}</p>
			</div>
		</div>
	)
}