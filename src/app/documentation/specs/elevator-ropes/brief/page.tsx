import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ElevatorRopesBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Ropes - Brief Specifications</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Elevator Rope Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Diameter</TableHead>
                <TableHead>Construction</TableHead>
                <TableHead>Breaking Strength</TableHead>
                <TableHead>Weight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SR-8</TableCell>
                <TableCell>8mm</TableCell>
                <TableCell>8x19 Seale</TableCell>
                <TableCell>41.7 kN</TableCell>
                <TableCell>0.23 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SR-10</TableCell>
                <TableCell>10mm</TableCell>
                <TableCell>8x19 Warrington</TableCell>
                <TableCell>65.2 kN</TableCell>
                <TableCell>0.36 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SR-13</TableCell>
                <TableCell>13mm</TableCell>
                <TableCell>8x25 Filler Wire</TableCell>
                <TableCell>110.3 kN</TableCell>
                <TableCell>0.61 kg/m</TableCell>
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
            <li>High-carbon steel wire construction</li>
            <li>Factory lubricated for smooth operation</li>
            <li>Designed for high fatigue resistance</li>
            <li>Compliant with EN 12385-5 and ISO 4344 standards</li>
            <li>Suitable for traction elevators and machine room-less (MRL) systems</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/elevator-ropes/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

