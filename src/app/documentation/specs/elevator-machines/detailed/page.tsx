import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ElevatorMachinesDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Machines - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SM-100 Gearless Traction Machine</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Specification</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Rated Capacity</TableCell>
                <TableCell>630-1000 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Speed</TableCell>
                <TableCell>Up to 1.75 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>Permanent Magnet Synchronous</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Power</TableCell>
                <TableCell>5.5 - 11 kW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Torque</TableCell>
                <TableCell>850 - 1700 Nm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Efficiency</TableCell>
                <TableCell>95%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brake Type</TableCell>
                <TableCell>Dual circuit disc brake</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Encoder</TableCell>
                <TableCell>2048 PPR incremental</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sheave Diameter</TableCell>
                <TableCell>320 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 60 dBA</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SM-200 High-Speed Traction Machine</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Specification</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Rated Capacity</TableCell>
                <TableCell>1000-1600 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Speed</TableCell>
                <TableCell>Up to 3.0 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>Permanent Magnet Synchronous</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Power</TableCell>
                <TableCell>15 - 22 kW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rated Torque</TableCell>
                <TableCell>2000 - 3000 Nm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Efficiency</TableCell>
                <TableCell>97%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brake Type</TableCell>
                <TableCell>Dual circuit disc brake with monitoring</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Encoder</TableCell>
                <TableCell>4096 PPR absolute</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sheave Diameter</TableCell>
                <TableCell>400 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 65 dBA</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/elevator-machines/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

