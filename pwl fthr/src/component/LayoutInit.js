import Footers from "./Footer";
import Headers from "./Headers";
import "../Assets/Msg.css"; 

const LayoutInit = ({ children }) => {
  return (
    <div className="">
      <div className="backgroundImage">
        <Headers />

        <section className="">
          <div className="">
            {children}
          </div>
        </section>
      </div>
      <Footers />
    </div>
    
  );
};


export default LayoutInit;
