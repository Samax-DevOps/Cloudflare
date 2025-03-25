import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ControlChipsDetailedSpecs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Control Chips - Detailed Specifications</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SC-1000 Standard Control Chip</CardTitle>
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
                <TableCell>Processor</TableCell>
                <TableCell>Dual-core 1.2 GHz ARM Cortex-A53</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Memory</TableCell>
                <TableCell>2 GB DDR4 RAM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Storage</TableCell>
                <TableCell>16 GB eMMC Flash</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Connectivity</TableCell>
                <TableCell>Ethernet (10/100 Mbps), CAN bus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>I/O Ports</TableCell>
                <TableCell>16 Digital Inputs, 8 Digital Outputs, 4 Analog Inputs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Real-time Clock</TableCell>
                <TableCell>Yes, with battery backup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Temperature</TableCell>
                <TableCell>-20°C to 70°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Consumption</TableCell>
                <TableCell>&lt; 5W</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell>100mm x 75mm x 20mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Certifications</TableCell>
                <TableCell>CE, UL, FCC</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>SC-2000 Advanced Control Chip</CardTitle>
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
                <TableCell>Processor</TableCell>
                <TableCell>Quad-core 2.0 GHz ARM Cortex-A72</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Memory</TableCell>
                <TableCell>4 GB DDR4 RAM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Storage</TableCell>
                <TableCell>32 GB eMMC Flash</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Connectivity</TableCell>
                <TableCell>Ethernet (10/100/1000 Mbps), CAN bus, Wi-Fi (802.11ac)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>I/O Ports</TableCell>
                <TableCell>32 Digital Inputs, 16 Digital Outputs, 8 Analog Inputs, 4 Analog Outputs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Real-time Clock</TableCell>
                <TableCell>Yes, with battery backup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Operating Temperature</TableCell>
                <TableCell>-40°C to 85°C</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Consumption</TableCell>
                <TableCell>&lt; 8W</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dimensions</TableCell>
                <TableCell>120mm x 90mm x 25mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Certifications</TableCell>
                <TableCell>CE, UL, FCC, ISO 9001</TableCell>
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
          <Link href="/documentation/specs/control-chips/brief">View Brief Specs</Link>
        </Button>
      </div>
    </div>
  )
}

