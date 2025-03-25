import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Wind, Zap, Volume2 } from 'lucide-react'

export default function Blowers() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blowers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Efficient Air Circulation for Elevator Cabins</h2>
          <p className="mb-4">
            Our blowers are designed to provide optimal air circulation and ventilation in elevator cabins. 
            They ensure passenger comfort and maintain a fresh environment, even during peak usage times.
          </p>
          <ul className="space-y-2 mb-6">
            {['Energy-efficient operation', 'Low noise levels', 'Compact design', 'Easy installation and maintenance'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex ">
          <Button asChild>
            <Link href="/contact">
               Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="ml-4">
            <Link href="/documentation/specs/blowers/detailed">
              View Specifications
            </Link>
          </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/images/clear.png" 
            width={600} 
            height={400} 
            alt="Samax Engineering Elevator Blowers" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Blower Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>BL-100</CardTitle>
            <CardDescription>Standard Blower</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Air Flow: Up to 100 CFM</li>
              <li>Noise Level: &lt;40 dB</li>
              <li>Power Consumption: 15W</li>
              <li>Suitable for: Small to medium cabins</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>BL-200</CardTitle>
            <CardDescription>High-Capacity Blower</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Air Flow: Up to 200 CFM</li>
              <li>Noise Level: &lt;45 dB</li>
              <li>Power Consumption: 25W</li>
              <li>Suitable for: Large cabins</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>BL-300</CardTitle>
            <CardDescription>Variable Speed Blower</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Air Flow: 50-250 CFM (adjustable)</li>
              <li>Noise Level: 35-50 dB</li>
              <li>Power Consumption: 10-30W</li>
              <li>Suitable for: Smart elevator systems</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Wind className="w-10 h-10 text-blue-500" />
            <CardTitle>Optimal Air Circulation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our blowers provide efficient air movement, ensuring a comfortable and fresh environment inside the elevator cabin.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced motor design and smart controls optimize power consumption without compromising performance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Volume2 className="w-10 h-10 text-blue-500" />
            <CardTitle>Quiet Operation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Engineered for low noise levels, our blowers maintain a peaceful elevator environment for passengers.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Breathe Easy with Samax Blowers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering blowers are designed to enhance passenger comfort and maintain air quality in elevator cabins. Our energy-efficient and quiet blowers ensure a pleasant ride experience while contributing to the overall efficiency of your elevator system.
          </p>
          <Button asChild>
            <Link href="/contact">Discuss Your Ventilation Needs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

