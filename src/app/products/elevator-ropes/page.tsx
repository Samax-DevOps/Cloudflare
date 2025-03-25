import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, LinkIcon, Shield, BarChart } from 'lucide-react'

export default function ElevatorRopes() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Ropes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">High-Strength Ropes for Reliable Performance</h2>
          <p className="mb-4">
            Our elevator ropes are engineered to provide maximum strength, durability, and safety. 
            Designed to withstand heavy loads and frequent use, they ensure smooth and reliable elevator operation.
          </p>
          <ul className="space-y-2 mb-6">
            {['High tensile strength', 'Wear-resistant coating', 'Flexible and durable', 'Compliant with safety standards'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex">
          <Button asChild>
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="ml-4">
            <Link href="/documentation/specs/elevator-ropes/detailed">View Specifications</Link>
          </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/images/rope.png" 
            width={600} 
            height={400} 
            alt="Samax Engineering Elevator Ropes" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Elevator Rope Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>SR-8</CardTitle>
            <CardDescription>Standard Elevator Rope</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Diameter: 8mm</li>
              <li>Breaking Strength: 41.5 kN</li>
              <li>Weight: 0.25 kg/m</li>
              <li>Suitable for: Passenger Elevators</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>HR-10</CardTitle>
            <CardDescription>Heavy-Duty Elevator Rope</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Diameter: 10mm</li>
              <li>Breaking Strength: 64.7 kN</li>
              <li>Weight: 0.39 kg/m</li>
              <li>Suitable for: Freight Elevators</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AR-6</CardTitle>
            <CardDescription>Aramid Core Elevator Rope</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Diameter: 6mm</li>
              <li>Breaking Strength: 33.8 kN</li>
              <li>Weight: 0.12 kg/m</li>
              <li>Suitable for: High-Rise Buildings</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <LinkIcon className="w-10 h-10 text-blue-500" />
            <CardTitle>Superior Strength</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our ropes are engineered to withstand high loads, ensuring safe and reliable elevator operation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-blue-500" />
            <CardTitle>Enhanced Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Rigorous testing and quality control processes ensure the highest level of safety for all our elevator ropes.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BarChart className="w-10 h-10 text-blue-500" />
            <CardTitle>Long-lasting Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Designed for minimal stretch and excellent fatigue resistance, our ropes provide long-term reliable performance.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Samax Elevator Ropes?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering elevator ropes are designed to meet the highest industry standards for safety and performance. Our ropes undergo rigorous testing to ensure they can withstand the demands of modern elevator systems, providing peace of mind for building owners and passengers alike.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Our Sales Team</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

