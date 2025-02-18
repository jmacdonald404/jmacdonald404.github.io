import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@heroui/table";
import { Link } from "@heroui/link";

export const ArticleFooter = () => {
  return (
    <Table removeWrapper aria-label="aoeu static collection table">
      <TableHeader>
        <TableColumn>REFERENCES</TableColumn>
        <TableColumn>SEE ALSO</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell><small>1. Predicting Match Outcomes on SaltyBet using Bradley-Terry Paired-Comparison Models <Link size="sm" isExternal showAnchorIcon href="https://math.montana.edu/grad_students/writing-projects/2019/Love2019.pdf">pdf</Link><Link size="sm" isExternal showAnchorIcon href="https://github.com/odderaser/msu-writing-project">github</Link></small></TableCell>
          <TableCell><Link size="sm" isExternal showAnchorIcon href="https://saltybet.com">Saltybet</Link></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>empty</TableCell>
          <TableCell><Link isExternal showAnchorIcon href="https://www.elecbyte.com/mugendocs-11b1/mugen.html">MUGEN official site</Link></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>empty</TableCell>
          <TableCell><Link isExternal showAnchorIcon href="https://salty-boy.com/">SaltyBoy API</Link></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>empty</TableCell>
          <TableCell>empty</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};