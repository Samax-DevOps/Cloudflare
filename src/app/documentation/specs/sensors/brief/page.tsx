import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SensorsBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sensors - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Sensor Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Key Specification</TableHead>
                <TableHead>Application</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>PS-100</TableCell>
                <TableCell>Position Sensor</TableCell>
                <TableCell>Accuracy: ±0.5mm</TableCell>
                <TableCell>Precise floor leveling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>LD-200</TableCell>
                <TableCell>Load Detection Sensor</TableCell>
                <TableCell>Capacity: Up to 2000kg</TableCell>
                <TableCell>Weight-based control systems</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PD-300</TableCell>
                <TableCell>Passenger Detection Sensor</TableCell>
                <TableCell>Detection Range: Up to 5m</TableCell>
                <TableCell>Door operation safety</TableCell>
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
            <li>High accuracy and reliability</li>
            <li>Fast response times</li>
            <li>Easy integration with elevator control systems</li>
            <li>Low maintenance requirements</li>
            <li>Compliance with elevator industry standards</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/sensors/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

