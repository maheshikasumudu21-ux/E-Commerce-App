import SportImage from '../../images/banner.png'
import Button from "../Atoms/Button"

const HeroSection =()=>{
    return(
<div className='position-relative overflow-hidden' style={{background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    ,minHeight:'700px'}}>

    <div className='container'>
        <div className='row-align-items-center- min-vh-50'>
        <div className='col-lg-6 text white py-5'>
            <h1 className='display-3 fw-bold mb-4'>Sport gear for champion</h1>
  <p className='lead mb-4'>elewate your game with premium sport equipments.</p>
  
  <div className='d-flex gap-3'>
        <Button text="shop now" className="btn-outline-light btn-lg px-5"/>
        <Button text="view collection" className="btn-outline-light btn-lg px-5"/>
  </div>

        </div>
        <div className='col-lg-6 d-none d-lg-block'>
            <div className="text-center">
                <img src={SportImage} alt="Banner" style={{maxWidth:'100%'}} />
            </div>
            

        </div>
</div>
    </div>

</div>

    );
};

export default HeroSection;