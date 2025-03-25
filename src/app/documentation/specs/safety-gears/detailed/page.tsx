import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SafetyGearsDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Safety Gears - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SG-1000 Standard Safety Gear</CardTitle>
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
                <TableCell>Rated Load</TableCell>
                <TableCell>Up to 1000 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tripping Speed</TableCell>
                <TableCell>0.6 - 1.5 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Guide Rail Thickness</TableCell>
                <TableCell>9 - 16 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operation</TableCell>
                <TableCell>Bi-directional</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Braking Force</TableCell>
                <TableCell>2 - 4 times gravity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Engagement Method</TableCell>
                <TableCell>Progressive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>High-strength alloy steel</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions (LxWxH)</TableCell>
                <TableCell>350 x 80 x 200 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>15 kg</TableCell>
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
          <CardTitle>SG-2000 Heavy-Duty Safety Gear</CardTitle>
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
                <TableCell>Rated Load</TableCell>
                <TableCell>Up to 2000 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tripping Speed</TableCell>
                <TableCell>1.0 - 2.5 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Guide Rail Thickness</TableCell>
                <TableCell>9 - 16 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operation</TableCell>
                <TableCell>Bi-directional</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Braking Force</TableCell>
                <TableCell>2 - 4 times gravity</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Engagement Method</TableCell>
                <TableCell>Progressive</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>High-strength alloy steel with reinforced components</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions (LxWxH)</TableCell>
                <TableCell>400 x 100 x 250 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>25 kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Certification</TableCell>
                <TableCell>EN 81-20, EN 81-50, ASME A17.1</TableCell>
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
          <Link href="/documentation/specs/safety-gears/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

