import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaInstagram} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>, path:'https://github.com/kangmiru'},
    {icon: <FaLinkedinIn/>, path:'https://www.linkedin.com/in/fadz-hazmi/'},
    {icon: <FaYoutube/>, path:'https://www.youtube.com/@hafadzhazmirullah6430'},
    {icon: <FaInstagram/>, path:'https://www.instagram.com/fadz_haz/'},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social