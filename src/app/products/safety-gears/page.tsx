import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Shield, Zap, Clock } from 'lucide-react'

export default function SafetyGears() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Safety Gears</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ensuring Passenger Safety in All Situations</h2>
          <p className="mb-4">
            Our safety gears are designed to provide maximum protection for elevator passengers. 
            These critical components activate in emergency situations, preventing uncontrolled descent and ensuring passenger safety.
          </p>
          <ul className="space-y-2 mb-6">
            {['Instant activation', 'Robust construction', 'Compliant with EN81 standards', 'Suitable for various elevator speeds'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <div className='flex'>
          <Button asChild>
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="ml-4">
            <Link href="/documentation/specs/safety-gears/detailed">View Specifications</Link>
          </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/images/Safety.png" 
            width={600} 
            height={400} 
            alt="Samax Engineering Safety Gears" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Safety Gear Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>SG-100</CardTitle>
            <CardDescription>Progressive Safety Gear</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Rated Speed: Up to 2.5 m/s</li>
              <li>Car Mass Range: 700-2500 kg</li>
              <li>Activation: Gradual deceleration</li>
              <li>Suitable for: Passenger elevators</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SG-200</CardTitle>
            <CardDescription>Instantaneous Safety Gear</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Rated Speed: Up to 1 m/s</li>
              <li>Car Mass Range: 500-3000 kg</li>
              <li>Activation: Immediate stopping</li>
              <li>Suitable for: Freight elevators</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SG-300</CardTitle>
            <CardDescription>High-Speed Safety Gear</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Rated Speed: Up to 5 m/s</li>
              <li>Car Mass Range: 1000-4000 kg</li>
              <li>Activation: Adaptive deceleration</li>
              <li>Suitable for: High-rise buildings</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-blue-500" />
            <CardTitle>Uncompromising Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our safety gears are designed to activate instantly and stop the elevator car smoothly, ensuring passenger safety in emergency situations.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Rapid Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced triggering mechanisms ensure immediate activation when overspeed is detected, minimizing potential risks.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Clock className="w-10 h-10 text-blue-500" />
            <CardTitle>Durable and Reliable</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Built with high-quality materials and rigorous testing, our safety gears provide long-lasting performance and peace of mind.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Safety is Our Top Priority</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Samax Engineering, we understand that safety is paramount in elevator systems. Our safety gears are rigorously tested and certified to meet international safety standards, providing peace of mind for building owners, maintenance teams, and passengers.
          </p>
          <Button asChild>
            <Link href="/contact">Discuss Your Safety Requirements</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

