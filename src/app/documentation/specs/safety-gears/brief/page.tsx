import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SafetyGearsBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Safety Gears - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Safety Gear Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Rated Load</TableHead>
                <TableHead>Tripping Speed</TableHead>
                <TableHead>Operation</TableHead>
                <TableHead>Certification</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SG-1000</TableCell>
                <TableCell>Up to 1000 kg</TableCell>
                <TableCell>0.6 - 1.5 m/s</TableCell>
                <TableCell>Bi-directional</TableCell>
                <TableCell>EN 81-20, EN 81-50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SG-2000</TableCell>
                <TableCell>Up to 2000 kg</TableCell>
                <TableCell>1.0 - 2.5 m/s</TableCell>
                <TableCell>Bi-directional</TableCell>
                <TableCell>EN 81-20, EN 81-50, ASME A17.1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SG-3000</TableCell>
                <TableCell>Up to 3000 kg</TableCell>
                <TableCell>2.0 - 4.0 m/s</TableCell>
                <TableCell>Bi-directional</TableCell>
                <TableCell>EN 81-20, EN 81-50, ASME A17.1, GB 7588</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            <li>Progressive engagement for smooth stopping</li>
            <li>Suitable for various guide rail thicknesses (9-16 mm)</li>
            <li>High-strength alloy steel construction</li>
            <li>Low maintenance requirements</li>
            <li>Compliant with major international safety standards</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/safety-gears/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

