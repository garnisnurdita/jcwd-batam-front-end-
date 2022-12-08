import ImgMember from "../assets/member.jpg"


export function Member() {
    return ( <>
    <div id="member">
                <p>
                    Name
                </p>  
                <img src={ImgMember} alt="member" width="100%" height="100%"/> 
            </div>
    </>) 
}


export default function Band() {
return ( <>
   <div id="band-content">
        <div>
        </div>

        <div id="band-header" >
            The Band
        </div>

        <div id="band-subheader">
            We love music
         </div>
         <div id="band-content-text">
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </div>

         <div id="img-band">
            
           <Member/>
           <Member/>
           <Member/>

         </div>

    </div>
</>)
}