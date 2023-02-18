import * as React from "react";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";
// import "../Navbar.css";
import {Link} from "react-router-dom"


export const MenNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ display: "flex" }}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{
          background: "none",
          padding: "5px",
          color: "black",
          fontSize: "12px",
          borderRadius: "0",
          boxShadow: "0",
          margin: "0px 40px 0px 40px",
          ":hover": {
            borderBottom: "1px solid black",
            background: "white",
            boxShadow: "0",
          },
        }}
      >
        Men
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "centre",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popoverBox">
          <div>
            <div className="catHead">Clothing</div>
            <div className="catBox">
              <Link to="" className="categories">
                Activewear
              </Link>
              <Link to="" className="categories">
                Blazers and sports coats
              </Link>
              <Link to="" className="categories">
                Coats and Jackets
              </Link>
              <Link to="" className="categories">
                Dress shirts
              </Link>
              <Link to="" className="categories">
                Jeans
              </Link>
              <Link to="" className="categories">
                Joggers and sweatpants
              </Link>
              <Link to="" className="categories">
                Lounges, Pajamas and Robes
              </Link>
              <Link to="" className="categories">
                Pants
              </Link>
              <Link to="" className="categories">
                Polo Shirts
              </Link>
              <Link to="" className="categories">
                Shirts
              </Link>
              <Link to="" className="categories">
                Socks
              </Link>
              <Link to="" className="categories">
                Suits & Separates
              </Link>
              <Link to="" className="categories">
                Sweaters
              </Link>
              <Link to="" className="categories">
                Sweatshirts & hoodies
              </Link>
              <Link to="" className="categories">
                T-shirts
              </Link>
              <Link to="" className="categories">
                Underwares & Boxers
              </Link>
            </div>
          </div>

          <div>
            <div className="catHead">Shoes</div>
            <div className="catBox">
              <Link to="" className="categories">
                Boots
              </Link>
              <Link to="" className="categories">
                Comfort
              </Link>
              <Link to="" className="categories">
                Dress shoes
              </Link>
              <Link to="" className="categories">
                Dress shirts
              </Link>
              <Link to="" className="categories">
                Loafers and Slip-ons
              </Link>
              <Link to="" className="categories">
                Oxford & Derbys
              </Link>
              <Link to="" className="categories">
                Running Shoes
              </Link>
              <Link to="" className="categories">
                Sandals and Flip-flops
              </Link>
              <Link to="" className="categories">
                Shoes cares and Accessories
              </Link>
              <Link to="" className="categories">
                Slippers
              </Link>
            </div>
          </div>

          <div>
            <div className="catHead">Accessories</div>
            <div className="catBox">
              <Link to="" className="categories">
                Bags & Bagpacks
              </Link>
              <Link to="" className="categories">
                Belts
              </Link>
              <Link to="" className="categories">
                Face masks
              </Link>
              <Link to="" className="categories">
                Gloves
              </Link>
              <Link to="" className="categories">
                Hats
              </Link>
              <Link to="" className="categories">
                Headphones
              </Link>
              <Link to="" className="categories">
                Jewelry
              </Link>
              <Link to="" className="categories">
                Phonecases
              </Link>
              <Link to="" className="categories">
                Scarves
              </Link>
              <Link to="" className="categories">
                Sunglasses & eyewears
              </Link>
              <Link to="" className="categories">
                Ties & pocket Squares
              </Link>
              <Link to="" className="categories">
                Wallets
              </Link>
              <Link to="" className="categories">
                Watches
              </Link>
            </div>
          </div>

          <div>
            <div className="catHead">Designers</div>
            <div className="catBox">
              <Link to="" className="categories">
                Designer Clothing
              </Link>
              <Link to="" className="categories">
                Designer shoes
              </Link>
              <Link to="" className="categories">
                Designer Accessories
              </Link>
            </div>

            <div className="catHead">Big & Tall</div>
            <div className="catBox">
              <Link to="" className="categories">
                Clothing
              </Link>
              <Link to="" className="categories">
                Jeans
              </Link>
              <Link to="" className="categories">
                Pants
              </Link>
              <Link to="" className="categories">
                Shirts
              </Link>
            </div>

            <div className="catHead">Grooming & Cologne</div>
            <div className="catBox">
              <Link to="" className="categories">
                Body care & Deodrant
              </Link>
              <Link to="" className="categories">
                Cologne
              </Link>
              <Link to="" className="categories">
                Dopp Kits & Toiletry
              </Link>
              <Link to="" className="categories">
                Gifts and Sets
              </Link>
              <Link to="" className="categories">
                Hair Products
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1587715363857-65fcecee8fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbiUyMGNsb3Roc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=''
              style={{ marginTop: "50px", height: "350px" }}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
};
