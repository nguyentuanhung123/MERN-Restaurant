// stripe
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const paymentStripeController = async (req, res) => {
    try {
        // console.log(req.body);

        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [{
                shipping_rate: "shr_1PY3EnRpQqSAabQZl6hreDKi"
            }],
            line_items: req.body.map((item) => {
                return {
                    price_data: // Dữ liệu giá của mục
                    {
                        currency: "inr",
                        product_data: {
                            name: item.name,
                            // images: [item.image]
                        },
                        unit_amount: item.price * 100, // Giá của sản phẩm (giá trị cần được nhân với 100 vì Stripe tính giá theo đơn vị nhỏ nhất của tiền tệ).
                    },
                    adjustable_quantity: //Thiết lập số lượng có thể điều chỉnh:
                    {
                        enabled: true, // Cho phép điều chỉnh số lượng
                        minimum: 1 // Số lượng tối thiểu là 1.
                    },
                    quantity: item.qty // Số lượng của mục đó.
                }
            }),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        }

        const session = await stripe.checkout.sessions.create(params) // Tạo phiên thanh toán.
        // console.log(session);
        res.status(200).json(session.id)
    } catch(err) {
        console.error('Error creating Stripe session:', err); // Thêm logging cho việc gỡ lỗi
        res.status(err.statusCode || 500).json(err.message)
    }
}

module.exports = paymentStripeController;