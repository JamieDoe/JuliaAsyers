import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Buttons() {
  return (
    <>
      <Button variant="default">Click me!</Button>
      <Button variant="destructive">Click me!</Button>
      <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
        Icon right
      </Button>
      <Button variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left">
        Icon left
      </Button>
      <Button variant="ghost">Click me!</Button>
      <Button variant="gooeyLeft">Click me!</Button>
      <Button variant="gooeyRight">Click me!</Button>
      <Button variant="link">Click me!</Button>
      <Button variant="linkHover1">Click me!</Button>
      <Button variant="linkHover2">Click me!</Button>
      <Button variant="outline">Click me!</Button>
      <Button variant="ringHover">Click me!</Button>
      <Button variant="secondary">Click me!</Button>
    </>
  );
}
