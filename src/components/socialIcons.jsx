
import {Socials, SocialToIcon, SocialToLink, SocialToColor} from "../data/socials.js";

export default function SocialIcons() {
    return (<>
      <div style={{width: "100%", display:"flex", justifyContent: "center", columnGap: "10px"}}>

        {Socials.map((social, index) => {
          return (
          <a href={SocialToLink[social]}>
            <div key={index} style={{backgroundColor: SocialToColor[social], borderRadius:"40%", width:"100px", height:"100px", alignContent: "center"}}>
                <img src={SocialToIcon[social]} alt={social} style={{width:"90%", margin:"auto", display:"block"}} />
            </div>
          </a>
        );
      })}
      </div>
    </>);
}
