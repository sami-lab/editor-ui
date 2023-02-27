import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PushPinIcon from "@mui/icons-material/PushPin";
const SidebarMenu = ({ items, activeItem, onItemSelect, pin = false }) => {
  const SidebarMenuItem = ({ item, activeItem, onItemSelect, level = 1 }) => {
    const theme = useTheme();
    const hasSubMenu = item.subMenu && item.subMenu.length > 0;
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

    const handleItemClick = () => {
      onItemSelect(item);
    };

    const handleSubMenuClick = () => {
      setIsSubMenuOpen(!isSubMenuOpen);
    };

    const subMenuMargin = `${level * 8 + 8}px`;

    return (
      <>
        <ListItemButton
          sx={{
            pl: 0,
            color: theme.palette.primary.text,
            "&.Mui-selected": {
              background: "transparent",
              color: theme.palette.primary.main,
            },
            "&:hover": {
              background: "transparent",
            },
          }}
          onClick={hasSubMenu ? handleSubMenuClick : handleItemClick}
          selected={activeItem?.id === item?.id}
        >
          <ListItemIcon
            sx={{
              minWidth: "40px",
              visibility: hasSubMenu ? "visible" : "hidden",
            }}
          >
            {isSubMenuOpen ? (
              <ArrowDropDownIcon sx={{ fill: "inherit" }} />
            ) : (
              <ArrowRightIcon sx={{ fill: "inherit" }} />
            )}
          </ListItemIcon>

          <ListItemText
            primary={item.label}
            sx={{ color: "inherit", fontSize: "15px" }}
          />

          {pin && <PushPinIcon sx={{ ml: "10px" }} />}
        </ListItemButton>
        {hasSubMenu && (
          <>
            <Collapse in={isSubMenuOpen} timeout='auto' unmountOnExit>
              <List
                component='div'
                disablePadding
                sx={{ marginLeft: subMenuMargin }}
              >
                {item.subMenu.map((subMenuItem) => (
                  <SidebarMenuItem
                    key={subMenuItem.id}
                    item={subMenuItem}
                    activeItem={activeItem}
                    onItemSelect={onItemSelect}
                    level={level + 1}
                  />
                ))}
              </List>
            </Collapse>
          </>
        )}
      </>
    );
  };

  return (
    <List component='nav' aria-labelledby='nested-list-subheader'>
      {items.map((item) => (
        <SidebarMenuItem
          key={item.id}
          item={item}
          activeItem={activeItem}
          onItemSelect={onItemSelect}
        />
      ))}
    </List>
  );
};

export default SidebarMenu;
