import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GuideRailsDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Guide Rails - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>T127-1/B Standard Guide Rail</CardTitle>
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
                <TableCell>Weight</TableCell>
                <TableCell>16.7 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Width</TableCell>
                <TableCell>127 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Depth</TableCell>
                <TableCell>89 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Moment of Inertia (X-X axis)</TableCell>
                <TableCell>368.5 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Moment of Inertia (Y-Y axis)</TableCell>
                <TableCell>205.3 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section Modulus (X-X axis)</TableCell>
                <TableCell>58.1 cm³</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section Modulus (Y-Y axis)</TableCell>
                <TableCell>32.3 cm³</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>Cold drawn steel (S235JR)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surface Finish</TableCell>
                <TableCell>Machined (Ra ≤ 3.2 μm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Straightness</TableCell>
                <TableCell>≤ 1 mm over 5 m length</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>T127-2/B Heavy-Duty Guide Rail</CardTitle>
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
                <TableCell>Weight</TableCell>
                <TableCell>23.8 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Width</TableCell>
                <TableCell>127 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Depth</TableCell>
                <TableCell>114 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Moment of Inertia (X-X axis)</TableCell>
                <TableCell>758.7 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Moment of Inertia (Y-Y axis)</TableCell>
                <TableCell>291.5 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section Modulus (X-X axis)</TableCell>
                <TableCell>119.5 cm³</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section Modulus (Y-Y axis)</TableCell>
                <TableCell>45.9 cm³</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>Cold drawn steel (S235JR)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surface Finish</TableCell>
                <TableCell>Machined (Ra ≤ 3.2 μm)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Straightness</TableCell>
                <TableCell>≤ 1 mm over 5 m length</TableCell>
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
          <Link href="/documentation/specs/guide-rails/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

