import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BlowersDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blowers - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>BL-100 Standard Cabin Blower</CardTitle>
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
                <TableCell>Air Flow</TableCell>
                <TableCell>Up to 100 CFM (170 m³/h)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 45 dBA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Consumption</TableCell>
                <TableCell>15W</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Voltage</TableCell>
                <TableCell>24V DC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions (LxWxH)</TableCell>
                <TableCell>200 x 200 x 40 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>0.8 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>Brushless DC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Speed Control</TableCell>
                <TableCell>3-speed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Filter</TableCell>
                <TableCell>Washable, high-efficiency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mounting</TableCell>
                <TableCell>Ceiling or wall mount</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>BL-200 High-Capacity Blower</CardTitle>
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
                <TableCell>Air Flow</TableCell>
                <TableCell>Up to 200 CFM (340 m³/h)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 50 dBA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Consumption</TableCell>
                <TableCell>25W</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Voltage</TableCell>
                <TableCell>24V DC</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions (LxWxH)</TableCell>
                <TableCell>250 x 250 x 50 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>1.2 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>Brushless DC with ECM technology</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Speed Control</TableCell>
                <TableCell>Variable speed (PWM)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Filter</TableCell>
                <TableCell>HEPA filter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mounting</TableCell>
                <TableCell>Ceiling, wall, or under-seat mount</TableCell>
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
          <Link href="/documentation/specs/blowers/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

