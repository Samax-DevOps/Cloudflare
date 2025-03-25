import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BlowersBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blowers - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Blower Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Air Flow</TableHead>
                <TableHead>Noise Level</TableHead>
                <TableHead>Power Consumption</TableHead>
                <TableHead>Filter Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>BL-100</TableCell>
                <TableCell>Up to 100 CFM</TableCell>
                <TableCell>&lt; 45 dBA</TableCell>
                <TableCell>15W</TableCell>
                <TableCell>Washable, high-efficiency</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BL-200</TableCell>
                <TableCell>Up to 200 CFM</TableCell>
                <TableCell>&lt; 50 dBA</TableCell>
                <TableCell>25W</TableCell>
                <TableCell>HEPA filter</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BL-300</TableCell>
                <TableCell>Up to 150 CFM</TableCell>
                <TableCell>&lt; 40 dBA</TableCell>
                <TableCell>18W</TableCell>
                <TableCell>Activated carbon + HEPA</TableCell>
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
            <li>Brushless DC motors for energy efficiency</li>
            <li>24V DC operation</li>
            <li>Multiple mounting options</li>
            <li>Speed control functionality</li>
            <li>Compact and lightweight design</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/blowers/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

