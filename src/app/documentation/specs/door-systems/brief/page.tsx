import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DoorSystemsBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Door Systems - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Door System Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Opening Width</TableHead>
                <TableHead>Opening Speed</TableHead>
                <TableHead>Door Panels</TableHead>
                <TableHead>Safety Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>DS-100</TableCell>
                <TableCell>700 - 1000 mm</TableCell>
                <TableCell>0.3 - 0.5 m/s</TableCell>
                <TableCell>2 panels, center opening</TableCell>
                <TableCell>Light curtain, obstruction detection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DS-200</TableCell>
                <TableCell>800 - 1200 mm</TableCell>
                <TableCell>0.5 - 0.8 m/s</TableCell>
                <TableCell>2 or 4 panels, center or side opening</TableCell>
                <TableCell>3D light curtain, anti-pinch, overload protection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DS-300</TableCell>
                <TableCell>1000 - 1500 mm</TableCell>
                <TableCell>0.4 - 0.6 m/s</TableCell>
                <TableCell>2, 4, or 6 panels, various configurations</TableCell>
                <TableCell>Advanced safety system with multiple sensors</TableCell>
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
            <li>Microprocessor-based control systems</li>
            <li>Energy-efficient motor designs</li>
            <li>Low noise operation</li>
            <li>Stainless steel construction</li>
            <li>Compliance with EN 81-20 and EN 81-50 standards</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/door-systems/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

