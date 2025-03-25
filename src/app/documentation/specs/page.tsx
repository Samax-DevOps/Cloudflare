import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: 'Guide Rails', slug: 'guide-rails' },
  { name: 'Elevator Machines', slug: 'elevator-machines' },
  { name: 'Control Chips', slug: 'control-chips' },
  { name: 'Elevator Ropes', slug: 'elevator-ropes' },
  { name: 'Safety Gears', slug: 'safety-gears' },
  { name: 'Door Systems', slug: 'door-systems' },
  { name: 'Blowers', slug: 'blowers' },
  { name: 'Sensors', slug: 'sensors' },
]

export default function TechnicalSpecifications() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Technical Specifications</h1>
      
      <p className="text-xl text-center mb-12">
        Access detailed and brief technical specifications for all Samax Engineering products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.slug}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Technical specifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link href={`/documentation/specs/${product.slug}/detailed`}>Detailed Specs</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href={`/documentation/specs/${product.slug}/brief`}>Brief Specs</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

