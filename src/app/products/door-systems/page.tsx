import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, DoorOpen, Zap, Volume2, Lock } from 'lucide-react'

export default function DoorSystems() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Door Systems</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Smooth and Secure Elevator Entrances</h2>
          <p className="mb-4">
            Our door systems are engineered for smooth operation, durability, and passenger safety. 
            Designed to withstand frequent use, they provide reliable and efficient access to elevator cabins.
          </p>
          <ul className="space-y-2 mb-6">
            {['Quiet operation', 'Energy-efficient motors', 'Advanced safety sensors', 'Customizable designs'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex">
<<<<<<< HEAD
<<<<<<< HEAD
          <Button asChild >
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="ml-4">
=======
          <Button asChild className="ml-4">
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild>
>>>>>>> ca8622131f8291214a5b5a39a2e2f9f223a9ea20
=======
          <Button asChild >
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="ml-4">
>>>>>>> 7755d285040455db79155e38593b28bd1b146b35
            <Link href="/documentation/specs/door-systems/detailed">View Specifications</Link>
          </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/images/door.png" 
            width={600} 
            height={400} 
            alt="Samax Engineering Door Systems" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Door System Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>DS-100</CardTitle>
            <CardDescription>Standard Door System</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Opening Width: 700-1100 mm</li>
              <li>Door Panels: 2 or 4 panels</li>
              <li>Opening Speed: Up to 0.8 m/s</li>
              <li>Suitable for: Residential buildings</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DS-200</CardTitle>
            <CardDescription>Heavy-Duty Door System</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Opening Width: 800-1400 mm</li>
              <li>Door Panels: 2, 4, or 6 panels</li>
              <li>Opening Speed: Up to 1.2 m/s</li>
              <li>Suitable for: Commercial buildings</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DS-300</CardTitle>
            <CardDescription>High-Speed Door System</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Opening Width: 900-2000 mm</li>
              <li>Door Panels: 2 or 4 panels</li>
              <li>Opening Speed: Up to 1.6 m/s</li>
              <li>Suitable for: High-rise buildings</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Lock className="w-10 h-10 text-blue-500" />
            <CardTitle>Enhanced Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our door systems are equipped with advanced sensors to prevent closure when obstructions are detected, ensuring passenger safety.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Innovative motor design and intelligent control systems optimize energy consumption without compromising performance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Volume2 className="w-10 h-10 text-blue-500" />
            <CardTitle>Quiet Operation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced engineering ensures smooth and quiet door operation, enhancing the overall elevator experience for passengers.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Elevate Your Entrance Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering door systems combine cutting-edge technology with elegant design. Our doors not only enhance the safety and efficiency of your elevators but also contribute to the overall aesthetic of your building.
          </p>
          <Button asChild>
            <Link href="/contact">Discuss Your Door System Needs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

