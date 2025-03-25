import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ElevatorRopesDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Ropes - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SR-8 Standard Elevator Rope</CardTitle>
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
                <TableCell>Diameter</TableCell>
                <TableCell>8mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Construction</TableCell>
                <TableCell>8x19 Seale</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>High-carbon steel wire</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Core</TableCell>
                <TableCell>Fiber core (FC)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Breaking Strength</TableCell>
                <TableCell>41.7 kN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>0.23 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum Breaking Load</TableCell>
                <TableCell>38.5 kN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Elongation at Breaking Load</TableCell>
                <TableCell>1.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surface Treatment</TableCell>
                <TableCell>Galvanized</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lubrication</TableCell>
                <TableCell>Factory lubricated</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SR-10 Heavy-Duty Elevator Rope</CardTitle>
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
                <TableCell>Diameter</TableCell>
                <TableCell>10mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Construction</TableCell>
                <TableCell>8x19 Warrington</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Material</TableCell>
                <TableCell>High-carbon steel wire</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Core</TableCell>
                <TableCell>Independent wire rope core (IWRC)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Breaking Strength</TableCell>
                <TableCell>65.2 kN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>0.36 kg/m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Minimum Breaking Load</TableCell>
                <TableCell>60.3 kN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Elongation at Breaking Load</TableCell>
                <TableCell>1.7%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Surface Treatment</TableCell>
                <TableCell>Bright (uncoated)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lubrication</TableCell>
                <TableCell>Factory lubricated with special elevator rope grease</TableCell>
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
          <Link href="/documentation/specs/elevator-ropes/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

