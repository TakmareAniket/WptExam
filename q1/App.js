
import { useEffect, useState } from "react";

export default function App()
{
  return(
    <>
    <Chating/>
    </>
  );
}

function Chating(){

  return(
    <div >
      <div>
      <h2 className="bg-dark text-white"> my chat app <h6> by(Aniket Takmare_ 210940520013)</h6></h2>
        </div>
<div >
  <input className="w-80 text-light" type="text" name="" id=""  placeholder="Lets chat here"/>
</div>
<div>
  <input className="btn btn-secondary w-30 m-3" type="button" value="send" />
</div>
        </div>
  );
}