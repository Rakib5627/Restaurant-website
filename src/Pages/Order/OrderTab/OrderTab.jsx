// import Swiper from "swiper";
// // import { Pagination } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";
import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({items}) => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    // };

    return (
        <div >
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

 
        </div>
    );
};

export default OrderTab;