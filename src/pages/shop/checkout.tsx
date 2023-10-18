import CheckoutForm, { Paypall } from "@/components/checkoutForm";
import { ProductsInCheckout } from "@/components/checkoutForm";



export default function CheckoutPage(){
    return(
        <div>
            <ProductsInCheckout/>
            <CheckoutForm/>
            <Paypall/>
        </div>
    )
}