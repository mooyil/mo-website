import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import React from "react"
import "../styles/Footer.css"

export default function Footer () { 
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram/>
                <Twitter/>
                <Facebook/>
                <LinkedIn/>
                <p> &copy; 2022 muhammed.com </p>
            </div>
        </div>
    )
 }