import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ElevatorMachinesBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Machines - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Elevator Machine Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Rated Capacity</TableHead>
                <TableHead>Rated Speed</TableHead>
                <TableHead>Rated Power</TableHead>
                <TableHead>Efficiency</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SM-100</TableCell>
                <TableCell>630-1000 kg</TableCell>
                <TableCell>Up to 1.75 m/s</TableCell>
                <TableCell>5.5 - 11 kW</TableCell>
                <TableCell>95%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SM-200</TableCell>
                <TableCell>1000-1600 kg</TableCell>
                <TableCell>Up to 3.0 m/s</TableCell>
                <TableCell>15 - 22 kW</TableCell>
                <TableCell>97%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SM-300</TableCell>
                <TableCell>1600-2500 kg</TableCell>
                <TableCell>Up to 2.5 m/s</TableCell>
                <TableCell>22 - 30 kW</TableCell>
                <TableCell>96%</TableCell>
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
            <li>Permanent Magnet Synchronous Motor</li>
            <li>Dual circuit disc brake system</li>
            <li>High-resolution encoder for precise positioning</li>
            <li>Low noise operation (&lt; 65 dBA)</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/elevator-machines/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

