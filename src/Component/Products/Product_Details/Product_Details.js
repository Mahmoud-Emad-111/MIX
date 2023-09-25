import '../Product_Details/Product_Details.css';
import Nike from '../../../assets/NIKE/hero.png';

export default function Product_Details() {
    return(
        
        <div className="product_details">
        
{/* //////////////Product Details Left////////////////////////// */}

            <div className='p_d_left'>

                <img src={Nike} alt="" />
            </div>
{/* //////////////Product Details Left////////////////////////// */}

{/* /////////////////////////////////////////////////////////////////////////////////// */}
{/* //////////////Product Details Right////////////////////////// */}
            <div className='p_d_right'>
                 <div className='name_and_price'>
                
                    <h1>nike shosce blue</h1>
                    <div className='price'> 
                            <span>15$</span>
                    </div>
                </div>   
                <div className='description'>
                    <p>It is a long established fact 
                         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                          as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                           publishing packages 
                    </p>
                    <button>Add Card</button>
                </div>
                
            </div>

{/* //////////////Product Details Right////////////////////////// */}

        </div>
    )
} 