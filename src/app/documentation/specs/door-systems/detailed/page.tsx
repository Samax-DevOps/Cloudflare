import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DoorSystemsDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Door Systems - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>DS-100 Standard Door System</CardTitle>
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
                <TableCell>Opening Width</TableCell>
                <TableCell>700 - 1000 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Door Panels</TableCell>
                <TableCell>2 panels, center opening</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Opening Speed</TableCell>
                <TableCell>0.3 - 0.5 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Closing Speed</TableCell>
                <TableCell>0.2 - 0.3 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>DC permanent magnet</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Supply</TableCell>
                <TableCell>220V AC, 50/60 Hz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Control System</TableCell>
                <TableCell>Microprocessor-based</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Safety Features</TableCell>
                <TableCell>Light curtain, obstruction detection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>Stainless steel (304 grade)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 55 dBA</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>DS-200 High-Speed Door System</CardTitle>
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
                <TableCell>Opening Width</TableCell>
                <TableCell>800 - 1200 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Door Panels</TableCell>
                <TableCell>2 or 4 panels, center opening or side opening</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Opening Speed</TableCell>
                <TableCell>0.5 - 0.8 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Closing Speed</TableCell>
                <TableCell>0.3 - 0.5 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Motor Type</TableCell>
                <TableCell>Brushless DC motor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Supply</TableCell>
                <TableCell>220V AC, 50/60 Hz</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Control System</TableCell>
                <TableCell>Advanced microprocessor with self-diagnosis</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Safety Features</TableCell>
             </TableRow>
              <TableRow>
                <TableCell>Safety Features</TableCell>
                <TableCell>3D light curtain, anti-pinch, overload protection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>Stainless steel (316 grade)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Noise Level</TableCell>
                <TableCell>&lt; 50 dBA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Energy Efficiency</TableCell>
                <TableCell>Low power consumption, sleep mode</TableCell>
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
          <Link href="/documentation/specs/door-systems/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

