import { Link } from "react-router-dom";

export const Product = ({ product, convertPrice }) => {
    const { id, name, status, brand, price, img, sale, stock } = product;

    return (
        product && (
            <div className="flex flex-col mb-10">
                <Link to={`/product/${id}`}>
                    <div className="w-96 h-96 rounded-10 mb-6">
                        <img className="w-full h-full rounded-10 border border-gray-300" src={img} alt="product" />
                    </div>
                </Link>

                <div className="mb-3">
                        <span className="text-l leading-22 text-gray-600" style={{fontFamily: 'sb'}}>{brand}</span>
                    { stock > 10 ?
                        (<span></span>) :
                        (<span className="inline-block bg-red-600 text-white text-base ml-3 font-bold px-2 py-1 rounded-xl" style={{fontFamily: 'sb'}}>품절 임박!</span>)
                    }
                </div>

                <div className="mb-3">
                    {name.length > 12 ?
                        (<span className="text-3xl leading-22 text-black" style={{fontFamily: 'sb'}}> {name.slice(0, 10)} ...</span>) :
                        (<span className="text-3xl leading-22 text-black" style={{fontFamily: 'sb'}}>{name}</span>)
                    }
                    <span>  / </span>
                    <span className="text-base leading-22 text-black" style={{fontFamily: 'sb'}}>{status} 보관</span>
                </div>

                <div className="mb-2">
                    <span className="text-base">남은 수량 : </span>
                    {stock > 10 ?
                        (<span className="text-base" style={{fontFamily: 'sb'}}>{stock}개</span>) :
                        (<span className="text-base text-red-600 font-bold">{stock}개</span>)
                    }
                </div>

                <div>
                    {sale > 0 ? (
                            <>
                                <div>
                                    <span className="text-m font-bold leading-30 text-red-600 line-through">{convertPrice(price)} 원</span>
                                    <span className="text-m font-bold leading-30 text-red-600">  -{sale}%</span>
                                </div>

                                <span className="text-3xl font-bold leading-30 text-black">{convertPrice((price * ((100 - sale) / 100)))}</span>
                                <span className="text-base leading-20 text-black"> 원</span>
                            </>) :
                        (
                            <div className="mb-6">
                                <span className="text-3xl font-bold leading-30 text-black">{convertPrice(price)}</span>
                                <span className="text-base leading-20 text-black"> 원</span>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    );
};