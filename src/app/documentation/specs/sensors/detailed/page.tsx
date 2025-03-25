import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SensorsDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sensors - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>PS-100 Position Sensor</CardTitle>
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
                <TableCell>Accuracy</TableCell>
                <TableCell>±0.5mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Response Time</TableCell>
                <TableCell>&lt; 5ms</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Range</TableCell>
                <TableCell>Up to 300m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Resolution</TableCell>
                <TableCell>0.1mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Supply</TableCell>
                <TableCell>24V DC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Output Signal</TableCell>
                <TableCell>4-20mA, 0-10V, RS485</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Temperature</TableCell>
                <TableCell>-20°C to 70°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Protection Class</TableCell>
                <TableCell>IP67</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell>100 x 50 x 30 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Certification</TableCell>
                <TableCell>EN 81-20, EN 81-50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>LD-200 Load Detection Sensor</CardTitle>
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
                <TableCell>Capacity</TableCell>
                <TableCell>Up to 2000kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Accuracy</TableCell>
                <TableCell>±0.1% of full scale</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Overload Protection</TableCell>
                <TableCell>150% of rated capacity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Supply</TableCell>
                <TableCell>12-24V DC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Output Signal</TableCell>
                <TableCell>4-20mA, 0-10V, RS485</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Temperature</TableCell>
                <TableCell>-10°C to 50°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Protection Class</TableCell>
                <TableCell>IP65</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell>150 x 100 x 40 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Certification</TableCell>
                <TableCell>EN 81-20, EN 81-50, OIML R60</TableCell>
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
          <Link href="/documentation/specs/sensors/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

