import CheckoutForm, { Paypall } from "@/components/checkoutForm";
import { ProductsInCheckout } from "@/components/checkoutForm";



export default function CheckoutPage(){
    return(
        <div className="bg-white">
            <ProductsInCheckout/>
            <CheckoutForm/>
            <Paypall/>
        </div>
    )
}