export interface DropdownSection {
  title: string;
  items: string[];
  viewAllText: string;
}

export interface AISDropdownProps {
  isVisible: boolean;
  sections: DropdownSection[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
