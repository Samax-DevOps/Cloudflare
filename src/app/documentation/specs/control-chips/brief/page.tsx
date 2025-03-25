import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ControlChipsBriefSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Control Chips - Brief Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Control Chip Specifications Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model</TableHead>
                <TableHead>Processor</TableHead>
                <TableHead>Memory</TableHead>
                <TableHead>Storage</TableHead>
                <TableHead>Connectivity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>SC-1000</TableCell>
                <TableCell>Dual-core 1.2 GHz</TableCell>
                <TableCell>2 GB RAM</TableCell>
                <TableCell>16 GB Flash</TableCell>
                <TableCell>Ethernet, CAN</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SC-2000</TableCell>
                <TableCell>Quad-core 2.0 GHz</TableCell>
                <TableCell>4 GB RAM</TableCell>
                <TableCell>32 GB Flash</TableCell>
                <TableCell>Ethernet, CAN, Wi-Fi</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SC-3000</TableCell>
                <TableCell>Octa-core 2.5 GHz</TableCell>
                <TableCell>8 GB RAM</TableCell>
                <TableCell>64 GB Flash</TableCell>
                <TableCell>Ethernet, CAN, Wi-Fi, 5G</TableCell>
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
            <li>Real-time clock with battery backup</li>
            <li>Wide operating temperature range</li>
            <li>Low power consumption</li>
            <li>Multiple I/O ports for versatile connectivity</li>
            <li>CE, UL, and FCC certified</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button asChild>
          <Link href="/documentation/specs">Back to Specifications</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/specs/control-chips/detailed">View Detailed Specs</Link>
        </Button>
      </div>
    </div>
  )
}

