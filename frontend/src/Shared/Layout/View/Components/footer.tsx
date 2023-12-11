import Logo from "./logo";

function Footer() {
    return (  
      <>
         <div  className=" flex flex-row items-center justify-center gap-5 p-2 ">

        <Logo />
        <div className=" flex flex-row gap-2 "> 
          <div>Products</div>
          <div>Contact</div>
        </div>
        </div>
        <div className="flex justify-center text-sm">
        <p>Developed by Jorge Reales</p>
      </div>     
   
      </>
    );
  }
  
  export default Footer;
  