import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },

  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },

  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "http://127.0.0.1:8000/admin/",
  },
];

const iconStyle = {
  color: "#eee",
  "& .MuiSvgIcon-root": { color: "#eee" },
  "&:hover": { color: "red" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <div>
      <List>
        {icons?.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.url.includes("http") && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <ListItemButton sx={iconStyle}>
                  {/* harici bir link(external link) vermek icin mesela admin panele giderken olan linkin üstüne yazsin istemiyorum
              baska bir adrese gidecek bu nedenle bu sekilde bir ayrim yaptik. yani item in urlsinde http varsa 
              to yazip harici linke git. asagida !item.url yazarak http yoksa dahili linke git demek istedik. */}
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </a>
            )}

            {!item.url.includes("http") && (
              <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
