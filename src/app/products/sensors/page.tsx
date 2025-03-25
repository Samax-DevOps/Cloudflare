import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Radio, Eye, Zap, Shield } from 'lucide-react'

export default function Sensors() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sensors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Precise Detection for Optimal Elevator Operation</h2>
          <p className="mb-4">
            Our sensors are at the heart of smart elevator systems, providing accurate data for smooth operation,
            safety, and energy efficiency. From position detection to load measurement, our sensors ensure
            precise control and monitoring of elevator functions.
          </p>
          <ul className="space-y-2 mb-6">
            {['High accuracy', 'Robust and durable', 'Easy integration', 'Wide range of applications'].map((feature, index) => (
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
              <Link href="/documentation/specs/sensors/detailed">View Specifications</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/clear.png"
            width={600}
            height={400}
            alt="Samax Engineering Elevator Sensors"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Sensor Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>PS-100</CardTitle>
            <CardDescription>Position Sensor</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Accuracy: ±1mm</li>
              <li>Range: Up to 300m</li>
              <li>Output: Digital (CAN, RS-485)</li>
              <li>Application: Precise car positioning</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>LS-200</CardTitle>
            <CardDescription>Load Sensor</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Capacity: Up to 5000kg</li>
              <li>Accuracy: ±0.1% F.S.</li>
              <li>Output: Analog (4-20mA)</li>
              <li>Application: Overload detection, load balancing</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DS-300</CardTitle>
            <CardDescription>Door Sensor</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Detection Range: Up to 2m</li>
              <li>Response Time: &lt;10ms</li>
              <li>Output: Relay, PNP</li>
              <li>Application: Door obstruction detection</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Eye className="w-10 h-10 text-blue-500" />
            <CardTitle>High Precision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our sensors provide exceptional accuracy and reliability, ensuring precise elevator control and optimal performance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Fast Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p>With rapid response times, our sensors enable quick decision-making and smooth elevator operation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-blue-500" />
            <CardTitle>Enhanced Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our sensors contribute to improved elevator safety by providing accurate data for monitoring and control systems.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enhance Your Elevator's Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering sensors are designed to provide accurate, real-time data for intelligent elevator control. Our sensors not only improve the performance and safety of your elevators but also contribute to energy efficiency and predictive maintenance capabilities.
          </p>
          <Button asChild>
            <Link href="/contact">Explore Sensor Solutions</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

