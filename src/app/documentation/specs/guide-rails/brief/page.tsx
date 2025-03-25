import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GuideRailsBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Guide Rails - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Guide Rail Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Width</TableHead>
                <TableHead>Depth</TableHead>
                <TableHead>Moment of Inertia (X-X)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>T127-1/B</TableCell>
                <TableCell>16.7 kg/m</TableCell>
                <TableCell>127 mm</TableCell>
                <TableCell>89 mm</TableCell>
                <TableCell>368.5 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>T127-2/B</TableCell>
                <TableCell>23.8 kg/m</TableCell>
                <TableCell>127 mm</TableCell>
                <TableCell>114 mm</TableCell>
                <TableCell>758.7 cm⁴</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>T89/B</TableCell>
                <TableCell>10.8 kg/m</TableCell>
                <TableCell>89 mm</TableCell>
                <TableCell>62 mm</TableCell>
                <TableCell>121.8 cm⁴</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Common Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6">
            <li>Material: Cold drawn steel (S235JR)</li>
            <li>Surface Finish: Machined (Ra ≤ 3.2 μm)</li>
            <li>Straightness: ≤ 1 mm over 5 m length</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/guide-rails/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

